import { services } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export function ServicesSection() {
  return (
    <section className="section section-light services" id="servicos" aria-labelledby="servicos-title">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">Serviços</p>
          <h2 id="servicos-title">Soluções técnicas para espaços cuidadosamente planejados.</h2>
        </Reveal>

        <div className="service-grid">
          {services.map((service, index) => (
            <Reveal as="article" className="service-card" delay={index * 0.04} key={service.title}>
              <ServiceIcon name={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
