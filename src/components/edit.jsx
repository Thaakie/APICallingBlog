import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // ambil data awal
  useEffect(() => {
    fetch(`http://localhost:5000/post-by-id/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:5000/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    navigate(`/post/${title.toLowerCase().replace(/ /g, "-")}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Edit Artikel</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul artikel..." className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Isi artikel..." rows="10" className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition font-semibold">
          Update
        </button>
      </form>
    </div>
  );
}
