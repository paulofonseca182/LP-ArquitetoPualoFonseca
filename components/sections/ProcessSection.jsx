"use client";

import { motion } from "motion/react";
import { processSteps } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessSection() {
  return (
    <section className="section section-muted process" id="processo" aria-labelledby="processo-title">
      <div className="container">
        <Reveal className="section-heading centered">
          <p className="eyebrow">Processo</p>
          <h2 id="processo-title">Etapas do projeto</h2>
          <p>
            Da primeira conversa à obra, cada etapa é conduzida com método, clareza e precisão para transformar suas
            ideias em um projeto elegante, funcional e pronto para ser executado com segurança.
          </p>
        </Reveal>

        <ol className="process-list">
          {processSteps.map((step, index) => (
            <motion.li
              className="process-item"
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.22 }}
              transition={{ duration: 0.48, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.li>
          ))}
        </ol>

        <motion.div
          className="process-cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.22 }}
          transition={{ duration: 0.48, delay: processSteps.length * 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>Antes de executar, planeje cada decisão com clareza.</p>
          <a className="btn btn-primary" href={createWhatsAppLink()} target="_blank" rel="noopener">
            Falar sobre meu projeto
          </a>
        </motion.div>
      </div>
    </section>
  );
}
