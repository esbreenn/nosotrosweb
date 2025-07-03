export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-[#181A20] py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          ¿Quiénes <span className="text-blue-400">somos?</span>
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Somos un equipo apasionado por el diseño y la tecnología, enfocados en crear sitios web rápidos, profesionales y accesibles para pequeñas empresas y emprendedores. Nos gusta simplificar, acompañar y dar soporte real, para que cada cliente sienta su web como propia.
        </p>
        <div className="flex justify-center gap-6">
          {/* Podés agregar fotos, logos, o hasta un emoji/personita si querés */}
          <span className="text-5xl">💻</span>
          <span className="text-5xl">🚀</span>
          <span className="text-5xl">🤝</span>
        </div>
      </div>
    </section>
  );
}
