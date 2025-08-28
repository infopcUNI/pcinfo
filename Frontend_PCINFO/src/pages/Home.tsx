import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import imageRelleno from '../assets/imagePC/alta1.png';

// Simular datos de categorías con info de relleno
const categories = [
  {
    title: 'Laptops',
    items: [
      { name: 'Laptop Básica', ram: '8GB', rom: '256GB SSD', ddr: 'DDR4', img: imageRelleno },
      { name: 'Laptop Gaming', ram: '16GB', rom: '512GB SSD', ddr: 'DDR5', img: imageRelleno },
      { name: 'Laptop Profesional', ram: '32GB', rom: '1TB SSD', ddr: 'DDR4', img: imageRelleno },
    ],
  },
  {
    title: 'PC de Escritorio',
    items: [
      { name: 'PC Oficina', ram: '8GB', rom: '500GB HDD', ddr: 'DDR4', img: imageRelleno },
      { name: 'PC Gaming', ram: '16GB', rom: '1TB SSD', ddr: 'DDR5', img: imageRelleno },
      { name: 'PC Workstation', ram: '64GB', rom: '2TB SSD', ddr: 'DDR4', img: imageRelleno },
    ],
  },
  {
    title: 'Procesadores',
    items: [
      { name: 'Intel i5', ram: 'N/A', rom: 'N/A', ddr: 'DDR4', img: imageRelleno },
      { name: 'AMD Ryzen 7', ram: 'N/A', rom: 'N/A', ddr: 'DDR5', img: imageRelleno },
      { name: 'Intel i9', ram: 'N/A', rom: 'N/A', ddr: 'DDR5', img: imageRelleno },
    ],
  },
  {
    title: 'Tarjetas Gráficas',
    items: [
      { name: 'NVIDIA GTX 1650', ram: '4GB GDDR5', rom: 'N/A', ddr: 'N/A', img: imageRelleno },
      { name: 'AMD RX 6700', ram: '12GB GDDR6', rom: 'N/A', ddr: 'N/A', img: imageRelleno },
      { name: 'NVIDIA RTX 3080', ram: '10GB GDDR6X', rom: 'N/A', ddr: 'N/A', img: imageRelleno },
    ],
  },
  {
    title: 'Almacenamiento',
    items: [
      { name: 'SSD 256GB', ram: 'N/A', rom: '256GB', ddr: 'N/A', img: imageRelleno },
      { name: 'HDD 1TB', ram: 'N/A', rom: '1TB', ddr: 'N/A', img: imageRelleno },
      { name: 'NVMe 512GB', ram: 'N/A', rom: '512GB', ddr: 'N/A', img: imageRelleno },
    ],
  },
];

// Datos de relleno para comentarios
const reviews = [
  { user: 'Juan Pérez', rating: 5, comment: 'Excelente sitio para aprender sobre PCs.' },
  { user: 'Ana López', rating: 4, comment: 'Muy informativo, pero podría tener más imágenes.' },
  { user: 'Carlos Gómez', rating: 5, comment: 'Me ayudó a elegir mi nueva laptop.' },
];

// Datos de equipo de desarrollo (relleno)
const team = [
  { name: 'Desarrollador Principal', role: 'Frontend & Backend' },
  { name: 'Diseñador', role: 'UI/UX' },
  { name: 'Contribuidor', role: 'Contenido' },
];

const Home: React.FC = () => {
  const [fondoActual, setFondoActual] = useState(0);
  const carouselRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fondos = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    "https://concepto.de/wp-content/uploads/2020/06/Computadora-de-escritorio-scaled-e1724955496406.jpg",
    "https://images.unsplash.com/photo-1636914011676-039d36b73765?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
  ];

  useEffect(() => {
    // Fondo cambiante
    const fondoInterval = setInterval(() => {
      setFondoActual((prev) => (prev + 1) % fondos.length);
    }, 5000);

    // Observador para pausar animaciones al entrar en viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-thryme-carousel');
          } else {
            entry.target.classList.remove('animate-thryme-carousel');
          }
        });
      },
      { threshold: 0.2 }
    );

    carouselRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      clearInterval(fondoInterval);
      carouselRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="min-h-screen text-white relative">
      {/* Fondo cambiante */}
      <div
        className="fixed inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${fondos[fondoActual]})`, opacity: 0.25 }}
      ></div>

      {/* Sección 1 */}
      <section className="pt-24 pb-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Bienvenido a PC Info</h1>
          <p className="text-lg mb-8">Una plataforma informativa sobre computadoras, componentes y más. Aprende, compara y elige lo mejor para ti.</p>
          <img src={ imageRelleno } alt="Imagen de una PC" className="mx-auto max-w-md rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Sección 2: Categorías con Carruseles al estilo Thryme */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Categorías de Productos</h2>
          {categories.map((category, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
              <div
                className="relative overflow-hidden"
                onMouseEnter={(e) => e.currentTarget.querySelector('.carousel-container')?.classList.remove('animate-thryme-carousel')}
                onMouseLeave={(e) => e.currentTarget.querySelector('.carousel-container')?.classList.add('animate-thryme-carousel')}
              >
                <div
                  ref={(el) => (carouselRefs.current[index] = el)}
                  className="carousel-container flex space-x-4"
                >
                  {category.items.concat(category.items).map((item, i) => (
                    <div
                      key={i}
                      className="min-w-[300px] bg-gray-800 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <img src={item.img} alt={item.name} className="w-full h-40 object-cover mb-2 rounded" />
                      <h4 className="font-bold">{item.name}</h4>
                      <p>RAM: {item.ram}</p>
                      <p>ROM: {item.rom}</p>
                      <p>DDR: {item.ddr}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección 3: Datos Curiosos */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Datos Curiosos</h2>
          <p className="text-lg mb-8">Descubre hechos interesantes sobre la historia y tecnología de las computadoras. Por ejemplo, ¿sabías que la primera computadora pesaba más de 30 toneladas?</p>
          <Link to="/curiosidades" className="bg-cyan-500 text-black px-6 py-3 rounded hover:bg-cyan-400 transition">Ver Más</Link>
        </div>
      </section>

      {/* Sección 4: Recomendaciones */}
      <section className="py-12 bg-gray-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Recomendaciones</h2>
          <p className="text-lg mb-8">Obtén sugerencias personalizadas basadas en tu presupuesto y necesidades.</p>
          <Link to="/recomendaciones" className="bg-cyan-500 text-black px-6 py-3 rounded hover:bg-cyan-400 transition">Obtener Recomendación</Link>
        </div>
      </section>

      {/* Sección 5: Comentarios */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Comentarios de Usuarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-500'}>★</span>
                  ))}
                </div>
                <p className="mb-2">{review.comment}</p>
                <p className="text-sm text-gray-400">- {review.user}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 6: Equipo de Desarrollo */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Equipo de Desarrollo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;