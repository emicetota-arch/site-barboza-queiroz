import React from 'react'
import { WhatsAppIcon } from './Header'
import { Differentials } from './Differentials'

const WHATSAPP_URL = 'https://wa.me/5527999082243?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Barboza%20Queiroz%20Advocacia%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20previdenci%C3%A1rio.'

export const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = 'contato'
    }
  }

  return (
    <section
      id="inicio"
      aria-label="Apresentação principal"
      className="relative w-full overflow-hidden bg-[#F4EEEA] md:h-[clamp(540px,40vw,660px)] scroll-mt-24"
    >
      {/* Foto panorâmica em toda a largura (desktop/tablet) */}
      <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src="/assets/hero-gabrielle-wide.jpg"
          alt="Dra. Gabrielle Barboza Queiroz advogada previdenciária em seu escritório em Vila Velha"
          fetchPriority="high"
          className="w-full h-full object-cover object-[68%_40%]"
          width="2364"
          height="942"
        />
      </div>

      {/* Véu claro à esquerda para leitura do texto */}
      <div
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-[1]"
        style={{
          background:
            'linear-gradient(90deg, rgba(246,240,236,0.94) 0%, rgba(246,240,236,0.82) 24%, rgba(246,240,236,0.45) 40%, rgba(246,240,236,0.10) 52%, rgba(246,240,236,0) 60%)',
        }}
        aria-hidden="true"
      />

      {/* Frase manuscrita (sem cartão), canto superior direito */}
      <div
        className="hidden xl:block absolute z-20 pointer-events-none select-none animate-fade-in [animation-delay:350ms]"
        style={{ right: '16%', top: '20%' }}
        aria-hidden="true"
      >
        <div
          className="font-script font-medium text-[#FFF] text-[21px] xl:text-[25px] leading-[0.8] -rotate-[8deg] origin-center"
          style={{
            textShadow: '0 2px 8px rgb(0, 0, 0), 0 1px 3px rgb(0, 0, 0)',
          }}
        >
          <span>Mais do que</span>
          <br />
          <span>advocacia, cuidamos</span>
          <br />
          <span>de pessoas.</span>
        </div>
        <svg
          className="w-[112px] xl:w-[148px] h-3 text-wine mt-3 xl:mt-4 ml-1 -rotate-[9deg] origin-left"
          viewBox="0 0 140 12"
          fill="none"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5))',
          }}
        >
          <path d="M3 9C40 5 95 3 137 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Identificação profissional: card flutuante refinado */}
      <div
        className="hidden lg:block absolute z-20 animate-fade-in-up [animation-delay:380ms] rounded-[16px]"
        style={{
          right: '15%',
          bottom: '16%',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderRadius: '16px',
          border: '1px solid rgba(136, 61, 82, 0.10)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
        }}
        role="complementary"
        aria-label="Identificação profissional"
      >
        <div className="py-3.5 px-5 min-w-[200px] xl:min-w-[225px]">
          <p className="font-serif font-semibold text-[15px] xl:text-[16.5px] text-wine leading-tight">
            Dra. Gabrielle Barboza Queiroz
          </p>
          <p className="text-[12px] xl:text-[13px] text-[#465456] mt-1 leading-snug">
            Advogada Previdenciária
          </p>
          <p className="text-[12px] xl:text-[13px] text-[#465456] mt-0.5 leading-snug">
            OAB/ES 27.291
          </p>
        </div>
      </div>

      {/* Conteúdo textual */}
      <div className="relative z-10 w-full md:h-full px-6 md:pl-[max(24px,calc((100vw-1180px)/2))] md:pr-6 py-8 md:py-0 md:flex md:items-center">
        <div className="w-full md:max-w-[520px] lg:max-w-[560px] xl:max-w-[600px]">

          <div className="animate-fade-in-up [animation-delay:80ms] mb-3.5">
            <span className="inline-block text-[11.5px] sm:text-[12.5px] xl:text-[13px] font-bold tracking-[0.20em] uppercase text-wine">
              ESCRITÓRIO PREVIDENCIÁRIO ESPECIALIZADO
            </span>
          </div>

          {/* H1 Semântico para SEO Local e Motores de Busca */}
          <h1 className="sr-only">
            Advocacia Previdenciária em Vitória e Vila Velha – ES | Barboza Queiroz
          </h1>

          {/* Headline visual de impacto comercial */}
          <div
            className="animate-fade-in-up [animation-delay:160ms] font-serif font-medium text-ink tracking-[-0.01em] mb-4"
            style={{ fontSize: 'clamp(40px, 4.55vw, 68px)', lineHeight: 0.98 }}
            role="heading"
            aria-level={2}
          >
            <span className="block">O seu direito</span>
            <span className="block">previdenciário</span>
            <span className="block text-wine whitespace-nowrap">em mãos seguras.</span>
          </div>

          <p className="animate-fade-in-up [animation-delay:240ms] text-[15.5px] xl:text-[17px] leading-[1.45] text-[#465456] max-w-[405px] mb-6 font-normal">
            Orientação clara, atendimento humanizado e estratégia jurídica para cuidar do seu caso com seriedade e segurança.
          </p>

          <div className="animate-fade-in-up [animation-delay:320ms] flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-[26px] mb-7">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-wine hover:bg-wine-dark active:bg-[#602737] text-white font-semibold text-[14.5px] xl:text-[15px] h-[50px] xl:h-[53px] px-6 rounded-[6px] shadow-[0_6px_16px_rgba(136,61,82,0.28)] transition-all duration-200 whitespace-nowrap focus-ring"
            >
              <WhatsAppIcon className="w-[26px] h-[26px] text-white shrink-0" />
              <span>Fale com a nossa especialista</span>
            </a>

            <a
              href="#contato"
              onClick={handleScrollToContact}
              className="inline-flex items-center justify-center bg-white/55 hover:bg-white/80 text-wine font-semibold text-[14.5px] xl:text-[15px] h-[50px] xl:h-[53px] px-8 rounded-[6px] border border-[#E2C9D0] hover:border-wine/50 transition-all duration-200 whitespace-nowrap focus-ring"
            >
              <span>Solicitar análise do caso</span>
            </a>
          </div>

          <div className="hidden md:block animate-fade-in-up [animation-delay:400ms]">
            <Differentials />
          </div>
        </div>
      </div>

      <div className="md:hidden relative z-10 w-full px-6 pb-8">
        {/* ========================================================== */}
        {/* 5. MOBILE ONLY (< 768px): Photo, Card, Differentials Flow  */}
        {/* ========================================================== */}
        <div className="md:hidden mt-6 flex flex-col gap-4">
          {/* MOBILE PHOTO */}
          <div className="relative w-full h-[360px] xs:h-[400px] overflow-hidden rounded-xl">
            <img
              src="/assets/hero-gabrielle-barboza.png"
              alt="Dra. Gabrielle Barboza Queiroz advogada previdenciária em Vila Velha"
              fetchPriority="high"
              className="w-full h-full object-cover object-[70%_center]"
              width="1586"
              height="992"
            />
            {/* Mobile Card positioned on the photo */}
            <div
              className="absolute bottom-3 right-3 z-10 rounded-[14px]"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(136, 61, 82, 0.10)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                borderRadius: '14px',
              }}
            >
              <div className="py-2.5 px-3.5">
                <p className="font-serif text-wine font-bold text-[15px] sm:text-[19px] mt-2.5 leading-tight">
                  Dra. Gabrielle Barboza Queiroz
                </p>
                <p className="text-[11.5px] font-medium text-[#465456] mt-0.5 leading-snug">
                  Advogada Previdenciária
                </p>
                <p className="text-[11px] font-medium text-[#465456] mt-0.5 leading-snug">
                  OAB/ES 27.291
                </p>
              </div>
            </div>
          </div>

          {/* MOBILE DIFFERENTIALS */}
          <div className="mt-2 animate-fade-in-up [animation-delay:360ms]">
            <Differentials />
          </div>
        </div>

      </div>
    </section>
  )
}
