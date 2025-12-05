import { Mail, Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'E-mail',
      value: 'contato@gbitsolutions.com.br',
      href: 'mailto:contato@gbitsolutions.com.br',
    },
    {
      icon: Phone,
      label: 'Telefone / WhatsApp',
      value: '(11) 99271-1715',
      href: 'https://wa.me/5511992711715',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, Brasil',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Horário',
      value: 'Seg - Sex: 9h às 18h',
      href: '#',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
  };

  return (
    <section id="contato" className="contact">
      <div className="contact-bg">
        <div className="contact-gradient"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contato</span>
          <h2 className="section-title">Vamos Conversar</h2>
          <p className="section-description">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="info-title">Informações de Contato</h3>
            <p className="info-description">
              Estamos prontos para atender você. Escolha o melhor canal de comunicação.
            </p>
            
            <div className="info-items">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="info-item"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="info-icon">
                    <item.icon size={22} />
                  </div>
                  <div className="info-content">
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="https://wa.me/5511992711715?text=Olá! Gostaria de saber mais sobre os serviços da GBIT Solutions."
              className="whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={22} />
              Falar pelo WhatsApp
            </a>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Envie uma mensagem</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Empresa</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Serviço de interesse</label>
                <select id="service" name="service" required>
                  <option value="">Selecione um serviço</option>
                  <option value="aws">Infraestrutura AWS</option>
                  <option value="dev">Desenvolvimento de Sistemas</option>
                  <option value="monitoring">Monitoramento de TI</option>
                  <option value="other">Outro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <Send size={18} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;