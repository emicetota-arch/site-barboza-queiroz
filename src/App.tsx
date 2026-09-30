import React, { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ServicesSection } from './components/ServicesSection'
import { AboutSection } from './components/AboutSection'
import { ProcessSection } from './components/ProcessSection'
import { TrustSection } from './components/TrustSection'
import { ReviewsSection } from './components/ReviewsSection'
import { FaqSection } from './components/FaqSection'
import { CtaSection } from './components/CtaSection'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'

export const App: React.FC = () => {
  useEffect(() => {
    const handleClearCaret = () => {
      requestAnimationFrame(() => {
        const active = document.activeElement
        if (
          active &&
          (active.tagName === 'INPUT' ||
            active.tagName === 'TEXTAREA' ||
            (active as HTMLElement).isContentEditable)
        ) {
          return
        }

        const sel = window.getSelection()
        // Remove apenas o cursor de inserção pontual (isCollapsed),
        // preservando 100% a seleção quando o usuário arrasta o mouse para copiar texto
        if (sel && sel.isCollapsed) {
          sel.removeAllRanges()
        }
      })
    }

    document.addEventListener('mouseup', handleClearCaret)
    document.addEventListener('click', handleClearCaret)
    return () => {
      document.removeEventListener('mouseup', handleClearCaret)
      document.removeEventListener('click', handleClearCaret)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-paper text-slate selection:bg-wine selection:text-white">
      {/* 1. Header / Navegação */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Dobra 01: Hero Principal + Faixa de Diferenciais */}
        <Hero />

        {/* Dobra 02: Áreas de Atuação / Serviços */}
        <ServicesSection />

        {/* Dobra 03: Sobre Nós */}
        <AboutSection />

        {/* Dobra 04: Como Trabalhamos / Processo */}
        <ProcessSection />

        {/* Dobra 05: Confiança / Prova Social Institucional */}
        <TrustSection />

        {/* Dobra 05B: Avaliações Reais do Google */}
        <ReviewsSection />

        {/* Dobra 06: Perguntas Frequentes / FAQ */}
        <FaqSection />

        {/* Dobra 07: CTA Final */}
        <CtaSection />
      </main>

      {/* Footer Completo */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  )
}

export default App

