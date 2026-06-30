"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "@/data/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || heroSlides.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section className="hero section-dark" id="hero" aria-labelledby="hero-title">
      {heroSlides.map((_, index) => (
        <span
          key={index}
          className={`hero-bg hero-bg-${["one", "two", "three"][index]}${activeSlide === index ? " is-active" : ""}`}
          aria-hidden="true"
        />
      ))}
      <span className="hero-line hero-line-a" aria-hidden="true" />
      <span className="hero-line hero-line-b" aria-hidden="true" />
      <span className="hero-plane hero-plane-a" aria-hidden="true" />
      <span className="hero-plane hero-plane-b" aria-hidden="true" />

      <Reveal className="container hero-content">
        <p className="eyebrow hero-eyebrow">Projetos arquitetônicos</p>
        <h1 id="hero-title">Arquitetura inteligente transforma ambientes em experiências únicas</h1>
        <p className="hero-copy">
          Desenvolvemos projetos atemporais e personalizados, que unem funcionalidade, estética e identidade para criar
          ambientes mais confortáveis e sofisticados.
        </p>
        <div className="hero-actions" aria-label="Ações principais">
          <a className="btn btn-primary" href={createWhatsAppLink()} target="_blank" rel="noopener">
            Solicitar orçamento
          </a>
          <a className="btn btn-secondary" href="#projetos">
            Conhecer projetos
          </a>
        </div>
      </Reveal>
    </section>
  );
}
