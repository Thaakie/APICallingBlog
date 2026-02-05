import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <div style={{ padding: 30 }}>
      <Link to="/">⬅ Kembali</Link>

      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
