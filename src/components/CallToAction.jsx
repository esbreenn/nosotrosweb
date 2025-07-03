// CallToAction.jsx
export default function CallToAction() {
  return (
    <section
      id="contacto"
      className="min-h-[60vh] py-16 bg-gradient-to-t from-[#203369] to-[#181A20] flex flex-col items-center justify-center"
    >
      <div className="max-w-lg w-full mx-auto p-8 bg-[#20242c]/90 rounded-3xl shadow-2xl shadow-black/15 transition-all duration-300 hover:shadow-blue-400/25">
        <h2 className="text-3xl font-bold text-white mb-3 text-center">
          ¿Listo para tener tu web?
        </h2>
        <p className="text-gray-400 mb-8 text-center">
          Completá el formulario y te respondemos en menos de 24 horas.<br />
          También podés{" "}
          <a
            href="https://wa.me/5491123456789"
            className="text-green-400 underline hover:text-green-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            escribirnos por WhatsApp
          </a>
          .
        </p>

        <form
          action="https://formspree.io/f/movwbegp"
          method="POST"
          className="flex flex-col gap-5"
          autoComplete="off"
        >
          <input
            type="text"
            name="nombre"
            required
            placeholder="Tu nombre"
            className="h-14 px-5 rounded-xl bg-[#181A20] text-white border border-white/10 focus:border-blue-400 outline-none text-lg shadow transition duration-200 placeholder:text-gray-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Tu email"
            className="h-14 px-5 rounded-xl bg-[#181A20] text-white border border-white/10 focus:border-blue-400 outline-none text-lg shadow transition duration-200 placeholder:text-gray-400"
          />
          <textarea
            name="mensaje"
            required
            rows={4}
            placeholder="Contanos tu proyecto o consulta..."
            className="px-5 py-4 rounded-xl bg-[#181A20] text-white border border-white/10 focus:border-blue-400 outline-none text-lg shadow transition duration-200 placeholder:text-gray-400 resize-none"
          />
          <button
            type="submit"
            className="h-14 rounded-xl bg-blue-500 text-white text-lg font-bold shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-400/40 focus-visible:ring-2 focus-visible:ring-blue-400 outline-none"
          >
            Quiero mi web ahora
          </button>
        </form>

        <div className="mt-7 flex justify-center gap-7">
          <a
            href="https://wa.me/5491123456789"
            className="w-12 h-12 bg-green-500/80 rounded-full flex items-center justify-center shadow-lg hover:bg-green-400 hover:scale-110 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            {/* WhatsApp SVG */}
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 text-white">
              <path d="M12 2.04c-5.51 0-9.96 4.46-9.96 9.96a9.89 9.89 0 001.46 5.16L2 22l4.98-1.31a9.98 9.98 0 004.96 1.31c5.51 0 9.96-4.46 9.96-9.96s-4.45-9.96-9.96-9.96zm0 18.23c-1.52 0-3-.4-4.27-1.14l-.3-.18-2.95.77.78-2.88-.2-.3A8.12 8.12 0 013.84 12c0-4.5 3.66-8.16 8.16-8.16s8.16 3.66 8.16 8.16-3.66 8.16-8.16 8.16zm4.56-6.15c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.57.13-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06a6.8 6.8 0 01-2-1.22 7.65 7.65 0 01-1.4-1.75c-.14-.25-.01-.38.11-.5.11-.12.25-.31.37-.46.13-.15.17-.26.25-.42.09-.17.05-.31-.02-.43-.07-.12-.57-1.37-.78-1.87-.2-.49-.4-.42-.57-.43l-.48-.01a.92.92 0 00-.66.31c-.23.25-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.17 1.8 2.74 4.36 3.73.61.23 1.08.37 1.45.47.61.19 1.16.16 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.09.15-1.18-.06-.09-.22-.14-.46-.27z" />
            </svg>
          </a>
          <a
            href="mailto:hola@nosotrosweb.com"
            className="w-12 h-12 bg-blue-500/80 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-400 hover:scale-110 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            {/* Email SVG */}
            <svg fill="none" viewBox="0 0 24 24" className="w-7 h-7 text-white">
              <path stroke="currentColor" strokeWidth={2} d="M3.75 7.5v9a2.25 2.25 0 002.25 2.25h12a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0018 5.25H6A2.25 2.25 0 003.75 7.5zm0 0L12 13.5l8.25-6" />
            </svg>
          </a>
        </div>

        <div className="mt-8 text-center text-gray-400 text-xs">
          Somos una agencia digital argentina enfocada en pequeñas empresas y emprendedores.<br />
          Hablás con personas reales. Tu éxito es nuestro objetivo.
        </div>
      </div>
    </section>
  );
}
