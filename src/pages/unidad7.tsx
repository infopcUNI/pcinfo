// unidad1.tsx
import React from 'react';

const Unidad1: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      {/* Header de la Unidad */}
      <section className="bg-gradient-to-r from-blue-800 to-green-600 dark:from-blue-900 dark:to-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unidad 1: Arquitectura y Organización de Computadoras</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            En esta unidad exploraremos la evolución de las computadoras, la máquina secuencial de programa almacenado, y la organización funcional y estructural de los componentes de una computadora.
          </p>
        </div>
      </section>

      {/* 1.1 Arquitectura y Organización */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">1.1 Arquitectura y Organización de Computadoras</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Vistas:</strong> Proceso constructivo: {`Planificación, Diseño`} → {`Implementación`}</li>
            <li><strong>Arquitectura:</strong> Atributos visibles al programador.</li>
            <li><strong>Organización:</strong> Implementación, componentes y su interconexión.</li>
            <li><strong>Funcional:</strong> Función de cada componente.</li>
            <li><strong>Estructural:</strong> Posición e interconexión.</li>
          </ul>
        </div>
      </section>

      {/* 1.2 Evolución de Computadoras */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">1.2 Evolución de las Computadoras</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            A lo largo de la historia, las computadoras han evolucionado desde máquinas mecánicas hasta sistemas electrónicos avanzados con capacidades de cómputo masivas.
          </p>
          {/* Aquí podrías incrustar un video */}
          <div className="aspect-video w-full max-w-3xl mx-auto">
            <iframe 
              src="ruta-del-video.mp4" 
              title="Evolución de Computadoras" 
              className="w-full h-full rounded-lg" 
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 1.3 Máquina Secuencial */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">1.3 Máquina Secuencial de Programa Almacenado</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Un programa almacenado se define como una secuencia de instrucciones simples que permiten programar cualquier tarea de cálculo, cargadas en la misma memoria que los datos.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            La máquina secuencial ejecuta instrucción tras instrucción desde la memoria gracias a un dispositivo de control, contando con cinco unidades funcionales: cálculo, memoria, control, entrada y salida.
          </p>
          {/* Imagen referencial */}
          <div className="mt-6">
            <img src="ruta-imagen1.png" alt="Máquina Secuencial" className="mx-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* 1.4 Organización de la Computadora */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">1.4 Organización de la Computadora</h2>
          
          {/* Funcional */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">Enfoque Funcional</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Procesamiento de datos</li>
              <li>Almacenamiento de datos</li>
              <li>Traslado de datos</li>
              <li>Operaciones de control</li>
            </ul>
            <img src="ruta-imagen2.png" alt="Enfoque Funcional" className="mt-4 mx-auto rounded-lg shadow-md" />
          </div>

          {/* Estructural */}
          <div>
            <h3 className="text-2xl font-semibold text-green-600 mb-2">Enfoque Estructural</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Procesador o CPU</li>
              <li>Memoria</li>
              <li>Entrada - Salida</li>
            </ul>
            <img src="ruta-imagen3.png" alt="Enfoque Estructural" className="mt-4 mx-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unidad1;
