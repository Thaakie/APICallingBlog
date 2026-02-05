import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>Mini Blog</h1>
      <p>Data diambil dari API btw</p>

      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: 20 }}>
          <h3>{post.title}</h3>
          <p>{post.body.substring(0, 80)}...</p>

          <Link to={`/post/${post.id}`}>
            <button>Baca Detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
