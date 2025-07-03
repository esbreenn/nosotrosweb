// Portfolio.jsx
const projects = [
  {
    img: "ruta/a/imagen1.jpg",
    title: "Tienda ABC",
    desc: "E-commerce sencillo, rápido y adaptable a móviles.",
    link: "#",
  },
  {
    img: "ruta/a/imagen2.jpg",
    title: "Consultora XYZ",
    desc: "Sitio institucional para captar clientes profesionales.",
    link: "#",
  },
  {
    img: "ruta/a/imagen3.jpg",
    title: "Estudio Creativo",
    desc: "Portfolio visual para creativos independientes.",
    link: "#",
  },
  {
    img: "ruta/a/imagen4.jpg",
    title: "Café Urbano",
    desc: "Página para cafetería con menú digital.",
    link: "#",
  },
  {
    img: "ruta/a/imagen5.jpg",
    title: "Eventos Live",
    desc: "Sitio para eventos y reservas online.",
    link: "#",
  },
  {
    img: "ruta/a/imagen6.jpg",
    title: "Academia Pro",
    desc: "Plataforma educativa moderna y segura.",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-[#181A20] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          Algunos de nuestros <span className="text-blue-400">trabajos</span>
        </h2>
        <p className="text-gray-400 mb-12 text-center">
          Cada web es única. Mirá algunos ejemplos recientes de clientes felices.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-[#23262F] rounded-2xl p-4 flex flex-col items-center shadow-md transition hover:shadow-blue-400/40 hover:-translate-y-2 duration-300 group animate-fade-in"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full overflow-hidden rounded-xl"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl shadow transition duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-400/30"
                  loading="lazy"
                />
              </a>
              <h3 className="text-lg font-semibold text-white mt-4 mb-1 text-center group-hover:text-blue-400 transition">
                {project.title}
              </h3>
              <p className="text-gray-400 text-center text-sm line-clamp-2">{project.desc}</p>
            </div>
          ))}
        </div>
        {/* Botón para ver más */}
        <div className="flex justify-center mt-12">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold rounded-xl px-8 py-3 shadow-lg transition duration-300"
          >
            Ver más trabajos
          </a>
        </div>
      </div>
    </section>
  );
}
