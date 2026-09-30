import React from 'react'
import { LucideIcon, Plus } from 'lucide-react'

export interface ServiceItem {
  id: string
  title: string
  subtitle?: string
  description: string
  icon: LucideIcon
  href: string
}

export interface ServiceCardProps {
  service: ServiceItem
  index: number
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = service.icon
  const delay = Math.min(index * 30, 250)

  return (
    <a
      href={service.href}
      className="group relative flex flex-col justify-between bg-white rounded-[14px] p-4 xl:p-[18px] border border-wine/10 hover:border-wine/25 shadow-[0_2px_10px_rgba(38,54,56,0.02)] hover:shadow-[0_8px_22px_rgba(38,54,56,0.06)] transition-all duration-250 ease-out hover:-translate-y-[2px] focus-ring min-h-[128px] sm:min-h-[140px] lg:h-[150px] xl:h-[158px] animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Saiba mais sobre ${service.title}`}
    >
      {/* ICON CONTAINER */}
      <div className="w-[52px] h-[52px] xl:w-[58px] xl:h-[58px] rounded-full bg-[#F8E9EA] flex items-center justify-center text-wine shrink-0 group-hover:scale-105 transition-transform duration-200">
        <Icon className="w-[24px] h-[24px] xl:w-[26px] xl:h-[26px] stroke-[1.5]" aria-hidden="true" />
      </div>

      {/* BOTTOM ROW: TITLE + ACTION (+) */}
      <div className="flex items-end justify-between gap-2.5 mt-2 w-full">
        <div className="min-w-0 pr-1">
          <h3 className="font-sans font-semibold text-[13.5px] sm:text-[14px] xl:text-[14.5px] text-ink leading-[1.25] group-hover:text-wine transition-colors duration-200">
            {service.title}
          </h3>
          {service.subtitle && (
            <p className="text-[10.5px] sm:text-[11px] text-slate/80 font-normal leading-tight mt-0.5">
              {service.subtitle}
            </p>
          )}
        </div>

        {/* BUTTON (+) */}
        <div
          className="w-[30px] h-[30px] rounded-full border border-wine/20 bg-white flex items-center justify-center text-wine shrink-0 group-hover:bg-wine group-hover:text-white group-hover:border-wine transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          aria-hidden="true"
        >
          <Plus className="w-[15px] h-[15px] stroke-[2]" />
        </div>
      </div>
    </a>
  )
}
