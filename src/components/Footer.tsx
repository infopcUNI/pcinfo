// Footer.tsx (Actualizado para modo oscuro)
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 dark:bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* University/Section Info */}
          <div>
            <h3 className="text-lg font-bold text-green-300 mb-4">Ingeniería Computacional Sostenible</h3>
            <p className="text-sm">
              Plataforma informativa sobre temas de computación con enfoque en prácticas ecológicas y sostenibilidad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-green-300">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-green-300 transition-colors">Inicio</a></li>
              <li><a href="#recursos" className="hover:text-green-300 transition-colors">Recursos</a></li>
              <li><a href="#contacto" className="hover:text-green-300 transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Team */}
          <div>
            <h4 className="text-md font-semibold mb-4 text-green-300">Equipo de Desarrollo</h4>
            <ul className="space-y-1 text-sm">
              <li>José Castillo</li>
              <li>Jorge Padilla</li>
              <li>Engel Calderón</li>
              <li>Nihat Reyes</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-700 dark:border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>&copy; 2025 Equipo de Desarrollo. Todos los derechos reservados. | Enfoque Ecológico</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;