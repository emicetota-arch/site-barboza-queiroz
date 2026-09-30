import React from 'react'
import { WhatsAppIcon } from './Header'

const WHATSAPP_URL =
  'https://wa.me/5527999082243?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Barboza%20Queiroz%20Advocacia%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20previdenci%C3%A1rio.'

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido pelo WhatsApp" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Barboza Queiroz pelo WhatsApp"
        className="group relative flex items-center justify-center w-[52px] h-[52px] sm:w-[54px] sm:h-[54px] rounded-full bg-[#883D52] hover:bg-[#723243] text-white shadow-[0_4px_22px_rgba(136,61,82,0.42)] hover:shadow-[0_6px_28px_rgba(136,61,82,0.55)] hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-wine/30"
      >
        <WhatsAppIcon className="w-7 h-7 fill-white" />

        {/* Tooltip flutuante discreto visível apenas em telas maiores no hover */}
        <span
          role="tooltip"
          className="absolute right-full mr-3.5 px-3 py-1.5 rounded-[6px] bg-[#263638] text-white text-[12px] font-medium whitespace-nowrap shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 hidden sm:inline-block"
        >
          Fale pelo WhatsApp
        </span>
      </a>
    </aside>
  )
}
