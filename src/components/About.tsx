import { Target, Users, Zap, Award } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { number: '100+', label: 'Projetos Entregues' },
    { number: '50+', label: 'Clientes Satisfeitos' },
    { number: '5+', label: 'Anos de Experiência' },
    { number: '24/7', label: 'Suporte Disponível' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Trabalhamos orientados a métricas e objetivos claros para entregar valor real ao seu negócio.',
    },
    {
      icon: Users,
      title: 'Parceria',
      description: 'Mais que fornecedores, somos parceiros estratégicos no crescimento da sua empresa.',
    },
    {
      icon: Zap,
      title: 'Agilidade',
      description: 'Metodologias ágeis para entregas rápidas sem comprometer a qualidade.',
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Compromisso com as melhores práticas e tecnologias do mercado.',
    },
  ];

  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <span className="section-tag">Sobre Nós</span>
            <h2 className="about-title">
              Transformamos desafios em
              <span className="highlight"> soluções tecnológicas</span>
            </h2>
            <p className="about-text">
              A <strong>GBIT Solutions</strong> é uma empresa de tecnologia da informação 
              especializada em infraestrutura em nuvem AWS, desenvolvimento de sistemas 
              e soluções de monitoramento.
            </p>
            <p className="about-text">
              Nossa missão é ajudar empresas a modernizarem sua infraestrutura de TI, 
              otimizando custos e aumentando a eficiência operacional através de 
              soluções personalizadas e suporte especializado.
            </p>
            
            <div className="about-values">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <div className="value-icon">
                    <value.icon size={20} />
                  </div>
                  <div className="value-content">
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-visual">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <div className="about-decoration">
              <div className="decoration-circle"></div>
              <div className="decoration-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;