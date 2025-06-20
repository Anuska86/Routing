import "../src/index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/pages/About.jsx";
import Home from "./components/pages/Home.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
