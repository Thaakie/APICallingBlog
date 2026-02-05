import Hero from "./components/Hero";
import EditPost from "./components/edit";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      <div className="container mx-auto py-8">
        <EditPost />
      </div>
    </div>
  );
}

export default App;
