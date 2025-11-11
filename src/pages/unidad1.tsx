// unidad1.tsx (Updated with enhanced content and design)
import React from 'react';
import imageA from '../assets/MaquinaSecuencial.png';
import imageB from '../assets/funcionalOrg.png';
import imageC from '../assets/estructuralOrg.png';

const Unidad1: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      {/* Header de la Unidad */}
      <section className="bg-gradient-to-r from-blue-800 to-green-600 dark:from-blue-900 dark:to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unidad 1: Introducción a la Arquitectura y Organización de Computadoras</h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            Explora los fundamentos de la arquitectura y organización de computadoras, desde su evolución histórica hasta los principios de diseño sostenible que integran eficiencia y responsabilidad ambiental.
          </p>
        </div>
      </section>
      {/* 1.1 Arquitectura y Organización */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">1.1 Arquitectura y Organización de Computadoras</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                La arquitectura y organización de computadoras se dividen en dos perspectivas clave:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Vistas:</strong> El proceso constructivo sigue un flujo de <span className="text-red-600">{`Planificación, Diseño`}</span> → <span className="text-green-600">{`Implementación`}</span>.</li>
                <li><strong>Arquitectura:</strong> Atributos visibles al programador, como el conjunto de instrucciones y registros accesibles.</li>
                <li><strong>Organización:</strong> Detalla la implementación, componentes y su interconexión, incluyendo enfoques funcional y estructural.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Estos enfoques son esenciales para diseñar sistemas computacionales sostenibles que optimicen recursos y minimicen el impacto ambiental.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Funcional:</strong> Define la función de cada componente dentro del sistema.</li>
                <li><strong>Estructural:</strong> Describe la posición y las interconexiones físicas de los componentes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 1.2 Evolución de Computadoras */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            1.2 Evolución de las Computadoras
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Desde las máquinas mecánicas de Charles Babbage hasta los modernos procesadores de bajo consumo, la evolución de las computadoras ha sido un viaje hacia la eficiencia energética y la sostenibilidad.
          </p>
          <div className="aspect-video w-full max-w-4xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/HaSCSGv6kFM"
              title="Evolución de las Computadoras"
              className="w-full h-full rounded-lg shadow-md"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      {/* 1.3 Máquina Secuencial */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">1.3 Máquina Secuencial de Programa Almacenado</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                El concepto de programa almacenado permite definir instrucciones simples que programan cualquier tarea de cálculo, cargándolas en la misma memoria que los datos.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Una máquina secuencial ejecuta estas instrucciones secuencialmente gracias a un secuenciador o unidad de control, optimizando el uso de recursos.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Esta implementación requiere cinco unidades funcionales, una evolución del concepto de Babbage:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Un órgano de cálculo (ALU).</li>
                <li>Memoria para almacenar datos y programas.</li>
                <li>Unidad de control para la secuencia de ejecución.</li>
                <li>Unidades de entrada y salida para interacción con el exterior.</li>
              </ul>
              <div className="mt-6">
                <img src={imageA} alt="Máquina Secuencial" className="mx-auto rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 1.4 Organización de la Computadora */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">1.4 Organización de la Computadora</h2>
          <div className="space-y-8">
            {/* Funcional */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Enfoque Funcional</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Este enfoque se centra en las funciones requeridas para el objetivo de la computadora:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Procesamiento de datos.</li>
                <li>Almacenamiento de datos.</li>
                <li>Traslado de datos.</li>
                <li>Operaciones de control.</li>
              </ul>
              <div className="mt-4">
                <img src={imageB} alt="Enfoque Funcional" className="mx-auto rounded-lg shadow-md" />
              </div>
            </div>
            {/* Estructural */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Enfoque Estructural</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Define los componentes físicos y sus interconexiones:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Procesador o CPU.</li>
                <li>Memoria.</li>
                <li>Entrada - Salida (E/S).</li>
              </ul>
              <div className="mt-4">
                <img src={imageC} alt="Enfoque Estructural" className="mx-auto rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unidad1;