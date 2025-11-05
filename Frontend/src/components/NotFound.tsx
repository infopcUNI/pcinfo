// pages/NotFound.tsx
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Icon/Illustration */}
        <div className="mb-8">
          <svg
            className="mx-auto h-24 w-24 text-blue-600 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-6xl font-bold text-blue-800 dark:text-blue-200 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Página no encontrada
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Parece que has navegado a un circuito digital perdido en la red. 
          No te preocupes, la sostenibilidad en la computación nos enseña a redirigir el flujo de datos eficientemente. 
          ¡Regresa al inicio y explora rutas conocidas!
        </p>

        {/* Back to Home Button */}
        <a
          href="/"
          className="inline-block bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Volver al Inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;