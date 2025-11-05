// pages/EnTrabajo.tsx
import React from 'react';

const EnTrabajo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon/Illustration */}
        <div className="mb-8">
          <svg
            className="mx-auto h-24 w-24 text-yellow-500 dark:text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">🚧</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Unidad en Desarrollo
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          Esta unidad aún está en construcción. Estamos trabajando arduamente para traer contenido educativo de calidad. 
          ¡Regresa más tarde para descubrir lo que tenemos preparado!
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

export default EnTrabajo;
