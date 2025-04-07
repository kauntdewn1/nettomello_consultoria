import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Target, Brain, Layers, ChevronRight, ChevronLeft, X, CheckCircle, ArrowRight, Calendar } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-dark/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img 
          src="https://res.cloudinary.com/dgyocpguk/image/upload/v1741878155/FlowOFF_Logo_ivgy0f_yx0jhk.png" 
          alt="FlowOFF Logo" 
          className="h-8"
        />
        
        <div className="hidden md:flex items-center">
          <motion.a 
            href="https://wa.me/+5562983231110?text=Oi%20Netto,%20vi%20sua%20página%20de%20consultoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 font-medium tracking-wide"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Falar com Netto agora no WhatsApp</span>
            <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Layers />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#home" className="text-white/80 hover:text-primary transition">Home</a>
            <a href="#services" className="text-white/80 hover:text-primary transition">Serviços</a>
            <a href="#testimonials" className="text-white/80 hover:text-primary transition">Clientes</a>
            <a href="#contact" className="text-white/80 hover:text-primary transition">Contato</a>
            <motion.a 
              href="https://wa.me/+5562983231110?text=Oi%20Netto,%20vi%20sua%20página%20de%20consultoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 font-medium tracking-wide"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Falar com Netto agora no WhatsApp</span>
              <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 fluid-animation text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dark/40 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Seu marketing não está trazendo o resultado que deveria?
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Uma consultoria estratégica com Netto Mello para transformar marketing em vendas — com clareza, método e plano de ação realista.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://wa.me/+5562983231110?text=Oi%20Netto,%20vi%20sua%20página%20de%20consultoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1 flex items-center gap-2 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Quero entender o que está travando meu negócio
                <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative animate-float"
          >
            <img 
              src="https://res.cloudinary.com/dgyocpguk/image/upload/v1742184224/NETTOFLOW293_o3ps8p.jpg"
              alt="Netto Mello"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PlaceholderSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-16 bg-dark/80 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Your content will go here */}
        </motion.div>
      </div>
    </section>
  );
}

function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState('');
  const [slotsLeft, setSlotsLeft] = useState(3);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    const endTime = localStorage.getItem('countdownEnd') || 
      new Date(Date.now() + 48 * 60 * 60 * 1000).getTime().toString();
    
    localStorage.setItem('countdownEnd', endTime);

    const updateTimer = () => {
      const now = new Date().getTime();
      const end = parseInt(endTime);
      const distance = end - now;

      if (distance <= 0) {
        setTimeLeft('ENCERRADO');
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    const timer = setInterval(updateTimer, 1000);
    updateTimer();

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="py-16 bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Oportunidade Limitada</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            📆 Últimas {slotsLeft} agendas abertas para conversas estratégicas nesta semana
          </h2>
          
          <p className="text-white/80 text-lg mb-8">
            Preencha agora e garanta análise direta com Netto Mello
          </p>

          <div className="bg-dark/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {timeLeft}
            </div>
            <p className="text-white/60">
              Tempo restante para garantir sua vaga
            </p>
          </div>

          <motion.a
            href="https://wa.me/+5562983231110?text=Oi%20Netto,%20vi%20sua%20página%20de%20consultoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-1 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quero garantir minha vaga
            <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-16 bg-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Conheça Netto Mello – Estrategista de marketing
            </h2>
            <p className="text-white/80 mb-6">
              Com ampla experiência em marketing digital e tecnologias emergentes,
              Netto Mello lidera a missão da FlowOFF de transformar negócios por meio de estratégias de marketing inovadoras.
              Seu domínio em gestão de equipes, IA, automação e abordagens baseadas em dados ajudou inúmeras empresas a alcançar
              crescimento no cenário digital.
            </p>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition"
            >
              <Play size={20} /> Assista: O poder da AUTENTICIDADE
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <img 
              src="https://res.cloudinary.com/dgyocpguk/image/upload/v1742184224/NETTOFLOW24_1_u79ctm.jpg"
              alt="Netto Mello Working"
              className="rounded-2xl shadow-lg relative z-10"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000 z-0"></div>
          </motion.div>
        </motion.div>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition"
            >
              <X size={24} />
            </button>
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/JQtXeuZUgaw"
              title="The Power of Authenticity"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}

function BenefitsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const benefits = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Estratégia liderada por um especialista",
      description: "Orientação estratégica com estrategista com anos e experiente com equipes de marketing."
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Otimização de IA e Big Data",
      description: "Estratégias baseadas em dados e alimentadas por inteligência artificial."
    },
    {
      icon: <Layers className="w-12 h-12 text-primary" />,
      title: "Alinhamento de Marketing e Comercial",
      description: "Abordagem unificada para maximizar o crescimento da receita."
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-dark/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Por que trabalhar conosco?</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-dark/80 p-6 rounded-xl shadow-lg border border-white/10"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <img 
        src="https://res.cloudinary.com/dgyocpguk/image/upload/v1741874385/FLOWOFF_ISOTIPO_2x_or5oyk.png"
        alt="FlowOFF Icon"
        className="absolute -right-20 -bottom-20 opacity-5 w-96"
      />
    </section>
  );
}

function Flow360Section() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-16 bg-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Flow 360 – Sua Solução Completa de Crescimento Digital
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-primary">🎯</div>
                <div>
                  <h3 className="font-bold text-white">Otimização do Funil de Vendas</h3>
                  <p className="text-white/80">Estratégias para alta conversão e banco de dados com leads.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-primary">🔄</div>
                <div>
                  <h3 className="font-bold text-white">Sistema de gestão de equipes</h3>
                  <p className="text-white/80">Automação e IA para ajudar gestores no monitoramento</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-primary">📈</div>
                <div>
                  <h3 className="font-bold text-white">Marketing Multicanal</h3>
                  <p className="text-white/80">Abordagem integrada em todos os pontos de contato digitais.</p>
                </div>
              </li>
            </ul>
            <a
              href="https://wa.me/+5562983231110?text=Oi%20Netto,%20vi%20sua%20página%20de%20consultoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/80 transition shadow-lg shadow-primary/20"
            >
              Comece hoje!
            </a>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <img 
              src="https://res.cloudinary.com/dgyocpguk/image/upload/v1741903838/fasdjfnasja_rrvryn.jpg"
              alt="Flow 360 Logo"
              className="rounded-2xl shadow-lg relative z-10"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000 z-0"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-16 bg-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Cliente Especial</h2>
        </motion.div>

        <div className="max-w-[400px] mx-auto">
          <div className="aspect-[9/16]">
            <video
              src="https://res.cloudinary.com/dgyocpguk/video/upload/v1742187364/rafael_g87y0f.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full h-full rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-16 bg-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Transformar Sua Estratégia de Marketing?</h2>
          <p className="text-xl text-white/80 mb-8">
            Agende uma reunião e descubra como posso impulsionar seu negócio.
          </p>
          <a
            href="https://wa.me/+5562983231110?text=Oi%20Netto,%20vi%20sua%20página%20de%20consultoria%20e%20quero%20entender%20se%20faz%20sentido%20pra%20mim."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-primary/80 transition shadow-lg shadow-primary/20"
          >
            Reserve Sua Sessão de Estratégia
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://res.cloudinary.com/dgyocpguk/image/upload/v1741878155/FlowOFF_Logo_ivgy0f_yx0jhk.png"
              alt="FlowOFF Logo"
              className="h-8 mb-4"
            />
            <p className="text-white/80">
              Transformando negócios por meio de estratégias de marketing inovadoras.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-primary transition">Home</a></li>
              <li><a href="#services" className="text-white/80 hover:text-primary transition">Serviços</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-primary transition">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-primary transition">Marketing Estratégico</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition">Flow 360</a></li>
              <li><a href="#" className="text-white/80 hover:text-primary transition">Consultoria</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Links</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-primary transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} FlowOFF. Todos direitos reservados.</p>
        </div>
      </div>
    </footer>
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
      <Footer />
    </div>
  );
}

export default App;