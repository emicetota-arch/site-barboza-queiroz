import React from 'react'
import { UserRound, Scale, ShieldCheck } from 'lucide-react'

export interface DifferentialsProps {
  className?: string
}

// Ícones soltos sem círculo em volta, estilo refinado e traço levemente negrito
export const Differentials: React.FC<DifferentialsProps> = ({ className = '' }) => {
  const items = [
    { icon: UserRound, line1: 'Atendimento', line2: 'humanizado', ariaLabel: 'Diferencial: Atendimento humanizado' },
    { icon: Scale, line1: 'Estratégia jurídica', line2: 'para o seu caso', ariaLabel: 'Diferencial: Estratégia jurídica para o seu caso' },
    { icon: ShieldCheck, line1: 'Acompanhamento', line2: 'do início ao fim', ariaLabel: 'Diferencial: Acompanhamento do início ao fim' },
  ]

  return (
    <div className={`w-full ${className}`} role="region" aria-label="Diferenciais do escritório">
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-x-9 gap-y-3">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.line1} className="flex items-center gap-3.5 min-w-0" aria-label={item.ariaLabel}>
              <div className="w-[44px] h-[44px] xl:w-[48px] xl:h-[48px] flex items-center justify-center text-wine shrink-0">
                <Icon className="w-[34px] h-[34px] xl:w-[38px] xl:h-[38px] stroke-[1.8]" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <p className="text-[13px] xl:text-[13.5px] font-normal text-[#465456] leading-[1.3]">
                <span className="block whitespace-nowrap">{item.line1}</span>
                <span className="block whitespace-nowrap">{item.line2}</span>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
