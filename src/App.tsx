import React, { useState } from 'react';
import { Mail, Check, ArrowUpRight, Instagram } from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const email = 'contacto@hugodam.com';
  const instagramUser = 'hugodambienesraices';
  const instagramUrl = `https://instagram.com/${instagramUser}`;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  return (
    <main
      id="main-container"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center px-4 sm:px-6 md:px-12 py-8 sm:py-10 bg-[#031837] text-[#FAFAF8] overflow-hidden select-none selection:bg-[#D7A453] selection:text-[#031837]"
    >
      {/* Background Architectural Grid & Subtle Drafting Layer */}
      <div className="absolute inset-0 architectural-grid pointer-events-none opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 ambient-glow pointer-events-none" aria-hidden="true" />

      {/* Subtle Architectural Construction Markers (Corner Framing) */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 pointer-events-none opacity-25 flex items-center gap-2" aria-hidden="true">
        <span className="w-2.5 h-[1px] bg-[#D7A453]" />
        <span className="text-[10px] font-mono tracking-[0.2em] text-[#D7A453]">01 / REF</span>
      </div>

      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 pointer-events-none opacity-25 flex items-center gap-2" aria-hidden="true">
        <span className="text-[10px] font-mono tracking-[0.2em] text-[#D7A453]">EST. 2026</span>
        <span className="w-2.5 h-[1px] bg-[#D7A453]" />
      </div>

      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 pointer-events-none opacity-25 hidden sm:flex items-center gap-2" aria-hidden="true">
        <span className="w-2.5 h-[1px] bg-[#D7A453]" />
        <span className="text-[10px] font-mono tracking-[0.2em] text-[#D7A453]">PATRIMONIO & INVERSIÓN</span>
      </div>

      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 pointer-events-none opacity-25 hidden sm:flex items-center gap-2" aria-hidden="true">
        <span className="text-[10px] font-mono tracking-[0.2em] text-[#D7A453]">BIENES RAÍCES</span>
        <span className="w-2.5 h-[1px] bg-[#D7A453]" />
      </div>

      {/* Top Brand Tag / Architectural Coordinates Header */}
      <header className="w-full max-w-5xl flex justify-center items-center z-10">
        <div
          className="animate-fade-in-down flex items-center gap-3 px-3.5 py-1 rounded-full border border-[#D7A453]/20 bg-[#031837]/60 backdrop-blur-xs shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D7A453] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#D7A453] uppercase">
            HUGO DAM BIENES RAÍCES
          </span>
        </div>
      </header>

      {/* Central Hero Core Section */}
      <section
        id="hero-content"
        className="w-full max-w-3xl my-auto py-6 sm:py-8 flex flex-col items-center text-center z-10"
      >
        {/* 1. Official Logo with Elegant Glow & Reveal */}
        <div className="animate-logo-reveal relative mb-6 sm:mb-8 flex justify-center items-center">
          <div
            className="absolute -inset-6 sm:-inset-10 bg-[#D7A453]/10 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />
          <img
            src="https://res.cloudinary.com/kjnni8fj/image/upload/v1787171442/Logo_GoldWhite.png"
            alt="HUGO DAM - Construyendo Patrimonio"
            className="relative h-16 sm:h-20 md:h-24 w-auto max-w-[280px] sm:max-w-[340px] md:max-w-[380px] object-contain drop-shadow-md"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Delicate Architectural Structural Line */}
        <div
          className="animate-scale-x delay-200 w-24 sm:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-[#D7A453] to-transparent mb-6 sm:mb-7 origin-center"
          aria-hidden="true"
        />

        {/* 2. Eyebrow in Gold */}
        <div className="animate-fade-in-up delay-300 mb-3.5 sm:mb-4">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-[0.28em] text-[#D7A453] uppercase">
            CONSTRUYENDO PATRIMONIO
          </span>
        </div>

        {/* 3. Main Headline */}
        <h1
          className="animate-fade-in-up delay-400 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#FAFAF8] tracking-tight leading-[1.18] sm:leading-[1.15] max-w-2xl px-2 mb-4 sm:mb-5"
        >
          Estamos construyendo algo grande.
        </h1>

        {/* 4. Secondary Subtitle */}
        <p
          className="animate-fade-in-up delay-500 text-sm sm:text-base md:text-lg text-[#FAFAF8]/75 font-normal leading-relaxed max-w-lg sm:max-w-xl px-4 mb-7 sm:mb-9"
        >
          Muy pronto descubrirás una nueva forma de construir patrimonio en bienes raíces.
        </p>

        {/* 5. Highlight Badge: PRÓXIMAMENTE */}
        <div className="animate-fade-in-up delay-600 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D7A453]/40 bg-[#D7A453]/10 backdrop-blur-xs shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7A453]" />
            <span className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] text-[#D7A453] uppercase">
              PRÓXIMAMENTE
            </span>
          </div>
        </div>

        {/* 6. Primary Action Button (CONTÁCTANOS) & Email Assistance */}
        <div className="animate-fade-in-up delay-700 flex flex-col items-center gap-3 w-full max-w-xs sm:max-w-sm px-2">
          <a
            id="contact-cta-button"
            href={`mailto:${email}?subject=Contacto%20Hugo%20Dam%20-%20Inversi%C3%B3n%20Inmobiliaria`}
            className="group relative w-full sm:w-auto min-w-[220px] sm:min-w-[260px] inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#D7A453] hover:bg-[#E7C27D] active:bg-[#B38332] text-[#031837] font-semibold text-sm sm:text-base tracking-[0.16em] uppercase rounded-none transition-all duration-300 shadow-lg shadow-[#D7A453]/20 hover:shadow-[#D7A453]/35 hover:-translate-y-0.5 overflow-hidden"
          >
            {/* Shimmer light sweep effect */}
            <span
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"
              aria-hidden="true"
            />
            <Mail className="w-4 h-4 text-[#031837] stroke-[2.2]" />
            <span>CONTÁCTANOS</span>
            <ArrowUpRight className="w-4 h-4 text-[#031837] stroke-[2.2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Quick Copy Email Option */}
          <button
            id="copy-email-button"
            onClick={handleCopyEmail}
            type="button"
            className="inline-flex items-center gap-1.5 text-xs text-[#FAFAF8]/60 hover:text-[#D7A453] transition-colors duration-200 py-1 px-2 cursor-pointer"
            title="Copiar dirección de correo"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#D7A453]" />
                <span className="text-[#D7A453] font-medium">¡Correo copiado al portapapeles!</span>
              </>
            ) : (
              <>
                <span className="font-mono text-[11px] sm:text-xs">{email}</span>
                <span className="text-[10px] text-[#FAFAF8]/40">(copiar)</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="page-footer" className="w-full max-w-4xl pt-4 pb-2 text-center z-10 flex flex-col items-center gap-3">
        {/* Instagram handle link */}
        <div className="animate-fade-in-up delay-800">
          <a
            id="instagram-link"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D7A453]/25 bg-[#031837]/70 hover:border-[#D7A453]/60 hover:bg-[#D7A453]/10 text-[#FAFAF8]/80 hover:text-[#D7A453] transition-all duration-300 group"
          >
            <Instagram className="w-3.5 h-3.5 text-[#D7A453] transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xs tracking-wider font-medium text-[#FAFAF8]/85 group-hover:text-[#D7A453]">
              @{instagramUser}
            </span>
          </a>
        </div>

        <div className="animate-fade-in-up delay-900 flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#FAFAF8]/45 tracking-wider font-light">
          <span>© 2026 HUGO DAM</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-[#FAFAF8]/60">Construyendo patrimonio</span>
        </div>
      </footer>
    </main>
  );
}

