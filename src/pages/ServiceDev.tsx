import { ArrowLeft, Code, Smartphone, Globe, Database, RefreshCw, Layers, CheckCircle, Terminal, Palette, Server, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ServicePage.css';

const ServiceDev = () => {
  const features = [
    {
      icon: Code,
      title: 'React & Node.js',
      description: 'Desenvolvimento de aplicações web modernas com React no frontend e Node.js no backend. APIs RESTful e GraphQL com alta performance.',
    },
    {
      icon: Smartphone,
      title: 'Apps Android/iOS',
      description: 'Aplicativos nativos para Android (Kotlin/Java) e iOS (Swift) ou híbridos com React Native, entregando a melhor experiência ao usuário.',
    },
    {
      icon: Layers,
      title: 'React Native',
      description: 'Desenvolvimento multiplataforma com uma única base de código. Apps nativos para Android e iOS com excelente performance.',
    },
    {
      icon: Globe,
      title: 'PWA',
      description: 'Progressive Web Apps que funcionam offline, são instaláveis e oferecem experiência similar a apps nativos, direto do navegador.',
    },
    {
      icon: Terminal,
      title: 'PHP & Java',
      description: 'Desenvolvimento e manutenção de sistemas em PHP (Laravel, Symfony) e Java (Spring Boot), incluindo sistemas corporativos complexos.',
    },
    {
      icon: RefreshCw,
      title: 'Migração de Legados',
      description: 'Modernização de sistemas legados para tecnologias atuais, garantindo continuidade dos negócios e evolução gradual.',
    },
  ];

  const technologies = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'PHP/Laravel', 'Java/Spring'] },
    { category: 'Mobile', items: ['React Native', 'Kotlin', 'Swift', 'Flutter'] },
    { category: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase'] },
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'Entendemos seu negócio, objetivos e desafios técnicos' },
    { step: '02', title: 'Planejamento', desc: 'Definimos arquitetura, tecnologias e cronograma' },
    { step: '03', title: 'Desenvolvimento', desc: 'Sprints ágeis com entregas incrementais e feedback contínuo' },
    { step: '04', title: 'Deploy & Suporte', desc: 'Publicação em produção e suporte técnico contínuo' },
  ];

  return (
    <div className="service-page">
      <Header />
      
      <main>
        <section className="service-hero dev-hero">
          <div className="service-hero-bg">
            <div className="hero-gradient"></div>
          </div>
          <div className="container">
            <Link to="/" className="back-link">
              <ArrowLeft size={20} />
              Voltar para Home
            </Link>
            
            <div className="service-hero-content">
              <div className="service-icon-large dev-icon">
                <Code size={48} />
              </div>
              <h1>Desenvolvimento de Sistemas</h1>
              <p className="service-hero-description">
                Especialistas em desenvolvimento web com React, Node.js e Vite. 
                Também desenvolvemos aplicativos Android e iOS com React Native ou 
                linguagens nativas, além de PWAs e sistemas em PHP e Java.
              </p>
              <div className="service-hero-badges">
                <span className="badge">Web Apps</span>
                <span className="badge">Mobile Apps</span>
                <span className="badge">PWA</span>
              </div>
            </div>
          </div>
        </section>

        <section className="service-features">
          <div className="container">
            <h2 className="section-title">O que Desenvolvemos</h2>
            <p className="section-subtitle">
              Soluções sob medida para web, mobile e sistemas corporativos
            </p>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon dev-feature-icon">
                    <feature.icon size={28} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tech-stack-section">
          <div className="container">
            <h2 className="section-title">Stack Tecnológico</h2>
            <div className="tech-stack-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-stack-card">
                  <h4>{tech.category}</h4>
                  <ul>
                    {tech.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="container">
            <h2 className="section-title">Nosso Processo</h2>
            <p className="section-subtitle">
              Metodologia ágil para entregas rápidas e com qualidade
            </p>
            
            <div className="process-steps">
              {processSteps.map((item, index) => (
                <div key={index} className="process-step">
                  <span className="step-number">{item.step}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="migration-section">
          <div className="container">
            <div className="migration-card">
              <div className="migration-icon">
                <RefreshCw size={40} />
              </div>
              <div className="migration-content">
                <h3>Migração de Sistemas Legados</h3>
                <p>
                  Modernize seus sistemas antigos sem interromper os negócios. Realizamos migrações 
                  graduais de tecnologias legadas para stacks modernas, preservando a lógica de 
                  negócio e melhorando performance, segurança e manutenibilidade.
                </p>
                <ul className="migration-features">
                  <li><CheckCircle size={18} /> Análise de código e arquitetura existente</li>
                  <li><CheckCircle size={18} /> Planejamento de migração em fases</li>
                  <li><CheckCircle size={18} /> Testes automatizados para garantir compatibilidade</li>
                  <li><CheckCircle size={18} /> Zero downtime durante a transição</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="service-benefits">
          <div className="container">
            <h2 className="section-title">Por que escolher a GBIT?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Desenvolvedores sêniores com mais de 5 anos de experiência</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Código limpo, testado e documentado</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Metodologia ágil com entregas semanais</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Comunicação transparente e relatórios de progresso</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Suporte e manutenção após entrega</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Infraestrutura em cloud AWS incluída</span>
              </div>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <div className="container">
            <div className="cta-card dev-cta">
              <h2>Tem um projeto em mente?</h2>
              <p>Conte-nos sobre sua ideia e receba um orçamento personalizado</p>
              <div className="cta-buttons">
                <a href="/#contato" className="btn btn-primary">Solicitar Orçamento</a>
                <a 
                  href="https://wa.me/5511992711715?text=Olá! Gostaria de saber mais sobre desenvolvimento de sistemas com a GBIT Solutions."
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDev;