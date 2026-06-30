import { Reveal } from "@/components/ui/Reveal";

export function ConceptSection() {
  return (
    <section className="concept section-dark" id="conceito" aria-labelledby="conceito-title">
      <Reveal className="container concept-content">
        <p className="eyebrow">Planejamento antes da execução</p>
        <h2 id="conceito-title">Antes de construir, visualize. Antes de executar, planeje.</h2>
        <p>
          Um projeto bem pensado evita erros, retrabalhos e desperdícios, ajudando você a tomar decisões com mais
          segurança antes do início da obra.
        </p>
      </Reveal>
    </section>
  );
}
