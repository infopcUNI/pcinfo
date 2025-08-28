import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PC Info</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/componentes" className="hover:text-cyan-400 transition-colors">Componentes</Link>
              </li>
              <li>
                <Link to="/curiosidades" className="hover:text-cyan-400 transition-colors">Datos Curiosos</Link>
              </li>
              <li>
                <Link to="/recomendaciones" className="hover:text-cyan-400 transition-colors">Recomendaciones</Link>
              </li>
              <li>
                <Link to="/entrar" className="hover:text-cyan-400 transition-colors">Entrar</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-gray-400">Email: contacto@pcinfo.com</p>
            <p className="text-gray-400">Teléfono: +505 1234-5678</p>
            <p className="text-gray-400">Dirección: Managua, Nicaragua</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre Nosotros</h3>
            <p className="text-gray-400">
              PC Info es una plataforma educativa diseñada para ayudarte a entender y elegir los mejores componentes para tu computadora. ¡Explora, aprende y construye!
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} PC Info. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;