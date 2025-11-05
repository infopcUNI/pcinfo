// Navbar.tsx (Actualizado con enlaces hardcodeados para unidades)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-blue-800 dark:bg-gray-900 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/University Branding */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Ingeniería Computacional Sostenible</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-green-300 transition-colors">Inicio</Link>
            
            {/* Dropdown for Units */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center hover:text-green-300 transition-colors"
              >
                Unidades
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-blue-700 dark:bg-gray-800 rounded-md shadow-lg py-1 w-48">
                  <Link
                    to="pcinfo/unidad1"
                    className="block px-4 py-2 text-sm hover:bg-blue-600 dark:hover:bg-gray-700 hover:text-green-300"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Introducción a la arquitectura y organización de la computadora
                  </Link>
                  <Link
                    to="pcinfo/unidad2"
                    className="block px-4 py-2 text-sm hover:bg-blue-600 dark:hover:bg-gray-700 hover:text-green-300"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Organización del CPU
                  </Link>
                  <Link
                    to="pcinfo/unidad3"
                    className="block px-4 py-2 text-sm hover:bg-blue-600 dark:hover:bg-gray-700 hover:text-green-300"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Diseño del Conjunto de Instrucciones
                  </Link>
                  <Link
                    to="pcinfo/unidad4"
                    className="block px-4 py-2 text-sm hover:bg-blue-600 dark:hover:bg-gray-700 hover:text-green-300"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Unidad de Ejecución
                  </Link>
                  <Link
                    to="pcinfo/unidad5"
                    className="block px-4 py-2 text-sm hover:bg-blue-600 dark:hover:bg-gray-700 hover:text-green-300"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Unidad de Control
                  </Link>
                  <Link
                    to="pcinfo/unidad6"
                    className="block px-4 py-2 text-sm hover:bg-blue-600 dark:hover:bg-gray-700 hover:text-green-300"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Sistema de Memoria
                  </Link>
                  <Link
                    to="pcinfo/unidad7"
                    className="block px-4 py-2 text-sm hover:bg-blue-600 dark:hover:bg-gray-700 hover:text-green-300"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Sistema de Entrada/Salida
                  </Link>
                </div>
              )}
            </div>

            <Link to="pcinfo/recursos" className="hover:text-green-300 transition-colors">Recursos Descargables</Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-blue-700 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
            >
              {theme === 'light' ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-green-300">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block hover:text-green-300 py-2">Inicio</Link>
            
            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={toggleDropdown}
                className="w-full text-left hover:text-green-300 py-2 flex justify-between items-center"
              >
                Unidades
                <svg
                  className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="ml-4 space-y-1">
                  <Link
                    to="/unidad1"
                    className="block text-sm hover:text-green-300 py-1"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Introducción a la arquitectura y organización de la computadora
                  </Link>
                  <Link
                    to="/unidad2"
                    className="block text-sm hover:text-green-300 py-1"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Organización del CPU
                  </Link>
                  <Link
                    to="/unidad3"
                    className="block text-sm hover:text-green-300 py-1"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Diseño del Conjunto de Instrucciones
                  </Link>
                  <Link
                    to="/unidad4"
                    className="block text-sm hover:text-green-300 py-1"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Unidad de Ejecución
                  </Link>
                  <Link
                    to="/unidad5"
                    className="block text-sm hover:text-green-300 py-1"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Unidad de Control
                  </Link>
                  <Link
                    to="/unidad6"
                    className="block text-sm hover:text-green-300 py-1"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Sistema de Memoria
                  </Link>
                  <Link
                    to="/unidad7"
                    className="block text-sm hover:text-green-300 py-1"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Sistema de Entrada/Salida
                  </Link>
                </div>
              )}
            </div>

            <Link to="/recursos" className="block hover:text-green-300 py-2">Recursos Descargables</Link>

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-full text-left hover:text-green-300 py-2 flex items-center"
              aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
            >
              Modo {theme === 'light' ? 'Oscuro' : 'Claro'}
              {theme === 'light' ? (
                <svg className="ml-auto h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="ml-auto h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;