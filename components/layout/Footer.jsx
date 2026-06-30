import { INSTAGRAM_URL } from "@/data/site";
import { Brand } from "@/components/ui/Brand";

export function Footer() {
  return (
    <footer className="site-footer" id="rodape">
      <div className="container footer-layout">
        <div>
          <Brand footer />
          <p>Projetos inteligentes para transformar espaços em experiências.</p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>

        <address>
          <span>Dores do Indaiá e região</span>
          <a href="mailto:pfonseca.arq@gmail.com">pfonseca.arq@gmail.com</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener">
            @arquitetopaulofonseca
          </a>
        </address>
      </div>
    </footer>
  );
}
