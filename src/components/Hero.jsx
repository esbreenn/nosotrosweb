export default function Hero() {
  return (
    <section id="inicio" className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-black via-[#0a1122] to-[#151d2b]">
      <div className="max-w-3xl mx-auto text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight mb-4">
          Tu web profesional,<br />
          lista en <span className="text-blue-400">5 días.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          Soluciones rápidas, seguras y a medida para tu negocio o emprendimiento.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:justify-center">
          <a
            href="#contacto"
            className="px-8 py-3 bg-blue-500 text-white text-lg font-bold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200 focus:ring-2 focus:ring-blue-400 outline-none text-center"
          >
            Solicitar mi web
          </a>
          <a
            href="#portfolio"
            className="px-8 py-3 bg-white/5 border border-white/20 text-white text-lg font-bold rounded-lg shadow-md hover:bg-white/10 hover:border-blue-400 transition-all duration-200 text-center"
          >
            Ver trabajos realizados
          </a>
        </div>
      </div>
    </section>
  );
}
