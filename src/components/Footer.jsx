// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#181A20] w-full py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Izquierda */}
         <p className="text-xs text-gray-400">
      NosotrosWeb © 2025 — Hecho con 🤍 desde Argentina para que tu negocio crezca online.
    </p>
        {/* Derecha: redes */}
        <div className="flex gap-5">
          <a
            href="https://wa.me/xxxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
            aria-label="WhatsApp"
          >
            {/* WhatsApp SVG */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M16.71 13.12c-.23-.12-1.34-.66-1.54-.73-.2-.08-.34-.12-.49.12-.14.23-.57.73-.7.88-.12.16-.26.17-.49.06-.23-.12-.96-.35-1.83-1.13-.68-.61-1.14-1.37-1.27-1.6-.13-.23-.01-.36.1-.48.1-.1.23-.26.34-.39.12-.13.16-.23.23-.39.07-.15.03-.29-.01-.41-.05-.13-.49-1.17-.67-1.6-.18-.43-.36-.36-.49-.37-.12 0-.27-.01-.42-.01-.15 0-.39.06-.6.28-.21.22-.79.77-.79 1.87 0 1.1.81 2.16.93 2.31.12.15 1.59 2.44 3.86 3.33.54.23.96.37 1.29.47.54.17 1.03.15 1.42.09.43-.07 1.34-.55 1.53-1.08.19-.53.19-.99.14-1.08-.05-.09-.2-.14-.42-.25z"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </a>
          <a
            href="mailto:hola@nosotrosweb.com"
            className="hover:text-blue-400 transition"
            aria-label="Email"
          >
            {/* Email SVG */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>
          <a
            href="https://instagram.com/nosotrosweb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            aria-label="Instagram"
          >
            {/* Instagram SVG */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17" cy="7" r="1.5" />
            </svg>
          </a>
        </div>
        
      </div>
    </footer>
  );
}
