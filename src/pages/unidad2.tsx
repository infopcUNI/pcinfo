// unidad2.tsx (Updated with enhanced content from Unidad2.pdf)
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
      <section className="bg-gradient-to-r from-blue-800 to-green-600 dark:from-blue-900 dark:to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unidad 2: Organización del CPU</h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            Esta unidad explora el procesador como el corazón de la computación, su ciclo de instrucción, los elementos constructivos y las arquitecturas que optimizan el rendimiento y la eficiencia energética.
          </p>
        </div>
      </section>

      {/* 2.1 El Procesador */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">2.1 El Procesador</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            El procesador, o CPU, se encarga de <strong>ejecutar instrucciones</strong> siguiendo un procedimiento bien establecido. Por ejemplo, la instrucción <code>ADD AX, [10]</code> suma el valor en la dirección de memoria [10] al registro AX.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Está construido con electrónica digital, utilizando componentes como sumadores, multiplexores, demultiplexores, codificadores, decodificadores y registros.
          </p>
        </div>
      </section>

      {/* 2.2 Ciclo de Instrucción */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">2.2 El Ciclo de Instrucción</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            El ciclo de instrucción se divide en dos fases principales: <strong>FETCH</strong> y <strong>EXECUTE</strong>, cada una con etapas específicas que optimizan el uso de recursos.
          </p>

          {/* FASE FETCH */}
          <h3 className="text-2xl font-semibold text-green-600 mt-6 mb-4">FASE FETCH</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Cargar la siguiente instrucción:</strong> Se obtiene desde la memoria usando el registro PC (Program Counter) que indica la dirección.</li>
            <li><strong>Incrementar el secuenciador:</strong> El PC se incrementa en 1 con un sumador para apuntar a la siguiente instrucción.</li>
            <li><strong>Interpretar la instrucción:</strong> Se almacena en el registro IR (Instruction Register) y se decodifica con una unidad de control.</li>
          </ul>

          {/* FASE EXECUTE */}
          <h3 className="text-2xl font-semibold text-green-600 mt-6 mb-4">FASE EXECUTE</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Cargar los operandos:</strong> Pueden estar en la instrucción (e.g., inmediato), memoria o registros internos (R0...Rn).</li>
            <li><strong>Ejecutar la operación:</strong> Realizada por la ALU (Arithmetic Logic Unit) con entradas X e Y, y salida Z.</li>
            <li><strong>Guardar el resultado:</strong> Se almacena en un registro o memoria, actualizando flags (Z, N, C, V) en el PSW.</li>
            <li><strong>Verificar interrupciones:</strong> El CPU chequea señales INT y, si es necesario, ejecuta una rutina de servicio salvando el estado.</li>
          </ul>
        </div>
      </section>

      {/* 2.3 Elementos para estructurar el procesador */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">2.3 Elementos para estructurar el procesador</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            El CPU requiere elementos interconectados para el ciclo de instrucción, como el PC, IR, ALU, registros, y buses de datos y direcciones.
          </p>

          {/* Imagen general CPU */}
          <div className="mt-6">
            <img src={cpuStructure} alt="Estructura del CPU" className="mx-auto rounded-lg shadow-md" />
          </div>

          <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
            La interacción con la memoria usa MAR (Memory Address Register) y MDR (Memory Data Register), mientras que el PC se incrementa con un sumador. La unidad de control decodifica instrucciones para dirigir las operaciones.
          </p>
        </div>
      </section>

      {/* 2.4 Estructura básica del procesador */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">2.4 Estructura básica del procesador</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            El CPU se divide en dos secciones: <strong>Datapath</strong> (maneja datos y operaciones) y <strong>Control</strong> (coordina las actividades).
          </p>
          <div className="mt-6">
            <img src={datapathControl} alt="Datapath y Control del CPU" className="mx-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* 2.5 Arquitecturas del procesador */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">2.5 Arquitecturas del procesador</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Las arquitecturas varían según cómo manejan los operandos, impactando la eficiencia y sostenibilidad del diseño.
          </p>

          {/* Arquitectura de Acumulador */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Arquitectura de Acumulador</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Usa un solo registro (Acumulador). Ejemplos de instrucciones:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li><code>LOAD X</code>: Acc ← M(X)</li>
              <li><code>ADD n</code>: Acc ← Acc + n</li>
            </ul>
            <img src={accumulatorArch} alt="Arquitectura de Acumulador" className="mx-auto rounded-lg shadow-md mt-4" />
          </div>

          {/* Arquitectura de Pila */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Arquitectura de Pila</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Usa una pila en memoria con registro SP (Stack Pointer). Ejemplos de instrucciones:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li><code>PUSH X</code>: TOS ← M(X)</li>
              <li><code>ADD</code>: TOS' ← NOS + TOS</li>
            </ul>
            <img src={stackArch} alt="Arquitectura de Pila" className="mx-auto rounded-lg shadow-md mt-4" />
          </div>

          {/* Arquitectura de Registros */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Arquitectura de Registros</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Usa múltiples registros (R0...Rm-1). Ejemplos:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li><code>ADD Rd, Rf1, Rf2</code>: Rd ← Rf1 + Rf2 (3 direcciones)</li>
              <li><code>ADD Rf, Rd</code>: Rd ← Rf + Rd (2 direcciones)</li>
            </ul>
            <img src={registerArch} alt="Arquitectura de Registros" className="mx-auto rounded-lg shadow-md mt-4" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unidad2;