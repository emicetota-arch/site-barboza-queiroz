import React from 'react'
import { Scale, UsersRound, MessageSquareCheck, ArrowRight, Quote } from 'lucide-react'

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Scale,
      line1: 'Orientação',
      line2: 'técnica',
      ariaLabel: 'Pilar: Orientação técnica',
    },
    {
      icon: UsersRound,
      line1: 'Atendimento',
      line2: 'personalizado',
      ariaLabel: 'Pilar: Atendimento personalizado',
    },
    {
      icon: MessageSquareCheck,
      line1: 'Comunicação',
      line2: 'transparente',
      ariaLabel: 'Pilar: Comunicação transparente',
    },
  ]

  return (
    <section
      id="escritorio"
      aria-labelledby="escritorio-title"
      className="relative w-full bg-paper overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Âncora alternativa para compatibilidade */}
      <div id="sobre" className="sr-only" aria-hidden="true" />
      <div className="grid grid-cols-1 lg:grid-cols-[53fr_47fr] items-stretch">

        {/* ==================================================== */}
        {/* ESQUERDA: Fotografia full-bleed (~53% da seção)      */}
        {/* ==================================================== */}
        <div className="relative w-full h-[380px] xs:h-[420px] sm:h-[460px] lg:h-full lg:min-h-[500px] xl:min-h-[514px] group overflow-hidden">
          <img
            src="/assets/dra-gabrielle-sobre.png"
            alt="Dra. Gabrielle Barboza Queiroz advogada previdenciária em atendimento"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-[center_28%] transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            width="1024"
            height="768"
          />

          {/* Card de citação (canto inferior esquerdo) */}
          <div
            className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 lg:left-[max(24px,calc((100vw-1320px)/2+32px))] z-10 max-w-[260px] sm:max-w-[290px] p-4 sm:p-5 rounded-[16px] animate-fade-in-up [animation-delay:180ms]"
            style={{
              background: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              borderRadius: '16px',
              border: '1px solid rgba(136, 61, 82, 0.10)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
            }}
            role="blockquote"
            aria-label="Citação da Dra. Gabrielle Barboza Queiroz"
          >
            <div className="text-wine mb-1" aria-hidden="true">
              <Quote className="w-5 h-5 fill-wine stroke-[1.5]" />
            </div>
            <p className="font-sans text-ink text-[8px] sm:text-[14px] leading-[1.25]">
              “Cada caso é único e merece uma orientação individual.”
            </p>
            <p className="font-serif text-wine font-bold text-[15px] sm:text-[19px] mt-2.5 leading-tight">
              Dra. Gabrielle Barboza Queiroz
            </p>
          </div>
        </div>

        {/* ==================================================== */}
        {/* DIREITA: Conteúdo editorial                          */}
        {/* ==================================================== */}
        <div
          className="flex flex-col justify-center px-4 sm:px-6 py-10 lg:py-9 lg:pl-12 xl:pl-[68px] lg:pr-[max(32px,calc((100vw-1320px)/2+32px))]"
        >
          <div className="max-w-[600px] w-full mx-auto lg:mx-0">
            <div className="animate-fade-in-up [animation-delay:80ms] mb-2.5">
              <span className="inline-block text-[11px] sm:text-[12px] font-bold tracking-[0.24em] uppercase text-wine">
                SOBRE NÓS
              </span>
            </div>

            <h2
              id="escritorio-title"
              className="animate-fade-in-up [animation-delay:140ms] font-serif font-medium text-ink leading-[1.08] tracking-tight mb-4 sm:mb-5 text-[32px] xs:text-[36px] sm:text-[42px] lg:text-[42px] xl:text-[46px]"
            >
              Um escritório focado
              <br />
              em pessoas e em{' '}
              <span className="text-wine">orientação previdenciária.</span>
            </h2>

            <div className="animate-fade-in-up [animation-delay:200ms] text-[14.5px] sm:text-[15px] leading-[1.55] text-[#596364] space-y-3 mb-6 font-normal">
              <p>
                O Barboza Queiroz Advocacia atua em Direito Previdenciário, oferecendo orientação técnica, atendimento humanizado e acompanhamento transparente em diferentes demandas relacionadas ao INSS.
              </p>
              <p>
                Cada atendimento é conduzido de forma individual, considerando as particularidades do caso, a documentação disponível e as regras previdenciárias aplicáveis.
              </p>
              <p className="text-ink font-medium">
                A Dra. Gabrielle Barboza Queiroz, inscrita na OAB/ES 27.291, está à frente do escritório.
              </p>
            </div>

            {/* Pilares (centralizados, como na referência) */}
            <div
              className="animate-fade-in-up [animation-delay:260ms] grid grid-cols-3 gap-4 mb-6"
              role="region"
              aria-label="Pilares do escritório"
            >
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.line1}
                    className="flex flex-col items-center text-center group"
                    aria-label={pillar.ariaLabel}
                  >
                    <div className="text-wine mb-2 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-[32px] h-[32px] stroke-[1.4]" aria-hidden="true" />
                    </div>
                    <p className="text-[13px] sm:text-[13.5px] font-medium text-ink leading-tight">
                      <span className="block">{pillar.line1}</span>
                      <span className="block text-slate/85">{pillar.line2}</span>
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="animate-fade-in-up [animation-delay:300ms]">
              <a
                href="#contato"
                className="inline-flex items-center gap-2.5 bg-wine hover:bg-wine-dark active:bg-[#602737] text-white font-medium text-[14px] h-[44px] px-5 rounded-[8px] shadow-[0_3px_12px_rgba(136,61,82,0.20)] hover:shadow-[0_5px_16px_rgba(136,61,82,0.30)] transition-all duration-200 focus-ring"
              >
                <span>Conheça nossa história</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
