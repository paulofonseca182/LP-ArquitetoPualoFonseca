import { valueProof } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function ValueProofSection() {
  return (
    <section className="section section-muted value-proof" id="valor" aria-labelledby="valor-title">
      <div className="container two-column">
        <Reveal className="section-heading">
          <p className="eyebrow">Prova de valor</p>
          <h2 id="valor-title">Um projeto reduz incertezas antes que elas se transformem em custo.</h2>
        </Reveal>

        <Reveal className="value-list" delay={0.08}>
          {valueProof.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
