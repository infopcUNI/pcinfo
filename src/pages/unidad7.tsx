// pages/unidad7.tsx
import React from 'react';

const Unidad7: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      {/* Header de la Unidad */}
      <section className="bg-gradient-to-r from-blue-800 to-green-600 dark:from-blue-900 dark:to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unidad 7: Sistema de Entrada / Salida
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto">
            Explora el sistema de entrada/salida, su estructura, interconexión con periféricos y líneas de comunicación, enfatizando la integración eficiente en arquitecturas computacionales sostenibles.
          </p>
        </div>
      </section>

      {/* 7.1 Sistema de Entrada / Salida */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            7.1 Sistema de Entrada / Salida
          </h2>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Estructura de la Computadora</h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <li><strong>Computadora:</strong> Incluye Memoria, E/S y Estructura de Interconexión.</li>
              <li><strong>Periféricos:</strong> Conectados a través de Líneas de Comunicación.</li>
              <li><strong>Procesador:</strong> CPU central que interactúa con el Sistema de Memoria y el Sistema de Entrada/Salida.</li>
            </ul>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <p className="text-xl font-mono text-center">
                Computadora → [CPU | Sistema de Memoria | Sistema de Entrada/Salida] → Estructura de Interconexión
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7.2 Función del Sistema de E/S */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            7.2 Función del Sistema de E/S
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li>Intercambio de datos entre el procesador y el mundo exterior a través de periféricos.</li>
            <li>Gestión de dispositivos de entrada (teclado, mouse) y salida (pantalla, impresora).</li>
            <li>Optimización para eficiencia energética en transferencias de datos.</li>
          </ul>
        </div>
      </section>

      {/* 7.3 Estructura de Interconexión */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            7.3 Estructura de Interconexión
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            La estructura de interconexión facilita la comunicación entre componentes.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Buses</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Bus de Datos</li>
                <li>Bus de Direcciones</li>
                <li>Bus de Control</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Tipos de Interconexión</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Punto a Punto</li>
                <li>Multipunto</li>
                <li>Jerárquica</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7.4 Periféricos y Líneas de Comunicación */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            7.4 Periféricos y Líneas de Comunicación
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <li><strong>Periféricos:</strong> Dispositivos externos conectados a la computadora.</li>
            <li><strong>Líneas de Comunicación:</strong> Cables o interfaces inalámbricas para transferir datos.</li>
            <li>Ejemplos: USB, HDMI, Wi-Fi para conexiones sostenibles y eficientes.</li>
          </ul>
        </div>
      </section>

      {/* 7.5 Modos de Transferencia de Datos */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-6">
            7.5 Modos de Transferencia de Datos
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-left">Modo</th>
                  <th className="px-4 py-2 border-b text-left">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Programado</td>
                  <td className="px-4 py-2 border-b">CPU controla directamente la transferencia.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Interrupciones</td>
                  <td className="px-4 py-2 border-b">Dispositivos notifican a la CPU cuando están listos.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">DMA</td>
                  <td className="px-4 py-2 border-b">Acceso Directo a Memoria para transferencias sin CPU.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unidad7;