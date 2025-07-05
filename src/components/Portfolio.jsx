import { useState } from "react";

const projects = [
{
    title: "Carniceria",
    videoDesktop: "videos/carniceria computadora.mp4", // Coloca tu video en /public/videos/
        videoMobile: "videos/carniceria celular.mp4",   // Opcional
    desc: "Panel financiero para una carniceria ",
    link: "https://tiendaabc.com"
  },
  {
    title: "Clincica Medica",
    videoDesktop: "videos/clinica.mp4", // Coloca tu video en /public/videos/
    desc: "Clinica medica para solicitar turnos y ver los especialistas disponibles",
    link: "https://nosotroswebclinica.netlify.app/#"
  },
  {
    title: "Tienda de Ropa",
    videoDesktop: "videos/zapatillas computadora.mp4", // Coloca tu video en /public/videos/
    desc: "Tienda de Ropa NosotrosWeb",
    link: "https://nosotroswebecomerce.netlify.app/"
  },
];

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalProject(project);
    setOpen(true);
    // Opcional: Bloquear scroll background cuando modal está abierto
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setOpen(false);
    setModalProject(null);
    document.body.style.overflow = "";
  };

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
              <button
                type="button"
                onClick={() => openModal(project)}
                className="block w-full overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label={`Ampliar ${project.title}`}
              >
                {project.videoDesktop ? (
                  <video
                    src={project.videoDesktop}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-48 object-cover rounded-xl shadow transition duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-400/30"
                    poster={project.imgDesktop}
                  />
                ) : project.imgDesktop ? (
                  <img
                    src={project.imgDesktop}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-xl shadow"
                    loading="lazy"
                  />
                ) : null}
              </button>
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
            Contáctanos
          </a>
        </div>
      </div>

      {/* MODAL */}
      {open && modalProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000] animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative bg-[#22262f] rounded-2xl p-6 shadow-xl max-w-2xl w-[90vw] mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white text-2xl hover:text-blue-400 transition"
              aria-label="Cerrar"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-white mb-3 text-center">{modalProject.title}</h3>
            {/* VIDEO O IMAGEN */}
            {modalProject.videoDesktop ? (
              <video
                src={modalProject.videoDesktop}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[380px] max-h-[60vw] object-contain rounded-xl mb-4 bg-black"
                poster={modalProject.imgDesktop}
              />
            ) : modalProject.imgDesktop ? (
              <img
                src={modalProject.imgDesktop}
                alt={modalProject.title}
                className="w-full rounded-xl mb-4"
              />
            ) : null}
            {modalProject.desc && (
              <p className="text-gray-300 text-center">{modalProject.desc}</p>
            )}
            {modalProject.link && (
              <div className="mt-4 text-center">
                <a
                  href={modalProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-6 py-2 transition"
                >
                  Ver Demo
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
