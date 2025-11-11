// Navbar.tsx (Updated with modern design)
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
    <nav className="bg-gradient-to-r from-blue-900 to-green-800 dark:from-gray-900 dark:to-green-900 text-white shadow-xl fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/University Branding */}
          <div className="flex items-center space-x-2">
            <svg className="h-8 w-8 text-green-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <h1 className="text-2xl font-bold text-green-300">Ingeniería Computacional Sostenible</h1>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="pcinfo/" className="hover:text-green-200 transition-colors font-medium">Inicio</Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center hover:text-green-200 transition-colors font-medium"
              >
                Unidades
                <svg
                  className={`ml-1 h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-blue-800 dark:bg-gray-800 rounded-lg shadow-lg py-2 w-64">
                  <Link
                    to="pcinfo/unidad1"
                    className="block px-4 py-2 text-sm hover:bg-green-700 dark:hover:bg-gray-700 text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    1. Introducción a la Arquitectura
                  </Link>
                  <Link
                    to="pcinfo/unidad2"
                    className="block px-4 py-2 text-sm hover:bg-green-700 dark:hover:bg-gray-700 text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    2. Organización del CPU
                  </Link>
                  <Link
                    to="pcinfo/unidad3"
                    className="block px-4 py-2 text-sm hover:bg-green-700 dark:hover:bg-gray-700 text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    3. Diseño del Conjunto de Instrucciones
                  </Link>
                  <Link
                    to="pcinfo/unidad4"
                    className="block px-4 py-2 text-sm hover:bg-green-700 dark:hover:bg-gray-700 text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    4. Unidad de Ejecución
                  </Link>
                  <Link
                    to="pcinfo/unidad5"
                    className="block px-4 py-2 text-sm hover:bg-green-700 dark:hover:bg-gray-700 text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    5. Unidad de Control
                  </Link>
                  <Link
                    to="pcinfo/unidad6"
                    className="block px-4 py-2 text-sm hover:bg-green-700 dark:hover:bg-gray-700 text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    6. Sistema de Memoria
                  </Link>
                  <Link
                    to="pcinfo/unidad7"
                    className="block px-4 py-2 text-sm hover:bg-green-700 dark:hover:bg-gray-700 text-white"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    7. Sistema de Entrada/Salida
                  </Link>
                </div>
              )}
            </div>
            <Link to="pcinfo/recursos" className="hover:text-green-200 transition-colors font-medium">Recursos</Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-green-700 dark:hover:bg-gray-700 transition-colors"
              aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
            >
              {theme === 'light' ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-green-700 transition-colors">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="pcinfo/" className="block hover:text-green-200 py-2 font-medium">Inicio</Link>
            <div>
              <button
                onClick={toggleDropdown}
                className="w-full text-left hover:text-green-200 py-2 font-medium flex justify-between items-center"
              >
                Unidades
                <svg
                  className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="ml-4 space-y-1">
                  <Link
                    to="pcinfo/unidad1"
                    className="block text-sm hover:text-green-200 py-1"
                    onClick={() => { setIsDropdownOpen(false); setIsOpen(false); }}
                  >
                    1. Introducción a la Arquitectura
                  </Link>
                  <Link
                    to="pcinfo/unidad2"
                    className="block text-sm hover:text-green-200 py-1"
                    onClick={() => { setIsDropdownOpen(false); setIsOpen(false); }}
                  >
                    2. Organización del CPU
                  </Link>
                  <Link
                    to="pcinfo/unidad3"
                    className="block text-sm hover:text-green-200 py-1"
                    onClick={() => { setIsDropdownOpen(false); setIsOpen(false); }}
                  >
                    3. Diseño del Conjunto de Instrucciones
                  </Link>
                  <Link
                    to="pcinfo/unidad4"
                    className="block text-sm hover:text-green-200 py-1"
                    onClick={() => { setIsDropdownOpen(false); setIsOpen(false); }}
                  >
                    4. Unidad de Ejecución
                  </Link>
                  <Link
                    to="pcinfo/unidad5"
                    className="block text-sm hover:text-green-200 py-1"
                    onClick={() => { setIsDropdownOpen(false); setIsOpen(false); }}
                  >
                    5. Unidad de Control
                  </Link>
                  <Link
                    to="pcinfo/unidad6"
                    className="block text-sm hover:text-green-200 py-1"
                    onClick={() => { setIsDropdownOpen(false); setIsOpen(false); }}
                  >
                    6. Sistema de Memoria
                  </Link>
                  <Link
                    to="pcinfo/unidad7"
                    className="block text-sm hover:text-green-200 py-1"
                    onClick={() => { setIsDropdownOpen(false); setIsOpen(false); }}
                  >
                    7. Sistema de Entrada/Salida
                  </Link>
                </div>
              )}
            </div>
            <Link to="pcinfo/recursos" className="block hover:text-green-200 py-2 font-medium">Recursos</Link>
            <button
              onClick={toggleTheme}
              className="w-full text-left hover:text-green-200 py-2 flex items-center font-medium"
              aria-label={`Cambiar a modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
            >
              Modo {theme === 'light' ? 'Oscuro' : 'Claro'}
              {theme === 'light' ? (
                <svg className="ml-auto h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="ml-auto h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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