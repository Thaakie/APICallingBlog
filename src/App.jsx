import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PostDetail from "./components/post";
import Write from "./components/writes";
import EditPost from "./components/edit";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
