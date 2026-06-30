import "./globals.css";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export const metadata = {
  title: "Paulo Fonseca Arquitetura e Urbanismo | Projetos Residenciais",
  description:
    "Projetos arquitetônicos residenciais em Dores do Indaiá e região. Arquitetura com planejamento, estética, funcionalidade e execução viável.",
  keywords: [
    "Projeto arquitetônico residencial",
    "Arquitetura residencial",
    "Dores do Indaiá",
    "Reformas residenciais",
    "Fachadas residenciais",
    "Interiores",
    "Imagens 3D",
    "Planejamento de obra"
  ],
  authors: [{ name: "Paulo Fonseca Arquitetura e Urbanismo" }],
  openGraph: {
    title: "Paulo Fonseca Arquitetura e Urbanismo | Projetos Residenciais",
    description:
      "Projetos residenciais com planejamento, estética, funcionalidade e execução viável em Dores do Indaiá e região.",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" as="image" href="/assets/images/hero-paulo-fonseca-02.png" />
        <link rel="preload" as="image" href="/assets/images/hero-paulo-fonseca-03.png" />
        <link rel="preload" as="image" href="/assets/images/hero-paulo-fonseca.png" />
        <link rel="preload" as="font" href="/assets/fonts/tall-films.ttf" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500;600&family=Marcellus&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>
        {children}
        <FloatingWhatsApp />
        <CookieBanner />
      </body>
    </html>
  );
}
