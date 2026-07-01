"use client";

import { processSteps } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function ProcessSection() {
  return (
    <section className="section section-muted process" id="processo" aria-labelledby="processo-title">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Processo</p>
          <h2 id="processo-title">Etapas do projeto</h2>
          <p>
            Da primeira conversa à obra, cada etapa é conduzida com método, clareza e precisão para transformar suas
            ideias em um projeto elegante, funcional e pronto para ser executado com segurança.
          </p>
        </div>

        <ol className="process-list">
          {processSteps.map((step) => (
            <li className="process-item" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="process-cta">
          <p>Antes de executar, planeje cada decisão com clareza.</p>
          <a className="btn btn-primary" href={createWhatsAppLink()} target="_blank" rel="noopener">
            Falar sobre meu projeto
          </a>
        </div>
      </div>
    </section>
  );
}
