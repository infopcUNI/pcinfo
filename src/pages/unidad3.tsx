// unidad3.tsx (Created based on Unidad3.pdf content)
import React from 'react';
// Placeholder images - replace with actual assets if available
import instructionTypes from '../assets/instructionTypes.png';
import instructionFormat from '../assets/instructionFormat.png';
import fixedBlockCode from '../assets/fixedBlockCode.png';
import extendedBlockCode from '../assets/extendedBlockCode.png';
import huffmanTree from '../assets/huffmanTree.png';

const Unidad3: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      {/* Header de la Unidad */}
      <section className="bg-gradient-to-r from-blue-800 to-green-600 dark:from-blue-900 dark:to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unidad 3: Diseño del Conjunto de Instrucciones</h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            Esta unidad explora el diseño del conjunto de instrucciones, sus características, tipos, formatos y técnicas de codificación, enfatizando la eficiencia y sostenibilidad en el uso de recursos computacionales.
          </p>
        </div>
      </section>

      {/* 3.1 Conjunto de Instrucciones */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">3.1 Conjunto de Instrucciones</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            El conjunto de instrucciones es el repertorio de todas las instrucciones de un procesador específico, denotado como <strong>I</strong>. Es el principal atributo de una arquitectura y habilita al programador para interactuar con el procesador.
          </p>
        </div>
      </section>

      {/* 3.2 Características del Conjunto de Instrucciones */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">3.2 Características del Conjunto de Instrucciones</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-left">Característica</th>
                  <th className="px-4 py-2 border-b text-left">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Completitud</td>
                  <td className="px-4 py-2 border-b">Permite ejecutar todas las operaciones que el procesador puede realizar.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Ortogonalidad</td>
                  <td className="px-4 py-2 border-b">Permite que todas las operaciones se realicen con todos los tipos de datos aplicables.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Eficiencia</td>
                  <td className="px-4 py-2">Permite ejecutar operaciones sin redundancias; evita instrucciones duplicadas para la misma operación.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3.3 Instrucción */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">3.3 Instrucción</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Una instrucción es un tipo especial de "dato" almacenado en memoria como una tira de bits. Ordena al procesador realizar una operación y proporciona la información requerida: la operación y los operandos.
          </p>
        </div>
      </section>

      {/* 3.4 Tipos de Instrucciones */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">3.4 Tipos de Instrucciones</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-left">Tipo</th>
                  <th className="px-4 py-2 border-b text-left">Categoría</th>
                  <th className="px-4 py-2 border-b text-left">Uso</th>
                  <th className="px-4 py-2 border-b text-left">Ejemplos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b" rowSpan={5}>Propósito General</td>
                  <td className="px-4 py-2 border-b">Transferencia</td>
                  <td className="px-4 py-2 border-b">Mover datos entre operandos</td>
                  <td className="px-4 py-2 border-b">MOVE, LOAD, STORE</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Aritméticas</td>
                  <td className="px-4 py-2 border-b">Operaciones aritméticas</td>
                  <td className="px-4 py-2 border-b">ADD, SUB, DIV, MUL, INC, DEC</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Lógicas y manejo de bits</td>
                  <td className="px-4 py-2 border-b">Operaciones lógicas y de corrimiento de bits</td>
                  <td className="px-4 py-2 border-b">AND, OR, NOT, RSH, LROT</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">De Comparación</td>
                  <td className="px-4 py-2 border-b">Comparar valores de operandos para saltos</td>
                  <td className="px-4 py-2 border-b">CMP</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Control de flujo de Programa</td>
                  <td className="px-4 py-2 border-b">Modificar secuencia para selección, ciclos, subrutinas</td>
                  <td className="px-4 py-2 border-b">JP, JR, BRN, CALL, RET</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b" rowSpan={4}>Propósito Específico</td>
                  <td className="px-4 py-2 border-b">Entrada / Salida</td>
                  <td className="px-4 py-2 border-b">Acceso a espacio de E/S</td>
                  <td className="px-4 py-2 border-b">IN, OUT</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Tratamiento de Cadenas (Strings)</td>
                  <td className="px-4 py-2 border-b">Manipulación de cadenas</td>
                  <td className="px-4 py-2 border-b">COMSTR, CATSTR</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Polinomios y funciones científicas, Vectores y Matrices</td>
                  <td className="px-4 py-2 border-b">Aplicaciones científicas, aceleración en hardware</td>
                  <td className="px-4 py-2 border-b">EVALUATEPOL, VADD</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Privilegiadas</td>
                  <td className="px-4 py-2 border-b">Interrupciones y Excepciones</td>
                  <td className="px-4 py-2 border-b">INT, TRAP</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Propósito Específico</td>
                  <td className="px-4 py-2">De control del Sistema</td>
                  <td className="px-4 py-2">Protección de Memoria, detención, etc.</td>
                  <td className="px-4 py-2">HALT, NOP</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6">
            <img src={instructionTypes} alt="Tipos de Instrucciones" className="mx-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* 3.5 Formato de Instrucción */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">3.5 Formato de Instrucción</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            El formato es la estructura interna de la cadena de bits, organizada en bloques: Identificación (Código de Operación) y Direccionamiento (campos de operandos). Puede ser fijo o variable, donde L(F) es el tamaño en bits.
          </p>
          <div className="mt-6">
            <img src={instructionFormat} alt="Formato de Instrucción" className="mx-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* 3.6 Codificación de la Operación */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">3.6 Codificación de la Operación</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            La codificación identifica la operación. Técnicas incluyen:
          </p>

          {/* Código de Bloque Fijo */}
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Código de Bloque Fijo</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Asigna números consecutivos. L(CO) = ⌈log₂(i)⌉, donde i = n(I). Simple pero puede desperdiciar bits.
          </p>
          <div className="mt-4">
            <img src={fixedBlockCode} alt="Código de Bloque Fijo" className="mx-auto rounded-lg shadow-md" />
          </div>

          {/* Código de Bloque Extendido */}
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Código de Bloque Extendido</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Extiende el CO sobre bits no usados en instrucciones con menos operandos. Define grupos y formatos variables internamente.
          </p>
          <div className="mt-4">
            <img src={extendedBlockCode} alt="Código de Bloque Extendido" className="mx-auto rounded-lg shadow-md" />
          </div>

          {/* Técnica de Huffman */}
          <h3 className="text-2xl font-semibold text-green-600 mb-4">Técnica de Huffman</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Código variable basado en frecuencias. Asigna códigos cortos a operaciones frecuentes. Óptimo para minimizar bits promedio (LA = ∑ f_i * l_i, LO = -∑ f_i log₂(f_i), R = (LA - LO)/LA).
          </p>
          <div className="mt-4">
            <img src={huffmanTree} alt="Árbol de Huffman" className="mx-auto rounded-lg shadow-md" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unidad3;