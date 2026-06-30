const imageRoot = "/assets/images/portifolio/";
const cardRoot = "/assets/images/portifolio-card/";

function image(src, alt) {
  return {
    src: `${imageRoot}${src}`,
    cardSrc: `${cardRoot}${src.replace(/\.(png|jpe?g|webp)$/i, ".jpg")}`,
    alt
  };
}

export const projectFilters = [
  { value: "todos", label: "Todos" },
  { value: "residenciais", label: "Residenciais" },
  { value: "comerciais", label: "Comerciais" },
  { value: "interiores", label: "Interiores" },
  { value: "fachadas", label: "Fachadas" },
  { value: "3d", label: "3D" },
  { value: "regularizacao", label: "Regularização" }
];

export const projects = [
  {
    title: "Residência Luz Mineral",
    category: "Arquitetônico",
    filters: ["residenciais", "fachadas", "3d"],
    description:
      "O projeto traduz uma arquitetura de presença serena, onde a pedra, os traços horizontais e a luz quente constroem uma fachada imponente sem excessos, projetada para valorizar a chegada e a experiência do morar.",
    images: [
      image("Residência Luz Mineral/Residência-Luz Mineral-01.png", "Imagem 3D da Residência Luz Mineral com fachada contemporânea."),
      image("Residência Luz Mineral/Residência-Luz Mineral-02.png", "Vista complementar da fachada da Residência Luz Mineral."),
      image("Residência Luz Mineral/Residência-Luz Mineral-03.png", "Detalhe volumétrico da Residência Luz Mineral.")
    ]
  },
  {
    title: "Residência Paz das Palmeiras",
    category: "Arquitetônico",
    filters: ["residenciais", "fachadas", "3d"],
    description:
      "Projeto residencial térreo integrado à natureza, com linguagem acolhedora, amplas varandas e atmosfera de casa de campo contemporânea.",
    images: [
      image("Residência Paz das Palmeiras/Residência-Paz-das-Palmeiras-01.png", "Imagem 3D da Residência Paz das Palmeiras em perspectiva externa."),
      image("Residência Paz das Palmeiras/Residência-Paz-das-Palmeiras-02.png", "Vista lateral da Residência Paz das Palmeiras com paisagismo."),
      image("Residência Paz das Palmeiras/Residência-Paz-das-Palmeiras-03.png", "Fachada iluminada da Residência Paz das Palmeiras.")
    ]
  },
  {
    title: "Residência Vértice Nativo",
    category: "Arquitetônico",
    filters: ["residenciais", "fachadas", "3d"],
    description:
      "Do encontro entre arquitetura contemporânea e natureza, surge uma residência de presença marcante, onde planos inclinados, volumes expressivos, iluminação cênica e a precisão das linhas verticais compõem uma fachada sofisticada e imponente.",
    images: [
      image("Residência Vértice Nativo/Residência-Vértice Nativo-01.png", "Imagem 3D da Residência Vértice Nativo com cobertura marcante."),
      image("Residência Vértice Nativo/Residência-Vértice Nativo-02.png", "Vista complementar da Residência Vértice Nativo.")
    ]
  },
  {
    title: "Residência Áurea",
    category: "Arquitetônico",
    filters: ["residenciais", "fachadas", "3d"],
    description:
      "Com linguagem contemporânea e essência atemporal, a residência combina planos, texturas, pedra, luz e vegetação em uma composição sofisticada, acolhedora e marcada por volumes bem definidos.",
    images: [
      image("Residência Áurea/Residência-Áurea-01.png", "Imagem 3D da fachada da Residência Áurea."),
      image("Residência Áurea/Residência-Áurea-02.png", "Vista alternativa da Residência Áurea.")
    ]
  },
  {
    title: "Residência Highgarden",
    category: "Arquitetônico",
    filters: ["residenciais", "fachadas", "3d"],
    description:
      "Reforma de fachada residencial marcada pela valorização da arquitetura existente, com nova composição de materiais, linhas contemporâneas e paisagismo integrado. O projeto traz mais presença, sofisticação e identidade visual à residência, destacando o jardim elevado como elemento de charme e personalidade.",
    images: [
      image("Residência Highgarden/Residência-Highgarden-01.png", "Imagem 3D da Residência Highgarden com fachada residencial contemporânea."),
      image("Residência Highgarden/Residência-Highgarden-02.png", "Vista complementar da Residência Highgarden.")
    ]
  },
  {
    title: "Residência Átrio de Luz",
    category: "Arquitetônico",
    filters: ["residenciais", "interiores", "3d"],
    description:
      "O projeto parte da força dos materiais para criar uma arquitetura de identidade marcante. A luz percorre a fachada, destaca relevos e transforma a chegada em uma experiência visual refinada.",
    images: [
      image("Residência Átrio de Luz/Residência-Átrio-de-Luz-01.png", "Imagem 3D da Residência Átrio de Luz com composição arquitetônica clara."),
      image("Residência Átrio de Luz/Residência-Átrio-de-Luz-02.png", "Segunda imagem 3D da Residência Átrio de Luz.")
    ]
  },
  {
    title: "Espaço Gourmet Terra Serena",
    category: "Interiores",
    filters: ["interiores", "3d"],
    description:
      "Um ambiente para receber com conforto e sofisticação, onde texturas naturais, madeira e luz quente constroem uma atmosfera serena. O projeto une funcionalidade e estética em uma composição rústica, elegante e atemporal.",
    images: [
      image("Espaço Gourmet 01/1.png", "Imagem 3D do Espaço Gourmet 01 com composição de interiores."),
      image("Espaço Gourmet 01/2.png", "Vista complementar do Espaço Gourmet 01."),
      image("Espaço Gourmet 01/3.png", "Detalhe do projeto de interiores do Espaço Gourmet 01."),
      image("Espaço Gourmet 01/4.png", "Imagem adicional do Espaço Gourmet 01.")
    ]
  },
  {
    title: "Consultório Verde Calma",
    category: "Interiores",
    filters: ["comerciais", "interiores", "3d"],
    description:
      "Projeto de interiores para consultório de nutrição, um espaço onde a leveza visual se une à sensação de acolhimento. O projeto valoriza tons suaves, texturas naturais e iluminação confortável para criar um consultório elegante, tranquilo e conectado ao bem-estar.",
    images: [
      image("Consultorio Nutrição/Consultorio-Nutrição-01.jpeg", "Imagem 3D do consultório de nutricionista com ambientação comercial."),
      image("Consultorio Nutrição/Consultorio-Nutrição-02.jpeg", "Vista complementar do consultório de nutricionista.")
    ]
  }
];
