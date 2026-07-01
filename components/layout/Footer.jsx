import { Briefcase, Images, Info, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL } from "@/data/site";
import { Brand } from "@/components/ui/Brand";

const footerLinks = [
  { href: "#sobre", label: "Sobre", Icon: Info },
  { href: "#projetos", label: "Projetos", Icon: Images },
  { href: "#servicos", label: "Serviços", Icon: Briefcase },
  { href: "#contato", label: "Contato", Icon: MessageCircle }
];

export function Footer() {
  return (
    <footer className="site-footer" id="rodape">
      <div className="container footer-layout">
        <div>
          <Brand footer />
          <p>Projetos inteligentes para transformar espaços em experiências.</p>
        </div>

        <nav className="footer-nav" aria-label="Navegação do rodapé">
          {footerLinks.map(({ href, label, Icon }) => (
            <a className="footer-nav-link" href={href} key={href}>
              <span className="footer-nav-icon" aria-hidden="true">
                <Icon strokeWidth={1.55} />
              </span>
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <address className="footer-contact">
          <span className="footer-location">
            <span className="footer-location-icon" aria-hidden="true">
              <MapPin strokeWidth={1.55} />
            </span>
            <span>Dores do Indaiá e região</span>
          </span>
          <a className="footer-contact-link" href="mailto:pfonseca.arq@gmail.com">
            <span className="footer-contact-icon" aria-hidden="true">
              <Mail strokeWidth={1.55} />
            </span>
            <span>pfonseca.arq@gmail.com</span>
          </a>
          <a className="footer-contact-link" href={INSTAGRAM_URL} target="_blank" rel="noopener">
            <span className="footer-contact-icon" aria-hidden="true">
              <Instagram strokeWidth={1.55} />
            </span>
            <span>@arquitetopaulofonseca</span>
          </a>
        </address>
      </div>
    </footer>
  );
}
