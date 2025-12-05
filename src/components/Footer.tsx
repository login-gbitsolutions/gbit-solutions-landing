import { Mail, Phone, Linkedin, Instagram, Github } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Contato', href: '#contato' },
  ];

  const services = [
    { label: 'Infraestrutura AWS', href: '#servicos' },
    { label: 'Desenvolvimento de Sistemas', href: '#servicos' },
    { label: 'Monitoramento como Serviço', href: '#servicos' },
    { label: 'Consultoria Zabbix & Wazuh', href: '#servicos' },
    { label: 'Serviços Personalizados', href: '#servicos' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/login-gbitsolutions', label: 'GitHub' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo className="footer-logo" />
            <p className="footer-description">
              Soluções completas em TI para impulsionar o crescimento do seu negócio. 
              Especialistas em AWS, desenvolvimento e monitoramento.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Serviços</h4>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href}>{service.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <div className="contact-items">
              <a href="mailto:contato@gbitsolutions.com.br" className="contact-item">
                <Mail size={18} />
                <span>contato@gbitsolutions.com.br</span>
              </a>
              <a href="https://wa.me/5511992711715" className="contact-item" target="_blank" rel="noopener noreferrer">
                <Phone size={18} />
                <span>(11) 99271-1715</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} GBIT Solutions. Todos os direitos reservados.</p>
          <p className="footer-credits">
            Feito com 💜 por GBIT Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;