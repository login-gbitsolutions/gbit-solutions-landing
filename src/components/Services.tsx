import { Cloud, Code, MonitorDot, Shield, Sparkles, ArrowRight, CalendarCheck, Smartphone, Globe, Settings } from 'lucide-react';
import './Services.css';

const Services = () => {
  const mainServices = [
    {
      icon: Cloud,
      title: 'Infraestrutura AWS',
      description: 'Administração completa da sua conta e infraestrutura AWS. Solution Architects dedicados para desenvolver soluções personalizadas, otimização de custos e revisão de arquitetura baseada nos pilares AWS Well-Architected.',
      features: [
        'Administração de Conta',
        'Solution Architect',
        'Otimização de Custos',
        'Revisão de Arquitetura',
        'Segurança em Cloud',
        'Event Prepare'
      ],
      gradient: 'linear-gradient(135deg, #FF9900, #FF6600)',
      highlighted: true,
      extra: 'Com nosso serviço Event Prepare, preparamos seu ambiente para grandes eventos como Black Friday, acompanhamos durante o evento e geramos relatório pós-evento.',
    },
    {
      icon: Code,
      title: 'Desenvolvimento de Sistemas',
      description: 'Especialistas em desenvolvimento web com React, Node.js e Vite. Também desenvolvemos aplicativos Android e iOS com React Native ou linguagens nativas, além de PWAs e sistemas em PHP e Java.',
      features: [
        'React & Node.js',
        'Apps Android/iOS',
        'React Native',
        'PWA',
        'PHP & Java',
        'Migração de Legados'
      ],
      gradient: 'linear-gradient(135deg, #74E0EF, #4FCAD8)',
      highlighted: true,
      extra: 'Realizamos migrações de sistemas legados para tecnologias modernas, garantindo continuidade e evolução do seu negócio.',
    },
  ];

  const monitoringServices = [
    {
      icon: MonitorDot,
      title: 'Consultoria Zabbix & Wazuh',
      description: 'Especialistas em Zabbix e Wazuh para apoiar sua empresa na implementação, configuração e otimização desses sistemas de monitoramento.',
    },
    {
      icon: Shield,
      title: 'Monitoramento como Serviço',
      description: 'Sistema de monitoramento totalmente customizado em cloud AWS. Instale nosso agent, acesse o dashboard e monitore seus ativos com toda segurança e disponibilidade.',
    },
  ];

  const additionalServices = [
    {
      icon: CalendarCheck,
      title: 'Event Prepare',
      description: 'Preparação completa do seu ambiente para grandes eventos. Acompanhamento durante o evento e relatório detalhado pós-evento.',
    },
    {
      icon: Smartphone,
      title: 'Apps Mobile',
      description: 'Desenvolvimento de aplicativos nativos ou híbridos para Android e iOS com a melhor experiência do usuário.',
    },
    {
      icon: Globe,
      title: 'PWA',
      description: 'Progressive Web Apps que funcionam offline, são instaláveis e oferecem experiência similar a apps nativos.',
    },
    {
      icon: Settings,
      title: 'Serviços Personalizados',
      description: 'Desenvolvemos soluções sob medida para necessidades específicas do seu negócio. Consulte disponibilidade.',
    },
  ];

  return (
    <section id="servicos" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">O que fazemos</span>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-description">
            Soluções completas de TI para impulsionar o crescimento do seu negócio
          </p>
        </div>

        <div className="main-services">
          {mainServices.map((service, index) => (
            <div key={index} className={`service-card main ${service.highlighted ? 'highlighted' : ''}`}>
              <div className="service-icon" style={{ background: service.gradient }}>
                <service.icon size={28} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {service.extra && (
                <p className="service-extra">{service.extra}</p>
              )}
              <a href="#contato" className="service-cta">
                Saiba mais
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="monitoring-section">
          <div className="monitoring-header">
            <h3>Monitoramento & Observabilidade</h3>
            <p>Especialistas em Zabbix e Wazuh ou use nosso Monitoramento como Serviço em cloud AWS</p>
          </div>
          
          <div className="monitoring-services">
            {monitoringServices.map((service, index) => (
              <div key={index} className="service-card monitoring">
                <div className="service-icon-medium">
                  <service.icon size={28} />
                </div>
                <h4 className="service-title-medium">{service.title}</h4>
                <p className="service-description-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="additional-section">
          <div className="monitoring-header">
            <h3>Mais Serviços</h3>
            <p>Soluções adicionais para atender todas as necessidades do seu negócio</p>
          </div>
          
          <div className="secondary-services">
            {additionalServices.map((service, index) => (
              <div key={index} className="service-card secondary">
                <div className="service-icon-small">
                  <service.icon size={24} />
                </div>
                <h4 className="service-title-small">{service.title}</h4>
                <p className="service-description-small">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="custom-services-cta">
          <Sparkles size={32} className="cta-icon" />
          <div className="cta-content">
            <h3>Precisa de algo específico?</h3>
            <p>Desenvolvemos soluções personalizadas para necessidades únicas. Nossa equipe de especialistas está pronta para entender seu desafio e criar a solução ideal.</p>
          </div>
          <a href="#contato" className="btn btn-primary">
            Fale Conosco
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;