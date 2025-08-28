// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">PC Info</Link>
        <ul className="flex space-x-6">
          <li><Link to="/componentes" className="hover:text-cyan-400 transition-colors">Componentes</Link></li>
          <li><Link to="/curiosidades" className="hover:text-cyan-400 transition-colors">Datos Curiosos</Link></li>
          <li><Link to="/recomendaciones" className="hover:text-cyan-400 transition-colors">Recomendaciones</Link></li>
          <li><Link to="/entrar" className="hover:text-cyan-400 transition-colors">Entrar</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;