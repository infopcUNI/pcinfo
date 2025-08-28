import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer.tsx";
import "./App.css"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Otras rutas pueden ser añadidas aquí */}
      </Routes>
      <Footer />
    </Router>
  );
}