import React from 'react'
import { ArrowRight, HeartHandshake, ShieldCheck, MonitorSmartphone } from 'lucide-react'
import { WhatsAppIcon } from './Header'

const WHATSAPP_PRIMARY_URL =
  'https://wa.me/5527999082243?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Barboza%20Queiroz%20Advocacia%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20previdenci%C3%A1rio.'

const WHATSAPP_SECONDARY_URL =
  'https://wa.me/5527999082243?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20inicial%20do%20meu%20caso%20previdenci%C3%A1rio.%20Como%20podemos%20come%C3%A7ar%3F'

export const CtaSection: React.FC = () => {
  return (
    <section
      id="contato"
      aria-labelledby="cta-title"
      className="relative w-full overflow-hidden text-white scroll-mt-20 sm:scroll-mt-24"
      style={{
        background: '#465456',
        backgroundImage: 'linear-gradient(110deg, #415052 0%, #465456 55%, #3F4D4F 100%)',
      }}
    >
      <div className="max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-9 sm:py-9 lg:py-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* ==================================================== */}
          {/* ESQUERDA: Monograma Decorativo + Título + Subtítulo  */}
          {/* ==================================================== */}
          <div className="lg:col-span-5 relative">
            {/* Monograma BQ como marca d'água decorativa */}
            <img
              src="/assets/logo-bq-symbol.png"
              alt=""
              aria-hidden="true"
              className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-[92px] xl:w-[104px] opacity-[0.10] pointer-events-none select-none filter grayscale brightness-[2.2]"
            />

            <div className="relative z-10 lg:pl-[96px] xl:pl-[112px]">
              <h2
                id="cta-title"
                className="font-serif font-medium text-white leading-[1.05] tracking-tight text-[30px] xs:text-[34px] sm:text-[36px] lg:text-[32px] xl:text-[38px]"
              >
                Vamos analisar o seu caso?
              </h2>
              <p className="text-[14px] sm:text-[15px] leading-[1.5] text-white/85 mt-2 max-w-[440px] font-normal">
                Fale com a nossa equipe e receba uma orientação inicial sobre o seu caso previdenciário.
              </p>
            </div>
          </div>

          {/* ==================================================== */}
          {/* CENTRO: Botões de Ação                                */}
          {/* ==================================================== */}
          <div className="lg:col-span-3 flex flex-col gap-2.5 sm:gap-3 w-full sm:max-w-[340px] lg:max-w-none">
            {/* Botão Primário WhatsApp */}
            <a
              href={WHATSAPP_PRIMARY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 h-[44px] sm:h-[46px] px-5 sm:px-6 bg-[#883D52] hover:bg-[#743445] text-white font-medium text-[14.5px] rounded-[8px] sm:rounded-[10px] shadow-[0_2px_12px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_18px_rgba(136,61,82,0.35)] transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#465456]"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
              <span>Fale pelo WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform duration-200 shrink-0" />
            </a>

            {/* Botão Secundário Solicitar Análise */}
            <a
              href={WHATSAPP_SECONDARY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-[44px] sm:h-[46px] px-5 sm:px-6 bg-transparent hover:bg-white/[0.08] text-white font-medium text-[13.5px] sm:text-[14px] rounded-[8px] sm:rounded-[10px] border border-white/65 hover:border-white/90 transition-all duration-200 active:scale-[0.98] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#465456]"
            >
              Solicitar análise do caso
            </a>
          </div>

          {/* ==================================================== */}
          {/* DIREITA: Três Pontos de Confiança                     */}
          {/* ==================================================== */}
          <div className="lg:col-span-4 lg:border-l lg:border-white/15 lg:pl-6 xl:pl-8 flex flex-col gap-3 sm:gap-3.5 pt-2 lg:pt-0">
            {/* Item 1 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center shrink-0 text-[#F3D7DF]">
                <HeartHandshake className="w-4 h-4 stroke-[1.8]" aria-hidden="true" />
              </div>
              <span className="text-[13.5px] sm:text-[14px] text-white/90 leading-snug">
                Atendimento ágil e humanizado
              </span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center shrink-0 text-[#F3D7DF]">
                <ShieldCheck className="w-4 h-4 stroke-[1.8]" aria-hidden="true" />
              </div>
              <span className="text-[13.5px] sm:text-[14px] text-white/90 leading-snug">
                Seus dados protegidos e com sigilo
              </span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center shrink-0 text-[#F3D7DF]">
                <MonitorSmartphone className="w-4 h-4 stroke-[1.8]" aria-hidden="true" />
              </div>
              <span className="text-[13.5px] sm:text-[14px] text-white/90 leading-snug">
                Atendimento online e presencial
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
