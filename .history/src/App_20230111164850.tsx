import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
function App() {
  return (
    <div className="container mx-auto">
      <h1>tran duc anh</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
