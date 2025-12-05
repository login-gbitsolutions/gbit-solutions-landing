import { Cloud, Code, MonitorDot, Shield, Server, Gauge, ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const mainServices = [
    {
      icon: Cloud,
      title: 'Infraestrutura AWS',
      description: 'Arquitetura, migração e gestão completa de ambientes na nuvem Amazon Web Services. Otimize custos e maximize performance.',
      features: ['Arquitetura Cloud', 'Migração', 'Otimização de Custos', 'Alta Disponibilidade'],
      gradient: 'linear-gradient(135deg, #FF9900, #FF6600)',
      highlighted: true,
    },
    {
      icon: Code,
      title: 'Desenvolvimento de Sistemas',
      description: 'Desenvolvimento de aplicações web e mobile sob medida. Soluções escaláveis utilizando as mais modernas tecnologias do mercado.',
      features: ['Web Apps', 'APIs RESTful', 'Mobile Apps', 'Integrações'],
      gradient: 'linear-gradient(135deg, #74E0EF, #4FCAD8)',
      highlighted: true,
    },
  ];

  const secondaryServices = [
    {
      icon: MonitorDot,
      title: 'Monitoramento com Zabbix',
      description: 'Monitoramento completo de infraestrutura com dashboards personalizados e alertas inteligentes.',
    },
    {
      icon: Gauge,
      title: 'Visualização com Grafana',
      description: 'Dashboards e métricas em tempo real para análise de performance e tomada de decisões.',
    },
    {
      icon: Server,
      title: 'Logs com Graylog',
      description: 'Centralização e análise de logs para troubleshooting rápido e eficiente.',
    },
    {
      icon: Shield,
      title: 'Segurança com Wazuh',
      description: 'Detecção de ameaças, compliance e resposta a incidentes de segurança.',
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
            <p>Stack completa de ferramentas open-source para monitoramento profissional</p>
          </div>
          
          <div className="secondary-services">
            {secondaryServices.map((service, index) => (
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
      </div>
    </section>
  );
};

export default Services;