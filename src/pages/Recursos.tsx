// Recursos.tsx
import React, { useState } from 'react';

const recursos = [
  { nombre: 'Unidad 1: Arquitectura y Organización', archivo: '..assets/recursos/Unidad1.pptx' },
  { nombre: 'Unidad 2: Organización del CPU', archivo: '..assets/recursos/Unidad2.pptx' },
  { nombre: 'Unidad 3', archivo: '..assets/recursos/Unidad3.pptx' },
  { nombre: 'Unidad 4', archivo: '..assets/recursos/Unidad4.pptx' },
  { nombre: 'Unidad 5', archivo: '..assets/recursos/Unidad5.pptx' },
  { nombre: 'Unidad 6', archivo: '..assets/recursos/Unidad6.pptx' },
  { nombre: 'Unidad 7', archivo: '..assets/recursos/Unidad7.pptx' },
];

const Recursos: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-800 to-green-600 dark:from-blue-900 dark:to-green-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Recursos Descargables</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Previsualiza y descarga los archivos PPTX de cada unidad. Más recursos se agregarán pronto.
          </p>
        </div>
      </section>

      {/* Lista de Recursos */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {recursos.map((recurso, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-800 dark:text-gray-200 font-medium">{recurso.nombre}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelected(selected === recurso.archivo ? null : recurso.archivo)}
                    className="bg-green-600 text-white px-3 py-1 rounded-lg shadow hover:bg-green-700 transition"
                  >
                    {selected === recurso.archivo ? 'Ocultar Vista Previa' : 'Ver Vista Previa'}
                  </button>
                  <a
                    href={recurso.archivo}
                    download
                    className="bg-blue-600 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    Descargar
                  </a>
                </div>
              </div>

              {/* Vista Previa con Microsoft Office Online Viewer */}
              {selected === recurso.archivo && (
                <div className="mt-2 w-full aspect-[16/9]">
                  <iframe
                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(window.location.origin + recurso.archivo)}`}
                    title={`Vista previa ${recurso.nombre}`}
                    className="w-full h-full rounded-lg shadow-md"
                    frameBorder="0"
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Recursos;
