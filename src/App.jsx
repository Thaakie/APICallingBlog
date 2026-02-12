import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PostDetail from "./components/post";
import Write from "./components/writes";
import EditPost from "./components/edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </>
  );
}

export default App;
