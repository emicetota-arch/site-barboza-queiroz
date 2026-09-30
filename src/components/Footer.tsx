import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

// Authentic Instagram SVG icon
export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  // SEO Organization / LocalBusiness / LegalService Schema
  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'Attorney'],
    name: 'Barboza Queiroz Advocacia Previdenciária',
    alternateName: [
      'Barbosa Queiroz Advocacia Previdenciária',
      'Barboza Queiroz Advocacia',
      'Barbosa Queiroz Advocacia',
      'Dra. Gabrielle Barboza Queiroz',
    ],
    description:
      'Escritório de advocacia previdenciária em Vitória e Vila Velha – ES especializado em aposentadorias, BPC/LOAS e benefícios do INSS. Atendimento presencial e online.',
    url: 'https://barbozaqueirozadvocacia.com.br/',
    logo: 'https://barbozaqueirozadvocacia.com.br/assets/logo-barboza-queiroz.png',
    image: 'https://barbozaqueirozadvocacia.com.br/assets/dra-gabrielle-sobre.png',
    telephone: '+5527999082243',
    email: 'contato@barbozaqueiroz.com',
    priceRange: '$$',
    currenciesAccepted: 'BRL',
    paymentAccepted: 'Dinheiro, Cartão de Crédito, Transferência Bancária, PIX',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rod. do Sol, 2780, Itaparica Top Business, sala 905',
      addressLocality: 'Vila Velha',
      addressRegion: 'ES',
      postalCode: '29102-020',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -20.3705,
      longitude: -40.3012,
    },
    areaServed: [
      { '@type': 'City', name: 'Vila Velha' },
      { '@type': 'City', name: 'Vitória' },
      { '@type': 'City', name: 'Serra' },
      { '@type': 'City', name: 'Cariacica' },
      { '@type': 'AdministrativeArea', name: 'Espírito Santo' },
      { '@type': 'Country', name: 'Brasil' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços em Direito Previdenciário',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aposentadoria por Idade' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aposentadoria por Tempo de Contribuição' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aposentadoria Especial' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'BPC / LOAS (Idoso e Pessoa com Deficiência)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auxílio por Incapacidade Temporária (Auxílio-Doença)' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auxílio-Acidente' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Salário-Maternidade' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pensão por Morte' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Revisão de Benefícios' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aposentadoria da Pessoa com Deficiência' } },
      ],
    },
    founder: {
      '@type': 'Person',
      name: 'Gabrielle Barboza Queiroz',
      jobTitle: 'Advogada Previdenciária',
      identifier: 'OAB/ES 27.291',
      sameAs: ['https://www.instagram.com/gabriellebarboza.adv/'],
    },
    sameAs: ['https://www.instagram.com/gabriellebarboza.adv/'],
  }

  return (
    <footer className="relative w-full bg-white text-slate pt-8 pb-5 sm:pt-9 sm:pb-6 border-t border-slate/10">
      {/* Schema SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />

      <div className="max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ==================================================== */}
        {/* GRID PRINCIPAL: 4 COLUNAS                            */}
        {/* Mobile order: Marca -> Contato -> Links -> Redes      */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 pb-6">
          
          {/* -------------------------------------------------- */}
          {/* COLUNA 1: MARCA INSTITUCIONAL (order-1)            */}
          {/* -------------------------------------------------- */}
          <div className="order-1 lg:col-span-4 flex flex-col items-start">
            <a
              href="#inicio"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40 rounded-sm"
              aria-label="Barboza Queiroz Advocacia - Voltar ao início"
            >
              <img
                src="/assets/logo-bq-symbol.png"
                alt="Símbolo Barboza Queiroz"
                width={56}
                height={56}
                className="w-14 h-14 object-contain shrink-0 group-hover:opacity-90 transition-opacity"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-ink text-[16.5px] tracking-[0.14em] uppercase leading-tight">
                  BARBOZA QUEIROZ
                </span>
                <span className="text-[10px] tracking-[0.24em] text-wine font-semibold uppercase mt-0.5">
                  ADVOCACIA PREVIDENCIÁRIA
                </span>
              </div>
            </a>

            <p className="text-[13px] leading-relaxed text-[#5F696A] italic mt-3 font-normal">
              O seu direito previdenciário em mãos seguras.
            </p>

            <div className="mt-3.5 pt-3 border-t border-slate/10 w-full max-w-[260px]">
              <p className="text-[12px] text-[#788283] font-medium leading-snug">
                Dra. Gabrielle Barboza Queiroz
              </p>
              <p className="text-[11.5px] text-[#788283] tracking-wide">
                OAB/ES 27.291
              </p>
            </div>
          </div>

          {/* -------------------------------------------------- */}
          {/* COLUNA 2: LINKS RÁPIDOS                            */}
          {/* -------------------------------------------------- */}
          <div className="order-3 md:order-2 lg:col-span-2">
            <h3 className="font-sans font-semibold text-[13.5px] text-ink mb-3">
              Links Rápidos
            </h3>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[13px]">
              <div className="flex flex-col space-y-2">
                <a
                  href="#inicio"
                  className="text-[#5F696A] hover:text-wine transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40 rounded-sm"
                >
                  Início
                </a>
                <a
                  href="#atuacao"
                  className="text-[#5F696A] hover:text-wine transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40 rounded-sm"
                >
                  Atuação
                </a>
                <a
                  href="#escritorio"
                  className="text-[#5F696A] hover:text-wine transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40 rounded-sm"
                >
                  O Escritório
                </a>
                <a
                  href="#processo"
                  className="text-[#5F696A] hover:text-wine transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40 rounded-sm"
                >
                  Como Funciona
                </a>
              </div>

              <div className="flex flex-col space-y-2">
                <a
                  href="#avaliacoes"
                  className="text-[#5F696A] hover:text-wine transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40 rounded-sm"
                >
                  Avaliações
                </a>
                <a
                  href="#duvidas"
                  className="text-[#5F696A] hover:text-wine transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40 rounded-sm"
                >
                  Dúvidas
                </a>
                <a
                  href="#contato"
                  className="text-[#5F696A] hover:text-wine transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40 rounded-sm"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------- */}
          {/* COLUNA 3: CONTATO                                  */}
          {/* -------------------------------------------------- */}
          <div className="order-2 md:order-3 lg:col-span-3">
            <h3 className="font-sans font-semibold text-[13.5px] text-ink mb-3">
              Contato
            </h3>

            <div className="flex flex-col space-y-2.5 text-[13px] text-[#5F696A]">
              {/* Telefone */}
              <a
                href="tel:+5527999082243"
                className="flex items-center gap-2.5 hover:text-wine transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40 rounded-sm"
              >
                <div className="w-6 h-6 rounded-full bg-wine/[0.08] flex items-center justify-center shrink-0 text-wine group-hover:bg-wine/15 transition-colors">
                  <Phone className="w-3.5 h-3.5 stroke-[2]" aria-hidden="true" />
                </div>
                <span className="font-medium">+55 (27) 99908-2243</span>
              </a>

              {/* E-mail */}
              <a
                href="mailto:contato@barbozaqueiroz.com"
                className="flex items-center gap-2.5 hover:text-wine transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40 rounded-sm"
              >
                <div className="w-6 h-6 rounded-full bg-wine/[0.08] flex items-center justify-center shrink-0 text-wine group-hover:bg-wine/15 transition-colors">
                  <Mail className="w-3.5 h-3.5 stroke-[2]" aria-hidden="true" />
                </div>
                <span className="truncate">contato@barbozaqueiroz.com</span>
              </a>

              {/* Endereço */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rod.+do+Sol+2780+Itaparica+Top+Business+Vila+Velha+ES"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-wine transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40 rounded-sm pt-0.5"
              >
                <div className="w-6 h-6 rounded-full bg-wine/[0.08] flex items-center justify-center shrink-0 text-wine group-hover:bg-wine/15 transition-colors mt-0.5">
                  <MapPin className="w-3.5 h-3.5 stroke-[2]" aria-hidden="true" />
                </div>
                <span className="leading-snug text-[#5F696A] group-hover:text-wine transition-colors">
                  Rod. do Sol, 2780, Itaparica Top Business, sala 905<br />
                  Praia de Itaparica, Vila Velha - ES<br />
                  CEP 29102-020
                </span>
              </a>
            </div>
          </div>

          {/* -------------------------------------------------- */}
          {/* COLUNA 4: REDES SOCIAIS E ATENDIMENTO              */}
          {/* -------------------------------------------------- */}
          <div className="order-4 md:order-4 lg:col-span-3">
            <h3 className="font-sans font-semibold text-[13.5px] text-ink mb-3">
              Acompanhe nosso trabalho
            </h3>

            {/* Instagram Oficial */}
            <div className="mb-4">
              <a
                href="https://www.instagram.com/gabriellebarboza.adv/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3 py-2 rounded-[8px] bg-wine/[0.06] hover:bg-wine/[0.12] text-wine hover:text-[#723243] font-medium text-[13px] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40"
              >
                <InstagramIcon className="w-4 h-4 fill-current shrink-0" />
                <span>@gabriellebarboza.adv</span>
              </a>
            </div>

            {/* Bloco de Localização Institucional */}
            <div className="bg-[#FCFAF8] border border-wine/[0.10] rounded-[8px] p-3 text-[12.5px] leading-snug text-[#5F696A]">
              <div className="flex items-center gap-1.5 font-semibold text-ink mb-1">
                <MapPin className="w-3.5 h-3.5 text-wine shrink-0 stroke-[2]" aria-hidden="true" />
                <span>Atendimento Presencial e Online</span>
              </div>
              <p className="text-[12px] text-[#60696A]">
                Presencial em Vila Velha - ES e atendimento digital para clientes em todo o território nacional.
              </p>
            </div>
          </div>

        </div>

        {/* ==================================================== */}
        {/* LINHA INFERIOR LEGAL                                 */}
        {/* ==================================================== */}
        <div className="border-t border-[#465456]/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] sm:text-[12.5px] text-[#788283]">
          <p className="text-center sm:text-left">
            © {currentYear} Barboza Queiroz Advocacia Previdenciária. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-3 text-[12px] text-[#788283]">
            <span className="hover:text-wine transition-colors cursor-default">
              Privacidade
            </span>
            <span aria-hidden="true" className="text-slate/30">•</span>
            <span className="hover:text-wine transition-colors cursor-default">
              Termos de Uso
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
