import {
  UserRound,
  FileText,
  HardHat,
  UsersRound,
  HeartPulse,
  Bandage,
  Baby,
  HandHeart,
  ClipboardCheck,
  Accessibility,
  LucideIcon,
} from 'lucide-react'

export interface ServiceDefinition {
  id: string
  slug: string
  url: string
  title: string
  subtitle?: string
  description: string
  icon: LucideIcon
  href: string
  category: 'Aposentadoria' | 'Benefício Assistencial' | 'Benefício por Incapacidade' | 'Pensão e Família' | 'Revisão'
}

export const SERVICES_CATALOG: ServiceDefinition[] = [
  {
    id: 'aposentadoria-idade',
    slug: 'aposentadoria-por-idade',
    url: '/atuacao/aposentadoria-por-idade/',
    title: 'Aposentadoria por Idade',
    description: 'Análise detalhada de requisitos de idade mínima e carência conforme as regras vigentes do INSS.',
    icon: UserRound,
    href: '#contato',
    category: 'Aposentadoria',
  },
  {
    id: 'aposentadoria-tempo',
    slug: 'aposentadoria-por-tempo-de-contribuicao',
    url: '/atuacao/aposentadoria-por-tempo-de-contribuicao/',
    title: 'Aposentadoria por Tempo de Contribuição',
    description: 'Avaliação do histórico contributivo, cálculo de tempo de serviço e aplicação das melhores regras de transição.',
    icon: FileText,
    href: '#contato',
    category: 'Aposentadoria',
  },
  {
    id: 'aposentadoria-especial',
    slug: 'aposentadoria-especial',
    url: '/atuacao/aposentadoria-especial/',
    title: 'Aposentadoria Especial',
    description: 'Análise de atividade insalubre ou perigosa, comprovação por PPP e LTCAT e conversão de períodos especiais.',
    icon: HardHat,
    href: '#contato',
    category: 'Aposentadoria',
  },
  {
    id: 'bpc-loas',
    slug: 'bpc-loas',
    url: '/atuacao/bpc-loas/',
    title: 'BPC / LOAS',
    subtitle: '(Idoso e Pessoa com Deficiência)',
    description: 'Orientação técnica para benefício assistencial a idosos (65+) ou pessoas com deficiência em situação de vulnerabilidade.',
    icon: UsersRound,
    href: '#contato',
    category: 'Benefício Assistencial',
  },
  {
    id: 'auxilio-incapacidade-temporaria',
    slug: 'auxilio-por-incapacidade-temporaria',
    url: '/atuacao/auxilio-por-incapacidade-temporaria/',
    title: 'Auxílio por Incapacidade Temporária',
    subtitle: '(Auxílio-Doença)',
    description: 'Orientação jurídica sobre requisitos médicos, qualidade de segurado e perícia do INSS para incapacidade temporária.',
    icon: HeartPulse,
    href: '#contato',
    category: 'Benefício por Incapacidade',
  },
  {
    id: 'auxilio-acidente',
    slug: 'auxilio-acidente',
    url: '/atuacao/auxilio-acidente/',
    title: 'Auxílio-Acidente',
    description: 'Análise de situações com sequelas definitivas e redução da capacidade de trabalho após acidente ou doença.',
    icon: Bandage,
    href: '#contato',
    category: 'Benefício por Incapacidade',
  },
  {
    id: 'salario-maternidade',
    slug: 'salario-maternidade',
    url: '/atuacao/salario-maternidade/',
    title: 'Salário-Maternidade',
    description: 'Orientação sobre requisitos e documentação para seguradas empregadas, autônomas, desempregadas ou MEI.',
    icon: Baby,
    href: '#contato',
    category: 'Pensão e Família',
  },
  {
    id: 'pensao-morte',
    slug: 'pensao-por-morte',
    url: '/atuacao/pensao-por-morte/',
    title: 'Pensão por Morte',
    description: 'Análise de dependência econômica, união estável e requisitos legais para concessão da pensão por morte.',
    icon: HandHeart,
    href: '#contato',
    category: 'Pensão e Família',
  },
  {
    id: 'revisao-beneficios',
    slug: 'revisao-de-beneficios',
    url: '/atuacao/revisao-de-beneficios/',
    title: 'Revisão de Benefícios',
    description: 'Análise minuciosa da carta de concessão e CNIS para identificação de possíveis erros de cálculo pelo INSS.',
    icon: ClipboardCheck,
    href: '#contato',
    category: 'Revisão',
  },
  {
    id: 'aposentadoria-deficiencia',
    slug: 'aposentadoria-da-pessoa-com-deficiencia',
    url: '/atuacao/aposentadoria-da-pessoa-com-deficiencia/',
    title: 'Aposentadoria da Pessoa com Deficiência',
    description: 'Orientação sobre os critérios específicos de idade e tempo reduzido previstos na LC 142/2013.',
    icon: Accessibility,
    href: '#contato',
    category: 'Aposentadoria',
  },
]

