import { Cloud, Code, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Transformando negócios através da tecnologia
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Soluções</span>
            <span className="title-line highlight">Completas</span>
            <span className="title-line">em TI</span>
          </h1>
          
          <p className="hero-description">
            Especialistas em <strong>infraestrutura AWS</strong>, <strong>desenvolvimento de sistemas</strong> 
            e <strong>monitoramento de TI</strong>. Impulsione seu negócio com tecnologia de ponta.
          </p>
          
          <div className="hero-features">
            <div className="hero-feature">
              <Cloud className="feature-icon" />
              <span>Cloud AWS</span>
            </div>
            <div className="hero-feature">
              <Code className="feature-icon" />
              <span>Desenvolvimento</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <a href="#contato" className="btn btn-primary">
              Fale com um Especialista
              <ArrowRight size={18} />
            </a>
            <a href="#servicos" className="btn btn-secondary">
              Conheça nossos serviços
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-container">
            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>
            <div className="orbit orbit-3"></div>
            <div className="center-logo">
              <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="80" cy="80" r="45" stroke="#7A63FF" strokeWidth="3" fill="none" />
                <path d="M 80 20 A 60 60 0 0 1 130 50" stroke="#7A63FF" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M 140 80 A 60 60 0 0 1 120 130" stroke="#7A63FF" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M 100 145 A 60 60 0 0 1 40 135" stroke="#7A63FF" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M 25 110 A 60 60 0 0 1 25 50" stroke="#7A63FF" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M 40 30 A 60 60 0 0 1 70 20" stroke="#7A63FF" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <div className="floating-icon icon-aws">
              <svg viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#FF9900" fillOpacity="0.1"/>
                <path d="M12 25c0 1 .5 2 2 2.5v-5c-1.5.5-2 1.5-2 2.5z" fill="#FF9900"/>
                <path d="M20 12l-6 4v8l6 4 6-4v-8l-6-4z" stroke="#FF9900" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <div className="floating-icon icon-code">
              <svg viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#74E0EF" fillOpacity="0.1"/>
                <path d="M15 14l-5 6 5 6M25 14l5 6-5 6M18 28l4-16" stroke="#74E0EF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="floating-icon icon-monitor">
              <svg viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="#EF75FD" fillOpacity="0.1"/>
                <rect x="8" y="10" width="24" height="16" rx="2" stroke="#EF75FD" strokeWidth="1.5" fill="none"/>
                <path d="M12 30h16M20 26v4" stroke="#EF75FD" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <span>Role para explorar</span>
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;