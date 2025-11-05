// Home.tsx (Actualizado con introducción expandida y modo oscuro)
import React from 'react';

const Home: React.FC = () => {
  const teamMembers = [
    { name: 'José Castillo', role: 'Líder de Desarrollo' },
    { name: 'Jorge Padilla', role: 'Diseñador UI/UX' },
    { name: 'Engel Calderón', role: 'Especialista en Contenidos' },
    { name: 'Nihat Reyes', role: 'Integrador de Recursos' },
  ];

  const comments = [
    { author: 'Estudiante A', text: 'Excelente recurso para explorar temas de computación de manera sostenible.' },
    { author: 'Profesor B', text: 'El enfoque ecológico integra perfectamente la sostenibilidad en la ingeniería.' },
    { author: 'Visitante C', text: 'Fácil de navegar y con materiales descargables. ¡Muy informativo!' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-800 to-green-600 dark:from-blue-900 dark:to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Ingeniería Computacional Sostenible</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Descubre un mundo de conocimiento en computación donde la innovación se une a la responsabilidad ambiental. Explora conceptos fundamentales y avanzados en un enfoque ecológico, diseñado para inspirar a estudiantes y profesionales hacia un futuro digital verde.
          </p>
          <a
            href="#recursos"
            className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Explora Recursos
          </a>
        </div>
      </section>

      {/* Expanded Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-8 text-center">Introducción a la Computación Sostenible</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                En esta plataforma informativa, nos sumergimos en los principios esenciales de la ingeniería computacional, desde los fundamentos de hardware y software hasta aplicaciones avanzadas que impulsan la sociedad digital. Nuestro compromiso con la sostenibilidad nos guía a explorar cómo la tecnología puede minimizar su huella ambiental, promoviendo eficiencia energética, reciclaje de componentes y algoritmos eco-eficientes.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Ideal para estudiantes de ingeniería en computación, esta web ofrece una visión integral de siete unidades temáticas clave, cada una enriquecida con perspectivas ecológicas. Aprende no solo el "cómo" de la computación, sino el "por qué" en un contexto de preservación planetaria.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Imagina diseñar sistemas que no solo resuelvan problemas complejos, sino que también contribuyan a un equilibrio ecológico. Desde el procesamiento de datos con bajo consumo hasta el desarrollo de software que optimiza recursos naturales, esta guía te equipa con herramientas prácticas y teóricas para ser un ingeniero computacional responsable.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Únete a una comunidad que valora la innovación ética. Ya seas principiante o experto, aquí encontrarás inspiración para integrar la sostenibilidad en cada línea de código y cada circuito diseñado.
              </p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#unidades"
              className="bg-blue-800 hover:bg-blue-900 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Comenzar el Viaje
            </a>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-8 text-center">Nuestra Misión y Visión</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Misión</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ofrecer recursos accesibles y descargables sobre ingeniería computacional, fomentando un aprendizaje que integre principios de sostenibilidad ambiental para formar profesionales que impulsen tecnologías responsables y amigables con el planeta.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Visión</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Convertirnos en la referencia principal para la comunidad de ingeniería en computación, inspirando innovaciones ecológicas y colaboraciones globales hacia un ecosistema digital sostenible y equitativo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-8 text-center">Voces de la Comunidad</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {comments.map((comment, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{comment.text}"</p>
                <p className="font-semibold text-green-600">- {comment.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-8 text-center">Equipo Detrás del Proyecto</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Teaser */}
      <section id="recursos" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-4">Recursos para Tu Aprendizaje</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Accede a materiales descargables enriquecidos con perspectivas ecológicas. Descubre herramientas prácticas para cada unidad temática.
          </p>
          <a
            href="#unidad-1"
            className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Descargar y Explorar
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;