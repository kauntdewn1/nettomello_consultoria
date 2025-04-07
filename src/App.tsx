import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Target, Brain, Layers, ChevronRight, ChevronLeft, X, CheckCircle, ArrowRight, Calendar } from 'lucide-react';

// ... (demais componentes omitidos para foco)

function FAQSection() {
  return (
    <section className="py-16 bg-dark/80 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-primary">❓ Dúvidas Frequentes</h2>

        <details className="mb-6">
          <summary className="font-semibold cursor-pointer">💬 Isso é uma mentoria?</summary>
          <p className="mt-2 text-white/70">Não. É uma consultoria estratégica com foco prático e individualizado, diretamente sobre o marketing e plano comercial do seu negócio.</p>
        </details>

        <details className="mb-6">
          <summary className="font-semibold cursor-pointer">💸 Tem custo?</summary>
          <p className="mt-2 text-white/70">Essa primeira conversa é gratuita. Caso identifiquemos juntos a necessidade de um plano mais profundo, isso será apresentado com clareza.</p>
        </details>

        <details className="mb-6">
          <summary className="font-semibold cursor-pointer">🧠 O que vou sair sabendo?</summary>
          <p className="mt-2 text-white/70">Você vai entender com clareza o que está travando o crescimento da sua empresa e quais os passos estratégicos para destravar seu marketing e vendas.</p>
        </details>

        <details className="mb-6">
          <summary className="font-semibold cursor-pointer">👥 E se eu já tiver equipe?</summary>
          <p className="mt-2 text-white/70">Ótimo! A consultoria vai alinhar seu time com metas reais e processos que funcionam, integrando marketing e comercial.</p>
        </details>

        <details>
          <summary className="font-semibold cursor-pointer">🚀 E se eu for iniciante?</summary>
          <p className="mt-2 text-white/70">Vamos estruturar uma base sólida, evitando erros comuns e desperdício de tempo e dinheiro logo no início.</p>
        </details>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    const initLandbot = () => {
      try {
        if (window.top === window.self) {
          if (!window.myLandbot) {
            const s = document.createElement('script');
            s.type = "module";
            s.async = true;
            s.addEventListener('load', () => {
              try {
                window.myLandbot = new window.Landbot.Popup({
                  configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2865095-06H9U884ALVNQ7E8/index.json',
                });
              } catch (error) {
                console.warn('Failed to initialize Landbot:', error);
              }
            });
            s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
            const x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          }
        }
      } catch (error) {
        console.warn('Error in Landbot initialization:', error);
      }
    };

    if (document.readyState === 'complete') {
      initLandbot();
    } else {
      window.addEventListener('load', initLandbot);
      return () => window.removeEventListener('load', initLandbot);
    }
  }, []);

  return (
    <div className="bg-dark min-h-screen">
      <Header />
      <Hero />
      <CountdownSection />
      <AboutSection />
      <BenefitsSection />
      <Flow360Section />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
