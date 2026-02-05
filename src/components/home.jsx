import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Mini Medium</h1>
        <a href="/write">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">Tulis Artikel ✍️</button>
        </a>
      </div>

      <p className="text-gray-600 mb-8">Semua artikel dari database MySQL 😎</p>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{post.title}</h2>

            <Link to={`/post/${post.slug}`}>
              <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">Baca Artikel</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
