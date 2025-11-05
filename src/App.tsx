import { ThemeProvider } from './components/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Unidad1 from './pages/unidad1';
import Unidad2 from './pages/unidad2';
import Unidad3 from './pages/unidad3';
import Unidad4 from './pages/unidad4';
import Unidad5 from './pages/unidad5';
import Unidad6 from './pages/unidad6';
import Unidad7 from './pages/unidad7';
import Recursos from './pages/Recursos';
import './App.css'
import NotFound from './components/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="pcinfo/" element={<Home />} />
          <Route path="pcinfo/unidad1" element={<Unidad1 />} />
          <Route path="pcinfo/unidad2" element={<Unidad2 />} />
          <Route path="pcinfo/unidad3" element={<Unidad3 />} />
          <Route path="pcinfo/unidad4" element={<Unidad4 />} />
          <Route path="pcinfo/unidad5" element={<Unidad5 />} />
          <Route path="pcinfo/unidad6" element={<Unidad6 />} />
          <Route path="pcinfo/unidad7" element={<Unidad7 />} />
          <Route path="pcinfo/recursos" element={<Recursos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}