import React, { useState, useEffect } from 'react'

const WHATSAPP_URL = 'https://wa.me/5527999082243?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Barboza%20Queiroz%20Advocacia%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20previdenci%C3%A1rio.'

// Authentic WhatsApp SVG icon
export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.86 7.42 8.56 7.49 8.31 7.76C8.06 8.04 7.35 8.7 7.35 10.05C7.35 11.41 8.34 12.71 8.48 12.9C8.62 13.09 10.42 15.86 13.17 17.05C15.46 18.04 15.92 17.84 16.42 17.8C16.92 17.75 18.03 17.14 18.26 16.5C18.49 15.86 18.49 15.31 18.42 15.19C18.35 15.08 18.17 15.01 17.89 14.87C17.61 14.73 16.25 14.06 16 13.97C15.74 13.87 15.56 13.83 15.37 14.11C15.19 14.38 14.65 15.01 14.49 15.2C14.33 15.38 14.17 15.4 13.89 15.26C13.62 15.13 12.73 14.83 11.67 13.89C10.85 13.16 10.3 12.26 10.14 11.98C9.97 11.71 10.12 11.56 10.26 11.42C10.39 11.29 10.55 11.08 10.69 10.92C10.83 10.75 10.88 10.64 10.97 10.45C11.06 10.27 11.02 10.11 10.95 9.97C10.88 9.83 10.32 8.46 10.09 7.91C9.87 7.36 9.64 7.44 9.47 7.43H9.04Z" />
  </svg>
)

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const navLinks = [
    { label: 'Início', href: '#inicio', active: true },
    { label: 'Atuação', href: '#atuacao', active: false },
    { label: 'O Escritório', href: '#escritorio', active: false },
    { label: 'Como Funciona', href: '#processo', active: false },
    { label: 'Avaliações', href: '#avaliacoes', active: false },
    { label: 'Dúvidas', href: '#duvidas', active: false },
    { label: 'Contato', href: '#contato', active: false },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(38,54,56,0.06)] border-b border-[#263638]/5'
          : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 h-[70px] flex items-center justify-between">
        
        {/* LOGO */}
        <a
          href="#inicio"
          className="flex items-center gap-3.5 group focus-ring rounded-md py-1"
          aria-label="Barboza Queiroz Advocacia Previdenciária - Ir para o início"
        >
          <img
            src="/assets/logo-barboza-queiroz.png"
            alt="Barboza Queiroz Advocacia Previdenciária"
            className="h-[52px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            width="44"
            height="44"
          />
          <div className="flex flex-col justify-center">
            <span className="font-serif font-bold text-[15px] sm:text-[15.5px] tracking-[0.16em] uppercase text-ink leading-tight whitespace-nowrap">
              Barboza Queiroz
            </span>
            <span className="font-sans text-[8.5px] sm:text-[9px] font-semibold tracking-[0.24em] uppercase text-slate/85 mt-0.5">
              Advocacia Previdenciária
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION (Hidden on mobile/tablet < 960px) */}
        <nav
          className="hidden xl:flex items-center space-x-6 2xl:space-x-7"
          aria-label="Navegação Principal"
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[13.5px] xl:text-[14px] font-medium transition-colors duration-200 focus-ring rounded px-1 py-1 ${
                item.active
                  ? 'text-wine font-semibold'
                  : 'text-ink hover:text-wine'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden xl:flex items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-wine hover:bg-wine-dark active:bg-[#602737] text-white text-[13.5px] xl:text-[14px] font-medium px-5 xl:px-6 h-[44px] rounded-[8px] shadow-[0_3px_12px_rgba(136,61,82,0.22)] transition-all duration-200 hover:shadow-[0_4px_16px_rgba(136,61,82,0.32)] focus-ring whitespace-nowrap"
          >
            <WhatsAppIcon className="w-[17px] h-[17px] text-white shrink-0" />
            <span>Fale pelo WhatsApp</span>
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON (< 960px) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
          className="xl:hidden inline-flex items-center justify-center p-2 rounded-lg text-ink hover:text-wine hover:bg-rose-soft/50 focus-ring transition-colors"
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY & DRAWER */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[70px] z-50 bg-ink/40 backdrop-blur-sm xl:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm ml-auto bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-4">
                <span className="text-xs uppercase tracking-widest text-slate font-semibold">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fechar menu"
                  className="p-1.5 text-slate hover:text-wine rounded-md focus-ring"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-3 rounded-lg text-base font-medium transition-colors ${
                    item.active
                      ? 'text-wine bg-rose-soft/50 font-semibold'
                      : 'text-ink hover:text-wine hover:bg-rose-soft/30'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-100 mt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 bg-wine hover:bg-wine-dark text-white text-[15px] font-medium h-[48px] rounded-lg shadow-[0_3px_12px_rgba(136,61,82,0.22)] transition-colors focus-ring"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Fale pelo WhatsApp</span>
              </a>
              <p className="text-center text-xs text-slate/70 mt-3 font-normal">
                Atendimento de Segunda a Sexta
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
