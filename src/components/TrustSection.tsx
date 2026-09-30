import React from 'react'
import { HeartHandshake, MessageSquareCheck, ShieldCheck } from 'lucide-react'

export interface TrustItem {
  id: string
  title: string
  description: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  // Campos opcionais preparados para futura inclusão de depoimentos reais autorizados
  quote?: string
  clientName?: string
  clientRole?: string
  rating?: number
}

const TRUST_CARDS: TrustItem[] = [
  {
    id: 'atendimento-humanizado',
    title: 'Atendimento humanizado',
    description: 'Cada caso é recebido de forma individual, com escuta atenta e orientação adequada à realidade do cliente.',
    label: 'Atendimento individual',
    icon: HeartHandshake,
  },
  {
    id: 'comunicacao-transparente',
    title: 'Comunicação transparente',
    description: 'As etapas, documentos e possibilidades jurídicas são explicados de maneira clara ao longo do atendimento.',
    label: 'Informação clara',
    icon: MessageSquareCheck,
  },
  {
    id: 'acompanhamento-proximo',
    title: 'Acompanhamento próximo',
    description: 'O cliente recebe orientação sobre o andamento do atendimento e os próximos passos do seu caso.',
    label: 'Acompanhamento',
    icon: ShieldCheck,
  },
]

export const TrustCard: React.FC<{ item: TrustItem; index: number }> = ({ item, index }) => {
  const Icon = item.icon
  const delay = Math.min(index * 60, 180)

  return (
    <article
      className="flex items-start gap-4 bg-white rounded-[14px] py-4 px-5 border border-wine/10 hover:border-wine/[0.22] shadow-[0_2px_10px_rgba(38,54,56,0.02)] transition-all duration-[220ms] ease-out animate-fade-in-up h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-[46px] h-[46px] rounded-full bg-[#F8E9EA] flex items-center justify-center text-wine shrink-0">
        <Icon className="w-[22px] h-[22px] stroke-[1.5]" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <h3 className="font-serif font-semibold text-[18px] text-ink leading-snug">
          {item.title}
        </h3>
        <p className="text-[13px] leading-[1.5] text-[#5F696A] mt-1 font-normal">
          {item.description}
        </p>
      </div>
    </article>
  )
}

export const TrustSection: React.FC = () => {
  return (
    <section
      id="confianca"
      aria-labelledby="confianca-title"
      className="relative w-full bg-white pt-8 pb-8 sm:pt-9 sm:pb-9 lg:pt-[36px] lg:pb-[36px]"
    >
      <div className="max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título compacto em linha única */}
        <div className="text-center max-w-[720px] mx-auto mb-5">
          <span className="inline-block text-[11px] sm:text-[12px] font-bold tracking-[0.20em] uppercase text-wine mb-1">
            CONFIANÇA
          </span>
          <h2
            id="confianca-title"
            className="font-serif font-medium text-ink leading-[1.1] tracking-tight text-[26px] sm:text-[30px] lg:text-[34px]"
          >
            Atendimento com clareza em cada etapa
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 lg:gap-5">
          {TRUST_CARDS.map((card, index) => (
            <TrustCard key={card.id} item={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
