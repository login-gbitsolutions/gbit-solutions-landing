import { ArrowLeft, MonitorDot, Shield, Activity, Bell, BarChart3, Server, CheckCircle, Cloud, Eye, Lock, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ServicePage.css';

const ServiceMonitoring = () => {
  const consultingFeatures = [
    {
      icon: MonitorDot,
      title: 'Implementação Zabbix',
      description: 'Instalação, configuração e customização completa do Zabbix para monitoramento de infraestrutura, aplicações e serviços.',
    },
    {
      icon: Shield,
      title: 'Implementação Wazuh',
      description: 'Deploy e configuração do Wazuh para SIEM, detecção de intrusão, compliance e monitoramento de segurança.',
    },
    {
      icon: BarChart3,
      title: 'Dashboards Grafana',
      description: 'Criação de dashboards personalizados no Grafana para visualização de métricas e KPIs em tempo real.',
    },
    {
      icon: Activity,
      title: 'Alertas Inteligentes',
      description: 'Configuração de alertas com escalações, supressão de falsos positivos e integração com ferramentas de comunicação.',
    },
    {
      icon: Server,
      title: 'Templates Customizados',
      description: 'Desenvolvimento de templates específicos para sua infraestrutura e aplicações.',
    },
    {
      icon: Bell,
      title: 'Treinamento',
      description: 'Capacitação da sua equipe para operar e administrar as ferramentas de monitoramento.',
    },
  ];

  const maasFeatures = [
    { icon: Cloud, title: 'Hospedado na AWS', desc: 'Alta disponibilidade e segurança em cloud' },
    { icon: Eye, title: 'Monitoramento 24/7', desc: 'Visibilidade completa dos seus ativos' },
    { icon: Lock, title: 'Dados Seguros', desc: 'Criptografia e isolamento de dados' },
    { icon: Cpu, title: 'Agent Leve', desc: 'Instalação simples e sem impacto' },
    { icon: BarChart3, title: 'Dashboards Customizados', desc: 'Visualização sob medida' },
    { icon: Bell, title: 'Alertas Configuráveis', desc: 'Notificações por email, SMS ou Telegram' },
  ];

  const maasSteps = [
    { step: '01', title: 'Contratação', desc: 'Escolha o plano ideal para sua necessidade' },
    { step: '02', title: 'Instalação', desc: 'Instale nosso agent nos seus servidores' },
    { step: '03', title: 'Configuração', desc: 'Customizamos o monitoramento para você' },
    { step: '04', title: 'Monitoramento', desc: 'Acesse seu dashboard e monitore tudo' },
  ];

  return (
    <div className="service-page">
      <Header />
      
      <main>
        <section className="service-hero monitoring-hero">
          <div className="service-hero-bg">
            <div className="hero-gradient"></div>
          </div>
          <div className="container">
            <Link to="/" className="back-link">
              <ArrowLeft size={20} />
              Voltar para Home
            </Link>
            
            <div className="service-hero-content">
              <div className="service-icon-large monitoring-icon">
                <MonitorDot size={48} />
              </div>
              <h1>Monitoramento & Observabilidade</h1>
              <p className="service-hero-description">
                Especialistas em Zabbix e Wazuh para apoiar sua empresa na implementação e 
                otimização desses sistemas. Ou use nosso Monitoramento como Serviço (MaaS) 
                totalmente gerenciado em cloud AWS.
              </p>
              <div className="service-hero-badges">
                <span className="badge">Zabbix</span>
                <span className="badge">Wazuh</span>
                <span className="badge">Grafana</span>
              </div>
            </div>
          </div>
        </section>

        <section className="service-features">
          <div className="container">
            <h2 className="section-title">Consultoria Zabbix & Wazuh</h2>
            <p className="section-subtitle">
              Apoiamos sua empresa na implementação, configuração e otimização de sistemas de monitoramento
            </p>
            
            <div className="features-grid">
              {consultingFeatures.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon monitoring-feature-icon">
                    <feature.icon size={28} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="maas-section">
          <div className="container">
            <div className="maas-header">
              <h2 className="section-title">Monitoramento como Serviço</h2>
              <p className="section-subtitle">
                Sistema de monitoramento totalmente customizado em cloud AWS. 
                Sua única ação é instalar nosso agent e acessar o dashboard.
              </p>
            </div>

            <div className="maas-features-grid">
              {maasFeatures.map((feature, index) => (
                <div key={index} className="maas-feature-card">
                  <feature.icon size={32} />
                  <h4>{feature.title}</h4>
                  <span>{feature.desc}</span>
                </div>
              ))}
            </div>

            <div className="maas-steps">
              <h3>Como Funciona</h3>
              <div className="steps-grid">
                {maasSteps.map((item, index) => (
                  <div key={index} className="maas-step">
                    <span className="step-number">{item.step}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="tools-section">
          <div className="container">
            <h2 className="section-title">Ferramentas que Trabalhamos</h2>
            <div className="tools-grid">
              <div className="tool-card">
                <div className="tool-icon zabbix">Z</div>
                <h4>Zabbix</h4>
                <p>Monitoramento de infraestrutura, aplicações, serviços, redes e muito mais.</p>
              </div>
              <div className="tool-card">
                <div className="tool-icon wazuh">W</div>
                <h4>Wazuh</h4>
                <p>SIEM, XDR, detecção de intrusão, vulnerability assessment e compliance.</p>
              </div>
              <div className="tool-card">
                <div className="tool-icon grafana">G</div>
                <h4>Grafana</h4>
                <p>Visualização de dados e métricas com dashboards interativos e alertas.</p>
              </div>
              <div className="tool-card">
                <div className="tool-icon graylog">GL</div>
                <h4>Graylog</h4>
                <p>Centralização, análise e correlação de logs para troubleshooting.</p>
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
                <span>Especialistas certificados em Zabbix e Wazuh</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Infraestrutura MaaS em cloud AWS com alta disponibilidade</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Dashboards personalizados para seu negócio</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Suporte técnico especializado</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Redução de falsos positivos em alertas</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Integração com suas ferramentas existentes</span>
              </div>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <div className="container">
            <div className="cta-card monitoring-cta">
              <h2>Quer visibilidade total da sua infraestrutura?</h2>
              <p>Conheça nosso Monitoramento como Serviço ou solicite uma consultoria</p>
              <div className="cta-buttons">
                <a href="/#contato" className="btn btn-primary">Fale com um Especialista</a>
                <a 
                  href="https://wa.me/5511992711715?text=Olá! Gostaria de saber mais sobre monitoramento com a GBIT Solutions."
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

export default ServiceMonitoring;