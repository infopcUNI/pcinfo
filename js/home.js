// Fondos dinámicos
const fondos = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
  "https://concepto.de/wp-content/uploads/2020/06/Computadora-de-escritorio-scaled-e1724955496406.jpg",
  "https://images.unsplash.com/photo-1636914011676-039d36b73765?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"
];
let fondoActual = 0;
const bg = document.getElementById("background");
bg.style.backgroundImage = `url(${fondos[fondoActual]})`;

setInterval(() => {
  fondoActual = (fondoActual + 1) % fondos.length;
  bg.style.backgroundImage = `url(${fondos[fondoActual]})`;
}, 5000);

// Categorías (relleno)
const categories = [
  {
    title: "Laptops",
    items: [
      { name: "Laptop Básica", ram: "8GB", rom: "256GB SSD", ddr: "DDR4", img: "image/alta1.png" },
      { name: "Laptop Gaming", ram: "16GB", rom: "512GB SSD", ddr: "DDR5", img: "image/alta1.png" },
      { name: "Laptop Profesional", ram: "32GB", rom: "1TB SSD", ddr: "DDR4", img: "image/alta1.png" }
    ]
  },
  {
    title: "PC de Escritorio",
    items: [
      { name: "PC Oficina", ram: "8GB", rom: "500GB HDD", ddr: "DDR4", img: "image/alta1.png" },
      { name: "PC Gaming", ram: "16GB", rom: "1TB SSD", ddr: "DDR5", img: "image/alta1.png" },
      { name: "PC Workstation", ram: "64GB", rom: "2TB SSD", ddr: "DDR4", img: "image/alta1.png" }
    ]
  },
  {
    title: "Procesadores",
    items: [
      { name: "Intel i5", ram: "N/A", rom: "N/A", ddr: "DDR4", img: "image/alta1.png" },
      { name: "AMD Ryzen 7", ram: "N/A", rom: "N/A", ddr: "DDR5", img: "image/alta1.png" },
      { name: "Intel i9", ram: "N/A", rom: "N/A", ddr: "DDR5", img: "image/alta1.png" }
    ]
  },
  {
    title: "Tarjetas Gráficas",
    items: [
      { name: "NVIDIA GTX 1650", ram: "4GB GDDR5", rom: "N/A", ddr: "N/A", img: "image/alta1.png" },
      { name: "AMD RX 6700", ram: "12GB GDDR6", rom: "N/A", ddr: "N/A", img: "image/alta1.png" },
      { name: "NVIDIA RTX 3080", ram: "10GB GDDR6X", rom: "N/A", ddr: "N/A", img: "image/alta1.png" }
    ]
  },
  {
    title: "Almacenamiento",
    items: [
      { name: "SSD 256GB", ram: "N/A", rom: "256GB", ddr: "N/A", img: "image/alta1.png" },
      { name: "HDD 1TB", ram: "N/A", rom: "1TB", ddr: "N/A", img: "image/alta1.png" },
      { name: "NVMe 512GB", ram: "N/A", rom: "512GB", ddr: "N/A", img: "image/alta1.png" }
    ]
  }
];

// Reseñas
const reviews = [
  { user: "Juan Pérez", rating: 5, comment: "Excelente sitio para aprender sobre PCs." },
  { user: "Ana López", rating: 4, comment: "Muy informativo, pero podría tener más imágenes." },
  { user: "Carlos Gómez", rating: 5, comment: "Me ayudó a elegir mi nueva laptop." }
];

// Equipo
const team = [
  { name: "Desarrollador Principal", role: "Frontend & Backend" },
  { name: "Diseñador", role: "UI/UX" },
  { name: "Contribuidor", role: "Contenido" }
];

// Render Categorías
const catContainer = document.getElementById("categories");
categories.forEach(cat => {
  const div = document.createElement("div");
  div.className = "category";
  div.innerHTML = `<h3>${cat.title}</h3>
    <div class="carousel">
      ${cat.items.map(i => `
        <div class="carousel-item">
          <img src="${i.img}" alt="${i.name}">
          <h4>${i.name}</h4>
          <p>RAM: ${i.ram}</p>
          <p>ROM: ${i.rom}</p>
          <p>DDR: ${i.ddr}</p>
        </div>
      `).join('')}
    </div>`;
  catContainer.appendChild(div);
});

// Render Reviews
const reviewContainer = document.getElementById("reviews");
reviews.forEach(r => {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
    <p>${r.comment}</p>
    <p style="color:#aaa">- ${r.user}</p>
  `;
  reviewContainer.appendChild(div);
});

// Render Team
const teamContainer = document.getElementById("team");
team.forEach(m => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${m.name}</h3><p>${m.role}</p>`;
  teamContainer.appendChild(div);
});
