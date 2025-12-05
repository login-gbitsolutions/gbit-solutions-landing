import './Technologies.css';

const Technologies = () => {
  const technologies = [
    {
      category: 'Cloud AWS',
      items: [
        { name: 'EC2', description: 'Computação' },
        { name: 'S3', description: 'Armazenamento' },
        { name: 'RDS', description: 'Banco de Dados' },
        { name: 'Lambda', description: 'Serverless' },
        { name: 'CloudFront', description: 'CDN' },
        { name: 'EKS', description: 'Kubernetes' },
      ],
    },
    {
      category: 'Desenvolvimento',
      items: [
        { name: 'React', description: 'Frontend' },
        { name: 'Node.js', description: 'Backend' },
        { name: 'TypeScript', description: 'Linguagem' },
        { name: 'Python', description: 'Automação' },
        { name: 'PostgreSQL', description: 'Banco de Dados' },
        { name: 'Docker', description: 'Containers' },
      ],
    },
    {
      category: 'Monitoramento',
      items: [
        { name: 'Zabbix', description: 'Infraestrutura' },
        { name: 'Grafana', description: 'Visualização' },
        { name: 'Graylog', description: 'Logs' },
        { name: 'Wazuh', description: 'Segurança' },
        { name: 'Prometheus', description: 'Métricas' },
        { name: 'Alertmanager', description: 'Alertas' },
      ],
    },
  ];

  return (
    <section id="tecnologias" className="technologies">
      <div className="tech-bg">
        <div className="tech-gradient"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Tecnologias</span>
          <h2 className="section-title">Stack Tecnológico</h2>
          <p className="section-description">
            Trabalhamos com as melhores ferramentas do mercado para entregar soluções de alta qualidade
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-category">
              <h3 className="tech-category-title">{tech.category}</h3>
              <div className="tech-items">
                {tech.items.map((item, i) => (
                  <div key={i} className="tech-item">
                    <span className="tech-name">{item.name}</span>
                    <span className="tech-description">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-cta">
          <p>Precisa de uma tecnologia específica? <a href="#contato">Entre em contato</a></p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;