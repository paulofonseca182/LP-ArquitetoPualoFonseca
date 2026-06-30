import { createWhatsAppLink } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";

export function WhatsAppCTASection() {
  return (
    <section className="cta section-dark" id="whatsapp" aria-labelledby="whatsapp-title">
      <Reveal className="container cta-content">
        <p className="eyebrow">Conversa inicial</p>
        <h2 id="whatsapp-title">Conte-nos sobre o que você deseja construir ou reformar.</h2>
        <p>
          Cada projeto começa com uma conversa. Fale sobre suas ideias e entenda como podemos transformar seu espaço em
          um projeto funcional, bonito e executável.
        </p>
        <a className="btn btn-primary" href={createWhatsAppLink()} target="_blank" rel="noopener">
          Iniciar conversa no WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
