// Footer.tsx (Updated with modern design)
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-green-800 dark:from-gray-900 dark:to-green-900 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* University/Section Info */}
          <div>
            <h3 className="text-xl font-bold text-green-300 mb-4">Ingeniería Computacional Sostenible</h3>
            <p className="text-sm text-gray-200">
              Plataforma dedicada a la enseñanza de la computación con un enfoque sostenible, promoviendo tecnologías eco-amigables.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="/pcinfo/" className="hover:text-green-100 transition-colors">Inicio</a></li>
              <li><a href="/pcinfo/recursos" className="hover:text-green-100 transition-colors">Recursos</a></li>
              <li><a href="/pcinfo/contacto" className="hover:text-green-100 transition-colors">Contacto</a></li>
              <li><a href="/pcinfo/acerca" className="hover:text-green-100 transition-colors">Acerca de Nosotros</a></li>
            </ul>
          </div>
          {/* Team */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-300">Equipo de Desarrollo</h4>
            <ul className="space-y-1 text-sm text-gray-200">
              <li>Jose Castillo</li>
              <li>Jorge Padilla</li>
              <li>Engel Calderón</li>
              <li>Nihat Reyes</li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-green-700 dark:border-green-800 mt-6 pt-4 text-center text-sm text-gray-200">
          <p>&copy; {new Date().getFullYear()} Equipo de Desarrollo. Todos los derechos reservados. | Enfoque Ecológico</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;