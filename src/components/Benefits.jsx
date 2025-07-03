const benefits = [
    {
  icon: (
    <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 2" />
      <path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  title: "Integración con WhatsApp",
  desc: "Tus clientes te contactan directo.",
},

  {
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Listo en 5-7 días",
    desc: "Entrega ultra rápida, sin perder calidad.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="14" rx="3" />
        <path d="M8 20h8" />
      </svg>
    ),
    title: "Todo incluido",
    desc: "Diseño, dominio y hosting. Sin sorpresas.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    ),
    title: "Responsive",
    desc: "Tu web se adapta a cualquier pantalla.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 9h.01M15 9h.01M8 13h8" />
      </svg>
    ),
    title: "Soporte real",
    desc: "Contactanos por WhatsApp o Email directo.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-lime-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: "Sin complicaciones",
    desc: "Vos enfocáte en tu negocio. Nosotros nos encargamos.",
  },
];

export default function Benefits() {
  return (
    <section className="w-full bg-[#181A20] py-20" id="beneficios">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          ¿Por qué elegir <span className="text-blue-400">NosotrosWeb</span>?
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <li
              key={b.title}
              className="bg-[#23262F] rounded-2xl p-7 flex flex-col items-center shadow-lg transition-all
              hover:-translate-y-2 hover:shadow-blue-500/30 hover:ring-2 hover:ring-blue-500/40 group animate-fadeInUp"
              style={{ animationDelay: `${i * 120}ms` }}
              tabIndex={0}
            >
              <div className="mb-4">{b.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition">
                {b.title}
              </h3>
              <p className="text-gray-400 text-center text-base">{b.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
