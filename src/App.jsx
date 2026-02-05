import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PostDetail from "./components/post";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
