// pages/unidad4.tsx
import React from 'react';

const Unidad4: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      {/* Header de la Unidad */}
      <section className="bg-gradient-to-r from-blue-800 to-green-600 dark:from-blue-900 dark:to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unidad 4: Unidad de Ejecución
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            La Unidad de Ejecución es el órgano de cálculo del procesador. Aquí estudiaremos cómo se representan los datos en el CPU, los diferentes formatos numéricos y el funcionamiento interno de la ALU y los registros GPR.
          </p>
        </div>
      </section>

      {/* 4.1 La función de procesamiento */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            4.1 La función de procesamiento
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>La función de procesamiento la realiza la <strong>Unidad de Ejecución</strong>.</li>
            <li>Corresponde al órgano de cálculo de la Arquitectura ASPA de Von Neumann.</li>
            <li>Integrada por:
              <ul className="list-circle list-inside ml-8 mt-2 space-y-2">
                <li>La ALU y sus registros asociados</li>
                <li>Los Registros de Propósito General (GPR)</li>
                <li>Toda circuitería de cálculo adicional (por ejemplo, la FPU)</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* 4.2 Representación de Datos */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            4.2 Representación de Datos
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>El procesador solo procesa <strong>patrones de bits</strong>.</li>
            <li><strong>Palabra</strong>: cantidad de bits que se procesan en un ciclo en el CPU (ej. 8, 16, 32, 64 bits).</li>
            <li>Todos los datos que se deban procesar deben estar representados como una serie de bits.</li>
            <li className="font-semibold text-green-600 text-xl mt-6">¿Tipos de datos?</li>
            <li className="ml-8">Números enteros, números reales, caracteres, booleanos, fechas, estructuras, etc.</li>
          </ul>
        </div>
      </section>

      {/* 4.3 Números Enteros */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            4.3 Números Enteros
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Empleamos un sistema numérico <strong>posicional</strong>.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Sistema Decimal</h3>
              <p className="text-2xl font-mono">357 = 3×10² + 5×10¹ + 7×10⁰</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Sistema Binario</h3>
              <p className="text-2xl font-mono">101101 = 1×2⁵ + 0×2⁴ + 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 45₁₀</p>
            </div>
          </div>
          <div className="mt-8 bg-gray-800 text-green-300 p-6 rounded-lg font-mono text-center text-xl">
            Valor(A) = Σ (aᵢ · rⁱ)  &nbsp;&nbsp; para i = 0 hasta n-1
          </div>
        </div>
      </section>

      {/* 4.4 Enteros con Signo */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            4.4 Enteros con Signo
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            La computadora no "entiende" el signo. Necesitamos una convención para representarlo:
          </p>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">1. Signo-Magnitud</h3>
              <p>Bit más significativo = signo (0 = +, 1 = −)</p>
              <p className="mt-2">Rango (n bits): −(2ⁿ⁻¹−1) a +(2ⁿ⁻¹−1)</p>
              <p className="text-red-600 font-medium">Problema: dos representaciones de cero (+0 y -0)</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">2. Complemento a 1 (C1)</h3>
              <p>Negativo = invertir todos los bits del positivo</p>
              <p>Ej: +5 = 0101 → -5 = 1010</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">3. Complemento a 2 (C2) ← El más usado</h3>
              <p>Negativo = Complemento a 1 + 1</p>
              <p>Rango (n bits): −2ⁿ⁻¹ a +(2ⁿ⁻¹−1)</p>
              <p className="text-green-600 font-bold">Ventaja: solo un cero y suma directa (sin circuitería especial para signo)</p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">4. Exceso a M (Bias)</h3>
              <p>A' = A + M &nbsp;&nbsp; (M suele ser 2ⁿ⁻¹)</p>
              <p>Ventaja en comparaciones de punto flotante (exponente)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 Otros sistemas */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            4.5 Otros sistemas de representación
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-3">BCD (Binary Coded Decimal)</h3>
              <p>Cada dígito decimal → 4 bits</p>
              <p>Ej: 459 → 0100 0101 1001</p>
              <p>Útil en calculadoras y sistemas financieros</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Código Gray</h3>
              <p>Números consecutivos difieren en solo 1 bit</p>
              <p>Ideal para sensores rotativos (evita errores transitorios)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.6 Punto Flotante */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            4.6 Números en Punto Flotante
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Representación en notación científica: <strong>mantisa × base<sup>exponente</sup></strong>
          </p>
          <div className="bg-blue-900 text-white p-8 rounded-lg text-center">
            <p className="text-2xl font-bold">Estándar IEEE 754</p>
            <p className="text-xl mt-4">Simple (32 bits): 1 bit signo | 8 bits exponente (bias 127) | 23 bits mantisa</p>
            <p className="text-xl mt-4">Doble (64 bits): 1 bit signo | 11 bits exponente (bias 1023) | 52 bits mantisa</p>
          </div>
        </div>
      </section>

      {/* 4.7 ALU y GPR */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-8">
            4.8 y 4.9 ALU + Registros GPR
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Unidad Aritmética Lógica (ALU)</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                <li>Realiza operaciones aritméticas y lógicas</li>
                <li>La suma es la operación fundamental → el resto se deriva</li>
                <li>Implementa sumadores en cascada o Carry Look-Ahead (más rápido)</li>
                <li>Multiplicación: Braun, Booth, Wallace Tree</li>
                <li>División: Restauración, No restauración, SRT</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Registros de Propósito General (GPR)</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                <li>Almacenan operandos dentro del CPU</li>
                <li>Muchos incluyen desplazadores (shifters)</li>
                <li>Tipos de desplazamiento:
                  <ul className="list-circle ml-8 mt-2">
                    <li>Lógico (rellena con 0)</li>
                    <li>Aritmético (preserva signo)</li>
                    <li>Rotación (cíclico)</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unidad4;