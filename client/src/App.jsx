import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Plan from "./pages/Plan";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-sky-50 flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}