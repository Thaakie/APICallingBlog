import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import EditPost from "./edit";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex gap-4 mb-6">
        <Link to={`/edit/${post.id}`}>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">Edit</button>
        </Link>
        <Link to="/">
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">⬅ Kembali</button>
        </Link>
      </div>

      <article className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>
        <p className="text-gray-700 leading-relaxed text-lg">{post.content}</p>
      </article>
    </div>
  );
}
