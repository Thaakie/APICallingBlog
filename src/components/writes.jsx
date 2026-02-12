import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://api-calling-blog-backend.vercel.app/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    alert("Artikel berhasil dipublish 🎉");
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Tulis Artikel</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        <input type="text" placeholder="Judul artikel..." value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <textarea placeholder="Isi artikel..." value={content} onChange={(e) => setContent(e.target.value)} rows="10" className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition font-semibold">
          Publish
        </button>
      </form>
    </div>
  );
}
