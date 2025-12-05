import { ArrowLeft, Cloud, Shield, DollarSign, Zap, Users, CalendarCheck, CheckCircle, Server, Database, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ServicePage.css';

const ServiceAWS = () => {
  const features = [
    {
      icon: Users,
      title: 'Administração de Conta',
      description: 'Gerenciamento completo da sua conta AWS, incluindo configuração de usuários IAM, políticas de acesso, billing e recursos organizacionais.',
    },
    {
      icon: Cloud,
      title: 'Solution Architect',
      description: 'Arquitetos de soluções certificados para projetar infraestruturas personalizadas, escaláveis e resilientes para seu negócio.',
    },
    {
      icon: DollarSign,
      title: 'Otimização de Custos',
      description: 'Análise detalhada de custos, rightsizing de instâncias, Reserved Instances, Savings Plans e recomendações para reduzir sua fatura AWS.',
    },
    {
      icon: Shield,
      title: 'Revisão de Arquitetura',
      description: 'Avaliação baseada nos 6 pilares do AWS Well-Architected Framework: excelência operacional, segurança, confiabilidade, eficiência, sustentabilidade e custo.',
    },
    {
      icon: Lock,
      title: 'Segurança em Cloud',
      description: 'Implementação de melhores práticas de segurança, compliance, criptografia, monitoramento de ameaças e proteção de dados.',
    },
    {
      icon: CalendarCheck,
      title: 'Event Prepare',
      description: 'Preparação completa do ambiente para grandes eventos como Black Friday, com acompanhamento em tempo real e relatório pós-evento.',
    },
  ];

  const awsServices = [
    { icon: Server, name: 'EC2', desc: 'Computação escalável' },
    { icon: Database, name: 'RDS', desc: 'Banco de dados gerenciado' },
    { icon: Globe, name: 'CloudFront', desc: 'CDN global' },
    { icon: Zap, name: 'Lambda', desc: 'Serverless computing' },
    { icon: Shield, name: 'WAF', desc: 'Firewall de aplicação' },
    { icon: Cloud, name: 'S3', desc: 'Armazenamento objeto' },
  ];

  const eventPrepareSteps = [
    { step: '01', title: 'Análise', desc: 'Avaliamos sua infraestrutura atual e necessidades do evento' },
    { step: '02', title: 'Preparação', desc: 'Escalamos recursos, configuramos auto-scaling e otimizamos performance' },
    { step: '03', title: 'Acompanhamento', desc: 'Monitoramento em tempo real durante todo o evento' },
    { step: '04', title: 'Relatório', desc: 'Análise pós-evento com métricas e recomendações' },
  ];

  return (
    <div className="service-page">
      <Header />
      
      <main>
        <section className="service-hero aws-hero">
          <div className="service-hero-bg">
            <div className="hero-gradient"></div>
          </div>
          <div className="container">
            <Link to="/" className="back-link">
              <ArrowLeft size={20} />
              Voltar para Home
            </Link>
            
            <div className="service-hero-content">
              <div className="service-icon-large aws-icon">
                <Cloud size={48} />
              </div>
              <h1>Infraestrutura AWS</h1>
              <p className="service-hero-description">
                Administração completa da sua conta e infraestrutura AWS. Solution Architects 
                dedicados para desenvolver soluções personalizadas, otimização de custos e 
                revisão de arquitetura baseada nos pilares AWS Well-Architected.
              </p>
              <div className="service-hero-badges">
                <span className="badge">AWS Partner</span>
                <span className="badge">Certified Architects</span>
                <span className="badge">24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        <section className="service-features">
          <div className="container">
            <h2 className="section-title">Nossos Serviços AWS</h2>
            <p className="section-subtitle">
              Cobertura completa para todas as necessidades da sua infraestrutura em nuvem
            </p>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">
                    <feature.icon size={28} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="aws-services-section">
          <div className="container">
            <h2 className="section-title">Serviços AWS que Gerenciamos</h2>
            <div className="aws-services-grid">
              {awsServices.map((service, index) => (
                <div key={index} className="aws-service-card">
                  <service.icon size={32} />
                  <h4>{service.name}</h4>
                  <span>{service.desc}</span>
                </div>
              ))}
            </div>
            <p className="aws-services-note">
              E muitos outros: EKS, ECS, Fargate, Aurora, DynamoDB, ElastiCache, SQS, SNS, API Gateway, Route 53, VPC, Direct Connect...
            </p>
          </div>
        </section>

        <section className="event-prepare-section">
          <div className="container">
            <div className="event-prepare-header">
              <CalendarCheck size={40} className="event-icon" />
              <h2>Event Prepare</h2>
              <p>Seu ambiente pronto para grandes eventos como Black Friday</p>
            </div>
            
            <div className="event-steps">
              {eventPrepareSteps.map((item, index) => (
                <div key={index} className="event-step">
                  <span className="step-number">{item.step}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="service-benefits">
          <div className="container">
            <h2 className="section-title">Por que escolher a GBIT?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Arquitetos certificados AWS com anos de experiência</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Redução média de 30% nos custos de infraestrutura</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Suporte técnico especializado 24/7</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Implementação de melhores práticas de segurança</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Migração sem downtime para a nuvem</span>
              </div>
              <div className="benefit-item">
                <CheckCircle size={24} />
                <span>Relatórios detalhados e transparentes</span>
              </div>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <div className="container">
            <div className="cta-card">
              <h2>Pronto para otimizar sua infraestrutura AWS?</h2>
              <p>Entre em contato e receba uma análise gratuita do seu ambiente</p>
              <div className="cta-buttons">
                <a href="/#contato" className="btn btn-primary">Fale com um Especialista</a>
                <a 
                  href="https://wa.me/5511992711715?text=Olá! Gostaria de saber mais sobre os serviços de infraestrutura AWS da GBIT Solutions."
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

export default ServiceAWS;