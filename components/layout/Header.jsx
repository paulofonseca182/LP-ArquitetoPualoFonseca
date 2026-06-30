"use client";

import { Instagram, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { INSTAGRAM_URL, navLinks } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Brand } from "@/components/ui/Brand";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionIds = useMemo(() => ["hero", "sobre", "projetos", "servicos", "processo", "contato"], []);
  const activeSection = useActiveSection(sectionIds);

  useBodyScrollLock(isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={`site-header${isScrolled ? " scrolled" : ""}${isMenuOpen ? " menu-open" : ""}`} id="topo">
      <nav className="container nav" aria-label="Navegação principal">
        <Brand />

        <button
          className="nav-toggle"
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="menu-principal"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <ul className={`nav-list${isMenuOpen ? " open" : ""}`} id="menu-principal">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a className={`nav-link${activeSection === id ? " active" : ""}`} href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="header-socials" aria-label="Canais de contato">
          <a
            className="header-social-link"
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener"
            aria-label="Conversar pelo WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <a
            className="header-social-link"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener"
            aria-label="Abrir Instagram de Paulo Fonseca"
          >
            <Instagram aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
