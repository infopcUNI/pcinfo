// pages/unidad6.tsx
import React from 'react';

const Unidad6: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      {/* Header de la Unidad */}
      <section className="bg-gradient-to-r from-blue-800 to-green-600 dark:from-blue-900 dark:to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unidad 6: Sistema de Memoria
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            Explora la función de almacenamiento en las computadoras, incluyendo registros del CPU, memoria principal y secundaria, con énfasis en operaciones, prestaciones y métricas para diseños sostenibles.
          </p>
        </div>
      </section>

      {/* 6.1 La Función de Almacenamiento */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            6.1 La Función de Almacenamiento
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li><strong>Registros del CPU:</strong> Temporalmente, en la ejecución de operaciones.</li>
            <li><strong>Memoria principal:</strong> Programas y Datos.</li>
            <li><strong>Memoria secundaria:</strong> Masiva, Permanente ¿?.</li>
          </ul>
        </div>
      </section>

      {/* 6.2 Función de Almacenamiento */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            6.2 Función de Almacenamiento
          </h2>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Operaciones</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
              <li>Lectura</li>
              <li>Escritura</li>
            </ul>
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Prestaciones y Métricas</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
              <li>Latencia (tiempo): acceso, ciclo, Vt</li>
              <li>Capacidad (bytes: KB, MB, GB, TB,…)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Secciones adicionales basadas en el contenido del PDF */}
      {/* Nota: Como el PDF tiene 49 páginas pero solo se proporcionaron las primeras, he estructurado basado en lo dado. Agrega más secciones si tienes contenido adicional. */}
      {/* Por ejemplo, si hay secciones sobre jerarquía de memoria, caché, etc., añádelas aquí. */}

      {/* 6.3 Jerarquía de Memoria (asumiendo contenido típico) */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            6.3 Jerarquía de Memoria
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            La jerarquía de memoria equilibra velocidad y capacidad para optimizar el rendimiento y la eficiencia energética.
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>Registros: Más rápidos, menor capacidad.</li>
            <li>Caché: Intermedia entre registros y memoria principal.</li>
            <li>Memoria Principal (RAM): Mayor capacidad, más lenta.</li>
            <li>Memoria Secundaria (HDD/SSD): Masiva, persistente.</li>
          </ul>
        </div>
      </section>

      {/* 6.4 Tecnologías de Memoria */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            6.4 Tecnologías de Memoria
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Memoria Volátil</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>DRAM: Dinámica, necesita refresco.</li>
                <li>SRAM: Estática, más rápida pero costosa.</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Memoria No Volátil</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Flash: Usada en SSD, USB.</li>
                <li>Disco Magnético: HDD tradicional.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 Gestión de Memoria */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            6.5 Gestión de Memoria
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Técnicas para optimizar el uso de memoria en sistemas sostenibles.
          </p>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>Memoria Virtual: Extiende la memoria principal usando secundaria.</li>
            <li>Paginación y Segmentación: Manejo eficiente de bloques de memoria.</li>
            <li>Algoritmos de Reemplazo: FIFO, LRU para caché y páginas.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Unidad6;