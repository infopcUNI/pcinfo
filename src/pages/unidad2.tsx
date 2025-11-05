// unidad2.tsx
import React from 'react';
import cpuStructure from '../assets/cpuStructure.png';
import datapathControl from '../assets/datapathControl.png';
import accumulatorArch from '../assets/accumulatorArch.png';
import stackArch from '../assets/stackArch.png';
import registerArch from '../assets/registerArch.png';

const Unidad2: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">

      {/* Header de la Unidad */}
      <section className="bg-gradient-to-r from-blue-800 to-green-600 dark:from-blue-900 dark:to-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unidad 2: Organización del CPU</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            En esta unidad exploraremos el procesador, el ciclo de instrucción, los elementos que estructuran el CPU y las distintas arquitecturas de procesadores.
          </p>
        </div>
      </section>

      {/* 2.1 El Procesador */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">2.1 El Procesador</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            El procesador se encarga de <strong>ejecutar instrucciones</strong>. 
            Lo hace siguiendo un procedimiento definido, por ejemplo: <code>ADD AX, [10]</code>.
          </p>
        </div>
      </section>

      {/* 2.2 Ciclo de Instrucción */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">2.2 Ciclo de Instrucción</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            El ciclo de instrucción tiene fases bien definidas: <strong>FETCH</strong> y <strong>EXECUTE</strong>, cada una con actividades específicas.
          </p>

          {/* FASE FETCH */}
          <h3 className="text-2xl font-semibold text-green-600 mt-6 mb-2">FASE FETCH</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Cargar la siguiente instrucción <span className="text-blue-500">{'<-'}</span></li>
            <li>Incrementar el secuenciador</li>
            <li>Interpretar la instrucción</li>
          </ul>

          {/* FASE EXECUTE */}
          <h3 className="text-2xl font-semibold text-green-600 mt-6 mb-2">FASE EXECUTE</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Cargar los operandos <span className="text-blue-500">{'<-'}</span></li>
            <li>Ejecutar la operación</li>
            <li>Guardar el resultado</li>
            <li>Verificar si hay solicitudes de interrupción</li>
          </ul>
        </div>
      </section>

      {/* 2.3 Elementos para construir el CPU */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">2.3 Elementos para construir el CPU</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            El CPU se construye con electrónica digital y elementos que permiten ejecutar el ciclo de instrucción: memoria, registros, buses, ALU, decodificador y sumadores.
          </p>

          {/* Imagen general CPU */}
          <div className="mt-6">
            <img src={ cpuStructure } alt="Estructura del CPU" className="mx-auto rounded-lg shadow-md" />
          </div>

          <p className="text-gray-700 dark:text-gray-300 mt-4">
            Para cargar la siguiente instrucción se necesita conocer la dirección de memoria: <strong>Registro PC (Program Counter)</strong> y la interconexión mediante buses.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Los operandos pueden estar en la instrucción misma, en memoria o en registros internos del CPU. La ALU realiza las operaciones aritméticas y lógicas y el resultado se almacena en registros o memoria, actualizando flags del PSW.
          </p>
        </div>
      </section>

      {/* 2.4 Estructura básica del CPU */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">2.4 Estructura básica del CPU</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            El CPU puede dividirse en dos vistas principales: <strong>Datapath</strong> y <strong>Control</strong>.
          </p>
          <div className="mt-6">
            <img src={ datapathControl } alt="Datapath y Control del CPU" className="mx-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* 2.5 Arquitecturas del Procesador */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">2.5 Arquitecturas del Procesador</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Existen distintas arquitecturas según cómo tratan los operandos:
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Acumulador:</strong> un solo registro interno (Acumulador).</li>
            <li><strong>Pila:</strong> Operaciones sobre memoria en forma de pila. Registro SP para control.</li>
            <li><strong>Registros:</strong> Varios registros internos. Se usan arquitecturas de 2 o 3 direcciones.</li>
          </ul>

          {/* Arquitectura de Acumulador */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">Arquitectura de Acumulador</h3>
            <img src={ accumulatorArch } alt="Arquitectura de Acumulador" className="mx-auto rounded-lg shadow-md" />
          </div>

          {/* Arquitectura de Pila */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">Arquitectura de Pila</h3>
            <img src={ stackArch } alt="Arquitectura de Pila" className="mx-auto rounded-lg shadow-md" />
          </div>

          {/* Arquitectura de Registros */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">Arquitectura de Registros</h3>
            <img src={ registerArch } alt="Arquitectura de Registros" className="mx-auto rounded-lg shadow-md" />
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Puede ser de 2 direcciones (uno de los operandos es fuente y destino) o de 3 direcciones (dos operandos fuente y un destino).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unidad2;
