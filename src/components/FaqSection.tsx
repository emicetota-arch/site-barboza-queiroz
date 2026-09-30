import React, { useState } from 'react'
import { Plus } from 'lucide-react'

export interface FaqItemData {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItemData[] = [
  {
    id: 'quem-tem-direito',
    question: 'Quem pode ter direito a um benefício do INSS?',
    answer:
      'O direito depende do benefício pretendido, do histórico contributivo, da qualidade de segurado e de outros requisitos previstos na legislação. A análise deve considerar as particularidades de cada caso.',
  },
  {
    id: 'beneficio-negado',
    question: 'Preciso ter um benefício negado antes de procurar orientação?',
    answer:
      'Não. A orientação previdenciária também pode ser buscada antes do requerimento administrativo, inclusive para conferência de documentos, análise das regras aplicáveis e organização das informações necessárias.',
  },
  {
    id: 'diferenca-regras',
    question: 'Qual a diferença entre aposentadoria por idade e as regras de contribuição?',
    answer:
      'As regras variam conforme o histórico previdenciário e a data em que os requisitos começaram a ser preenchidos. Após a Reforma da Previdência, existem regras permanentes e de transição que precisam ser analisadas individualmente.',
  },
  {
    id: 'tempo-analise',
    question: 'Quanto tempo demora a análise de um benefício?',
    answer:
      'O prazo pode variar de acordo com o tipo de benefício, a documentação apresentada, a análise do INSS e eventuais exigências ou recursos. Por isso, não é possível estabelecer um prazo único para todos os casos.',
  },
  {
    id: 'atendimento-regioes',
    question: 'O escritório atende clientes fora de Vila Velha e do Espírito Santo?',
    answer:
      'Sim. O atendimento pode ser realizado online, permitindo orientação previdenciária a clientes de diferentes localidades, além do atendimento presencial conforme disponibilidade do escritório.',
  },
  {
    id: 'como-funciona',
    question: 'Como funciona o primeiro atendimento?',
    answer:
      'No primeiro contato são levantadas as principais informações sobre o caso. A partir disso, a equipe pode orientar quais dados e documentos serão necessários para uma análise mais individualizada.',
  },
]

interface FaqItemProps {
  item: FaqItemData
  isOpen: boolean
  onToggle: () => void
}

export const FaqItem: React.FC<FaqItemProps> = ({ item, isOpen, onToggle }) => {
  const contentId = `faq-content-${item.id}`
  const buttonId = `faq-button-${item.id}`

  return (
    <div
      className={`rounded-[6px] transition-all duration-200 ease-out border ${
        isOpen
          ? 'bg-white border-[rgba(136,61,82,0.20)] shadow-[0_4px_16px_rgba(136,61,82,0.035)]'
          : 'bg-[rgba(255,255,255,0.78)] border-[rgba(136,61,82,0.10)] hover:border-[rgba(136,61,82,0.18)] hover:bg-white'
      }`}
    >
      <h3 className="m-0 p-0 text-inherit font-normal">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="w-full flex items-center justify-between text-left px-4 sm:px-[18px] py-2 min-h-[42px] sm:min-h-[40px] rounded-[6px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40 focus-visible:ring-offset-1 transition-colors"
        >
          <span className="font-sans font-medium text-[13.5px] sm:text-[14px] text-[#263638] leading-snug pr-3 select-none">
            {item.question}
          </span>
          <span
            className={`flex items-center justify-center w-5 h-5 shrink-0 text-[#883D52] transform transition-transform duration-200 ease-out ${
              isOpen ? 'rotate-45' : 'rotate-0'
            }`}
            aria-hidden="true"
          >
            <Plus className="w-[18px] h-[18px] stroke-[1.8]" />
          </span>
        </button>
      </h3>

      {/* Região da Resposta com animação suave de grid e opacity (sem layout shift) */}
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows,opacity] duration-[240ms] ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[13px] sm:text-[13.5px] leading-[1.58] text-[#60696A] px-4 sm:px-[18px] pb-3.5 pt-1 font-normal">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export const FaqSection: React.FC = () => {
  // Estado único: TODOS os itens fechados inicialmente por padrão
  const [openId, setOpenId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  // Schema SEO FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section
      id="duvidas"
      aria-labelledby="faq-title"
      className="relative w-full overflow-hidden scroll-mt-24"
      style={{ background: 'linear-gradient(90deg, #F6EEEE 0%, #F9F3F2 45%, #FCFAF8 100%)' }}
    >
      {/* Schema SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[52fr_48fr] items-stretch">

        {/* ESQUERDA: foto full-bleed + título integrado */}
        <div className="relative w-full min-h-[220px] xs:min-h-[240px] sm:min-h-[270px] lg:min-h-[340px] overflow-hidden">
          <img
            src="/assets/faq-atendimento-juridico.png"
            alt="Análise de documentos em atendimento jurídico previdenciário"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-[10%_center] xs:object-[12%_center] lg:object-[12%_center]"
            width="1024"
            height="768"
          />
          {/* Overlay com degradê suave: foto nítida à esquerda, fundo limpo à direita para o texto */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, rgba(252,250,248,0) 0%, rgba(252,250,248,0.10) 22%, rgba(250,244,243,0.80) 42%, #FAF4F3 58%, #FAF4F3 100%)',
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 h-full flex flex-col justify-center items-end pr-4 xs:pr-6 sm:pr-8 lg:pr-12 xl:pr-16 pl-4 py-6 sm:py-8">
            <div className="w-full max-w-[180px] xs:max-w-[210px] sm:max-w-[270px] lg:max-w-[300px] xl:max-w-[320px] text-left">
              <span className="block text-[10px] xs:text-[11px] sm:text-[12px] font-bold tracking-[0.16em] xs:tracking-[0.20em] uppercase text-wine mb-1.5 sm:mb-2">
                TIRE SUAS DÚVIDAS
              </span>
              <h2
                id="faq-title"
                className="font-serif font-medium text-ink leading-[1.04] tracking-tight text-[23px] xs:text-[27px] sm:text-[36px] lg:text-[44px] xl:text-[48px]"
              >
                Perguntas<br />frequentes
              </h2>
            </div>
          </div>
        </div>

        {/* DIREITA: accordion (6 itens, um aberto por vez) */}
        <div className="px-4 sm:px-6 py-8 lg:py-8 lg:pl-4 lg:pr-[max(32px,calc((100vw-1320px)/2+32px))] flex items-center">
          <div className="w-full flex flex-col space-y-[6px]">
            {FAQ_ITEMS.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
