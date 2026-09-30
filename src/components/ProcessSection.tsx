import React from 'react'
import { FileText, Search, Settings, Users } from 'lucide-react'

export interface ProcessStep {
  number: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Atendimento',
    description: 'Entendemos o seu caso e suas necessidades.',
    icon: FileText,
  },
  {
    number: 2,
    title: 'Análise',
    description: 'Avaliamos toda a sua documentação e traçamos a melhor estratégia.',
    icon: Search,
  },
  {
    number: 3,
    title: 'Estratégia',
    description: 'Cuidamos do processo junto ao INSS ou na via judicial.',
    icon: Settings,
  },
  {
    number: 4,
    title: 'Acompanhamento',
    description: 'Você é informado em todas as etapas até a conquista do seu benefício.',
    icon: Users,
  },
]

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="processo"
      aria-labelledby="processo-title"
      className="relative w-full overflow-hidden pt-6 pb-7 sm:pt-7 sm:pb-8 lg:pt-[26px] lg:pb-[30px] scroll-mt-20 sm:scroll-mt-24"
      style={{
        background: 'linear-gradient(90deg, #FCF8F6 0%, #FAF4F1 55%, #F5ECE8 100%)',
      }}
    >
      {/* Âncoras alternativas para preservar compatibilidade */}
      <div id="como-funciona" className="sr-only" aria-hidden="true" />
      <div id="como-trabalhamos" className="sr-only" aria-hidden="true" />
      <div id="beneficios" className="sr-only" aria-hidden="true" />

      {/* Elemento Decorativo da Justiça (Fundo de alta definição compacto com degradê suave) */}
      <div
        className="hidden lg:block absolute right-[-20px] xl:right-[max(-10px,calc((100vw-1360px)/2))] top-0 pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <img
          src="/assets/lady-justice.png"
          alt=""
          loading="lazy"
          className="h-[315px] xl:h-[345px] w-auto object-contain opacity-[0.48] xl:opacity-[0.54] mix-blend-multiply"
          width="1024"
          height="1024"
        />
      </div>

      <div className="relative max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ==================================================== */}
        {/* HEADER DA SEÇÃO (Centralizado e Compacto)            */}
        {/* ==================================================== */}
        <div className="text-center max-w-[920px] mx-auto mb-3.5 sm:mb-4 lg:mb-4">
          
          {/* Eyebrow */}
          <div className="animate-fade-in-up [animation-delay:60ms]">
            <span className="inline-block text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.20em] uppercase text-wine mb-1">
              COMO TRABALHAMOS
            </span>
          </div>

          {/* Título H2 */}
          <h2
            id="processo-title"
            className="animate-fade-in-up [animation-delay:120ms] font-serif leading-[1.10] tracking-tight mb-1 text-[28px] xs:text-[32px] sm:text-[35px] lg:text-[38px] xl:text-[40px]"
          >
            <span className="text-[#263638] font-normal">Um processo simples e </span>
            <span className="text-wine font-medium">seguro</span>
            <br />
            <span className="text-wine font-medium">para o seu benefício</span>
          </h2>

          {/* Subtítulo menor em 1 linha única no desktop */}
          <p className="animate-fade-in-up [animation-delay:180ms] text-[12.5px] sm:text-[13px] md:text-[13.5px] lg:text-[14px] leading-snug text-[#556062] font-normal mx-auto max-w-none md:whitespace-nowrap mt-1">
            Do primeiro contato até o recebimento, você conta com um atendimento transparente e um time ao seu lado.
          </p>
        </div>

        {/* ==================================================== */}
        {/* DESKTOP LAYOUT (4 Colunas com Linha Horizontal)      */}
        {/* ==================================================== */}
        <div className="hidden lg:block relative mt-4 lg:mt-5">
          
          {/* Linha horizontal fina conectando os 4 círculos exatamente no centro */}
          <div
            className="absolute top-[16px] xl:top-[17px] left-[12.5%] right-[12.5%] h-[1.5px] bg-[#DFC6CD] pointer-events-none z-0"
            aria-hidden="true"
          />

          <ol
            aria-label="Etapas do atendimento"
            className="grid grid-cols-4 gap-4 xl:gap-5 relative z-10"
          >
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon
              const delay = Math.min(index * 60, 180)

              return (
                <li
                  key={step.number}
                  className="flex flex-col items-center relative group animate-fade-in-up"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {/* Círculo com Número (32px / 34px) */}
                  <div
                    className="w-[32px] h-[32px] xl:w-[34px] xl:h-[34px] rounded-full bg-wine text-white font-semibold text-[13.5px] xl:text-[14px] flex items-center justify-center relative z-10 shadow-sm mb-2.5"
                    aria-label={`Etapa ${step.number}`}
                  >
                    {step.number}
                  </div>

                  {/* Card com Seta */}
                  <div className="relative w-full flex-1 flex flex-col">
                    <div className="w-full h-full bg-white rounded-[13px] py-2.5 px-3.5 xl:py-3 xl:px-4 border border-[#EFE5E7] shadow-[0_2px_10px_rgba(136,61,82,0.035)] flex items-center gap-3 xl:gap-3.5 transition-all duration-200 hover:shadow-[0_5px_16px_rgba(136,61,82,0.07)]">
                      {/* Ícone com fundo rosado circular */}
                      <div className="w-[42px] h-[42px] xl:w-[44px] xl:h-[44px] rounded-full bg-[#FAF0F2] border border-[#F4E3E7] flex items-center justify-center text-wine shrink-0 group-hover:scale-105 transition-transform duration-200">
                        <Icon className="w-[19px] h-[19px] xl:w-[20px] xl:h-[20px] stroke-[1.8]" />
                      </div>

                      {/* Conteúdo */}
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif font-semibold text-[15px] xl:text-[15.5px] text-[#263638] leading-tight mb-0.5">
                          {step.title}
                        </h3>
                        <p className="text-[11px] xl:text-[11.5px] text-[#556062] leading-[1.35] font-normal">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Seta sólida ▶ entre as etapas */}
                    {index < PROCESS_STEPS.length - 1 && (
                      <div
                        className="absolute left-[calc(100%+8px)] xl:left-[calc(100%+10px)] top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none text-wine"
                        aria-hidden="true"
                      >
                        <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                          <polygon points="7,4 19,12 7,20" />
                        </svg>
                      </div>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        {/* ==================================================== */}
        {/* TABLET LAYOUT (640px - 1023px: 2x2 Grid)             */}
        {/* ==================================================== */}
        <div className="hidden sm:block lg:hidden mt-4 sm:mt-5">
          <ol
            aria-label="Etapas do atendimento"
            className="grid grid-cols-2 gap-3.5"
          >
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon
              const delay = Math.min(index * 60, 180)

              return (
                <li
                  key={step.number}
                  className="bg-white rounded-[13px] py-2.5 px-3.5 border border-[#EFE5E7] shadow-[0_2px_10px_rgba(136,61,82,0.035)] flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {/* Número */}
                  <div className="w-[30px] h-[30px] rounded-full bg-wine text-white font-semibold text-[13px] flex items-center justify-center shrink-0 shadow-sm">
                    {step.number}
                  </div>

                  {/* Ícone */}
                  <div className="w-[40px] h-[40px] rounded-full bg-[#FAF0F2] border border-[#F4E3E7] flex items-center justify-center text-wine shrink-0">
                    <Icon className="w-[18px] h-[18px] stroke-[1.8]" />
                  </div>

                  {/* Conteúdo */}
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif font-semibold text-[15px] text-[#263638] leading-tight mb-0.5">
                      {step.title}
                    </h3>
                    <p className="text-[11.5px] text-[#556062] leading-snug font-normal">
                      {step.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

        {/* ==================================================== */}
        {/* MOBILE LAYOUT (< 640px: Linha do Tempo Vertical)     */}
        {/* ==================================================== */}
        <div className="sm:hidden mt-4 relative">
          {/* Linha vertical conectando os passos */}
          <div
            className="absolute left-[16px] top-[24px] bottom-[24px] w-[1.5px] bg-[#DFC6CD] z-0"
            aria-hidden="true"
          />

          <ol
            aria-label="Etapas do atendimento"
            className="flex flex-col gap-3 relative z-10"
          >
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon
              const delay = Math.min(index * 50, 150)

              return (
                <li
                  key={step.number}
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {/* Número badge */}
                  <div className="w-[32px] h-[32px] rounded-full bg-wine text-white font-semibold text-[13px] flex items-center justify-center shrink-0 mt-3 shadow-sm z-10">
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white rounded-[14px] p-3.5 border border-[#EFE5E7] shadow-[0_2px_10px_rgba(136,61,82,0.03)] flex items-center gap-3">
                    <div className="w-[42px] h-[42px] rounded-full bg-[#FAF0F2] border border-[#F4E3E7] flex items-center justify-center text-wine shrink-0">
                      <Icon className="w-[19px] h-[19px] stroke-[1.8]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif font-semibold text-[15px] text-[#263638] leading-tight mb-0.5">
                        {step.title}
                      </h3>
                      <p className="text-[12px] text-[#556062] leading-[1.35] font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

      </div>
    </section>
  )
}

