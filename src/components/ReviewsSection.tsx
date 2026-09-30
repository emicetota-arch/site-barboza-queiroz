import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Star, ExternalLink, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import reviewsData from '../data/google-reviews.json'

export interface GoogleReview {
  id: string
  author: string
  initial: string
  avatarBg: string
  rating: number
  date: string
  source: string
  quote: string
}

// Ícone oficial Google G para máxima credibilidade
export const GoogleGIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
)

export const ReviewCard: React.FC<{ review: GoogleReview }> = ({ review }) => {
  return (
    <article className="h-full flex flex-col justify-between bg-white rounded-[14px] p-5 sm:p-6 border border-wine/10 hover:border-wine/25 shadow-[0_2px_12px_rgba(38,54,56,0.03)] hover:shadow-[0_8px_24px_rgba(38,54,56,0.06)] transition-all duration-200 min-h-[220px]">
      <div>
        {/* Topo do Card: Autor + Avaliação */}
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Avatar com inicial em cor autêntica do Google */}
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0 shadow-sm select-none"
              style={{ backgroundColor: review.avatarBg }}
              aria-hidden="true"
            >
              {review.initial}
            </div>
            <div className="min-w-0">
              <p className="font-sans font-semibold text-[14px] text-ink truncate leading-tight">
                {review.author}
              </p>
              <p className="text-[11.5px] text-[#667071] mt-0.5 leading-none">
                {review.date}
              </p>
            </div>
          </div>

          {/* 5 Estrelas Douradas */}
          <div
            className="flex items-center gap-0.5 shrink-0"
            role="img"
            aria-label={`${review.rating} de 5 estrelas`}
          >
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-[15px] h-[15px] fill-[#F4B400] text-[#F4B400] shrink-0"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        {/* Depoimento Real do Cliente */}
        <blockquote className="font-sans text-[13.5px] sm:text-[14px] leading-[1.55] text-[#344143] font-normal relative">
          “{review.quote}”
        </blockquote>
      </div>

      {/* Rodapé: Selo Oficial do Google */}
      <div className="flex items-center justify-between border-t border-gray-100 mt-4 pt-3 text-[12px] text-[#667071]">
        <div className="flex items-center gap-1.5 font-medium">
          <Quote className="w-3.5 h-3.5 text-wine/70" aria-hidden="true" />
          <span>Avaliação verificada</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate font-medium">
          <GoogleGIcon className="w-4 h-4" />
          <span>Google</span>
        </div>
      </div>
    </article>
  )
}

export const ReviewsSection: React.FC = () => {
  const reviews: GoogleReview[] = reviewsData
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeDot, setActiveDot] = useState(0)

  // Atualiza o índice do indicador baseado na rolagem atual
  const handleScroll = useCallback(() => {
    if (!sliderRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
    const maxScroll = scrollWidth - clientWidth
    if (maxScroll <= 0) {
      setActiveDot(0)
      return
    }
    const ratio = scrollLeft / maxScroll
    const totalDots = 4
    const newDot = Math.min(totalDots - 1, Math.max(0, Math.round(ratio * (totalDots - 1))))
    setActiveDot(newDot)
  }, [])

  useEffect(() => {
    const el = sliderRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      el.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [handleScroll])

  const scrollPrev = () => {
    if (!sliderRef.current) return
    const el = sliderRef.current
    const scrollAmount = el.clientWidth * 0.85
    if (el.scrollLeft <= 15) {
      // Volta ao final em loop suave
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' })
    } else {
      el.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollNext = () => {
    if (!sliderRef.current) return
    const el = sliderRef.current
    const scrollAmount = el.clientWidth * 0.85
    if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 15) {
      // Volta ao início em loop suave
      el.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollToDot = (dotIndex: number) => {
    if (!sliderRef.current) return
    const el = sliderRef.current
    const maxScroll = el.scrollWidth - el.clientWidth
    const targetScroll = (maxScroll / 3) * dotIndex
    el.scrollTo({ left: targetScroll, behavior: 'smooth' })
    setActiveDot(dotIndex)
  }

  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Barboza Queiroz Advocacia Previdenciária',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      ratingCount: reviews.length.toString(),
      reviewCount: reviews.length.toString(),
    },
    review: reviews.slice(0, 5).map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating.toString(),
        bestRating: '5',
      },
      reviewBody: r.quote,
    })),
  }

  return (
    <section
      id="avaliacoes"
      aria-labelledby="avaliacoes-title"
      className="relative w-full bg-[#FCFAF8] pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-[48px] lg:pb-[52px] scroll-mt-20 sm:scroll-mt-24 overflow-hidden"
    >
      {/* Schema SEO JSON-LD Avaliações */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      {/* Âncora alternativa para compatibilidade */}
      <div id="depoimentos" className="sr-only" aria-hidden="true" />
      <div className="max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==================================================== */}
        {/* HEADER CENTRAL DA SEÇÃO                              */}
        {/* ==================================================== */}
        <div className="text-center max-w-[680px] mx-auto mb-6 sm:mb-7 lg:mb-8">
          {/* Eyebrow */}
          <div className="animate-fade-in-up [animation-delay:60ms]">
            <span className="inline-block text-[11px] sm:text-[12px] font-bold tracking-[0.20em] uppercase text-wine mb-1.5">
              AVALIAÇÕES
            </span>
          </div>

          {/* Título H2 */}
          <h2
            id="avaliacoes-title"
            className="animate-fade-in-up [animation-delay:120ms] font-serif font-medium text-ink leading-[1.08] tracking-tight mb-2 text-[30px] xs:text-[34px] sm:text-[38px] lg:text-[40px] xl:text-[42px]"
          >
            O que nossos clientes dizem
          </h2>

          {/* Subtítulo */}
          <p className="animate-fade-in-up [animation-delay:180ms] text-[12.5px] sm:text-[13px] md:text-[13.5px] lg:text-[14px] leading-snug text-[#556062] font-normal mx-auto max-w-[660px]">
            Avaliações reais publicadas no Google por pessoas e famílias atendidas pelo escritório.
          </p>
        </div>

        {/* ==================================================== */}
        {/* CARROSSEL COM BOTÕES LATERAIS (ESQUERDA E DIREITA)   */}
        {/* ==================================================== */}
        <div className="relative px-2 sm:px-5 lg:px-7">
          
          {/* BOTÃO ESQUERDA (Navegar anterior) */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Ver avaliações anteriores"
            className="absolute -left-1 sm:-left-2 lg:-left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E2C9D0] text-[#465456] hover:text-wine hover:border-wine hover:shadow-[0_6px_20px_rgba(136,61,82,0.20)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center shadow-md focus-ring"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.4]" aria-hidden="true" />
          </button>

          {/* SLIDER DE AVALIAÇÕES (Scroll suave + Touch swipe) */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 px-1 no-scrollbar"
            tabIndex={0}
            role="region"
            aria-label="Carrossel de avaliações do Google"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="w-[86%] sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-48px)/3)] shrink-0 flex-none snap-start h-auto"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* BOTÃO DIREITA (Navegar próxima) */}
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Ver próximas avaliações"
            className="absolute -right-1 sm:-right-2 lg:-right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#E2C9D0] text-[#465456] hover:text-wine hover:border-wine hover:shadow-[0_6px_20px_rgba(136,61,82,0.20)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center shadow-md focus-ring"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.4]" aria-hidden="true" />
          </button>
        </div>

        {/* PONTOS DE NAVEGAÇÃO (INDICADOR DE PÁGINAS) */}
        <div className="flex items-center justify-center gap-2 mt-4" aria-hidden="true">
          {[0, 1, 2, 3].map((dot) => (
            <button
              key={dot}
              type="button"
              onClick={() => scrollToDot(dot)}
              className={`h-2 rounded-full transition-all duration-250 ${
                activeDot === dot
                  ? 'w-6 bg-wine'
                  : 'w-2 bg-[#D1C3C6] hover:bg-[#B3A0A4]'
              }`}
              aria-label={`Ir para grupo de avaliações ${dot + 1}`}
            />
          ))}
        </div>

        {/* ==================================================== */}
        {/* LINK PARA CONFERIR DIRETAMENTE NO GOOGLE             */}
        {/* ==================================================== */}
        <div className="mt-6 text-center animate-fade-in-up [animation-delay:220ms]">
          <a
            href="https://share.google/Y6lnlgztp03EKtoxA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-white border border-wine/15 hover:border-wine/30 text-[#465456] hover:text-wine text-[13px] sm:text-[13.5px] font-medium shadow-[0_2px_8px_rgba(38,54,56,0.02)] hover:shadow-[0_4px_14px_rgba(136,61,82,0.08)] hover:-translate-y-[1px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40"
          >
            <GoogleGIcon className="w-4 h-4 shrink-0" />
            <span>Ver todas as avaliações no Google</span>
            <ExternalLink className="w-3.5 h-3.5 stroke-[1.8] text-wine/80 shrink-0" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  )
}
