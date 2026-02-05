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
    <div style={{ padding: 30 }}>
      <h1>Mini Medium</h1>
      <p>Semua artikel dari database MySQL 😎</p>

      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: 30 }}>
          <h2>{post.title}</h2>

          <Link to={`/post/${post.slug}`}>
            <button>Baca Artikel</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
