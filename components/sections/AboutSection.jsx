import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section className="section section-light about" id="sobre" aria-labelledby="sobre-title">
      <div className="container two-column">
        <Reveal className="section-heading">
          <p className="eyebrow">Sobre o escritório</p>
          <h2 id="sobre-title">Projetamos com cuidado para construir com confiança.</h2>
        </Reveal>
        <Reveal className="content-stack" delay={0.08}>
          <p>
            Criamos projetos que traduzem ideias em espaços com identidade, precisão e beleza. Cada projeto nasce de uma
            escuta atenta e se desenvolve com cuidado em cada detalhe, da estética à viabilidade, para que a obra aconteça
            com clareza e confiança.
          </p>
          <p>
            Acreditamos que um bom projeto vai além do desenho: é o que orienta decisões, antecipa desafios e garante que
            cada escolha feita antes da obra se reflita no resultado final. Dedicamos tempo e atenção a cada etapa,
            transformando intenções em soluções concretas, bonitas e duradouras.
          </p>
          <aside className="highlight-note" aria-label="Valor do projeto arquitetônico">
            Com um bom projeto, as escolhas técnicas, visuais e financeiras ganham direção, segurança e propósito.
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
