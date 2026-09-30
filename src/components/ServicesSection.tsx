import React from 'react'
import { ServiceCard } from './ServiceCard'
import { SERVICES_CATALOG } from '../data/services'

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="atuacao"
      aria-labelledby="servicos-title"
      className="relative w-full bg-paper pt-12 sm:pt-14 lg:pt-[52px] pb-14 sm:pb-16 lg:pb-[64px] scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Âncora alternativa para compatibilidade */}
      <div id="servicos" className="sr-only" aria-hidden="true" />
      <div className="max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==================================================== */}
        {/* HEADER DA SEÇÃO (Centralizado)                       */}
        {/* ==================================================== */}
        <div className="text-center max-w-[760px] mx-auto mb-8 sm:mb-8 lg:mb-9">
          
          {/* Eyebrow */}
          <div className="animate-fade-in-up [animation-delay:60ms]">
            <span className="inline-block text-[11px] sm:text-[12px] font-bold tracking-[0.22em] uppercase text-wine mb-2.5">
              NOSSAS SOLUÇÕES
            </span>
          </div>

          {/* Título H2 */}
          <h2
            id="servicos-title"
            className="animate-fade-in-up [animation-delay:120ms] font-serif font-medium text-ink leading-[1.05] tracking-tight mb-3 text-[32px] xs:text-[36px] sm:text-[42px] lg:text-[46px] xl:text-[48px]"
          >
            Como podemos te ajudar?
          </h2>

          {/* Subtítulo Institucional */}
          <p className="animate-fade-in-up [animation-delay:180ms] text-[12.5px] sm:text-[13px] md:text-[13.5px] lg:text-[14px] leading-snug text-[#556062] font-normal mx-auto max-w-[780px]">
            Atuamos em diferentes demandas do Direito Previdenciário, com orientação técnica e análise individual de cada caso.
          </p>
        </div>

        {/* ==================================================== */}
        {/* GRID PRINCIPAL: 5 COLUNAS X 2 LINHAS NO DESKTOP      */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 min-[1200px]:grid-cols-5 gap-x-3.5 xl:gap-x-[16px] gap-y-3.5 xl:gap-y-[14px]">
          {SERVICES_CATALOG.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
