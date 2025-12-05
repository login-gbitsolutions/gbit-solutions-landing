import { Mail, Phone } from 'lucide-react';
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
          <div className="footer-credits">
            <span>Desenvolvido por</span>
            <a href="#inicio" className="credits-logo">
              <svg
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mini-logo"
              >
                <circle cx="80" cy="80" r="45" stroke="#7A63FF" strokeWidth="4" fill="none"/>
                <path d="M 80 20 A 60 60 0 0 1 130 50" stroke="#7A63FF" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M 140 80 A 60 60 0 0 1 120 130" stroke="#7A63FF" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M 100 145 A 60 60 0 0 1 40 135" stroke="#7A63FF" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M 25 110 A 60 60 0 0 1 25 50" stroke="#7A63FF" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M 40 30 A 60 60 0 0 1 70 20" stroke="#7A63FF" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
              <span>GBIT Solutions</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;