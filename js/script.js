const WHATSAPP_NUMBER = "5537999061018";
const DEFAULT_MESSAGE = "Olá, Paulo. Vim pelo site e gostaria de conversar sobre um projeto residencial.";
const PORTFOLIO_IMAGE_ROOT = "assets/images/portifolio/";
const PORTFOLIO_CARD_ROOT = "assets/images/portifolio-card/";

const PROJECTS = [
  {
    title: "Residência Luz Mineral",
    category: "Arquitetônico",
    filters: ["residenciais", "fachadas", "3d"],
    description: "O projeto traduz uma arquitetura de presença serena, onde a pedra, os traços horizontais e a luz quente constroem uma fachada imponente sem excessos, projetada para valorizar a chegada e a experiência do morar.",
    images: [
      {
        src: "assets/images/portifolio/Residência Luz Mineral/Residência-Luz Mineral-01.png",
        alt: "Imagem 3D da Residência Luz Mineral com fachada contemporânea."
      },
      {
        src: "assets/images/portifolio/Residência Luz Mineral/Residência-Luz Mineral-02.png",
        alt: "Vista complementar da fachada da Residência Luz Mineral."
      },
      {
        src: "assets/images/portifolio/Residência Luz Mineral/Residência-Luz Mineral-03.png",
        alt: "Detalhe volumétrico da Residência Luz Mineral."
      }
    ]
  },
  {
    title: "Residência Paz das Palmeiras",
    category: "Arquitetônico",
    filters: ["residenciais", "fachadas", "3d"],
    description: "Projeto residencial térreo integrado à natureza, com linguagem acolhedora, amplas varandas e atmosfera de casa de campo contemporânea.",
    images: [
      {
        src: "assets/images/portifolio/Residência Paz das Palmeiras/Residência-Paz-das-Palmeiras-01.png",
        alt: "Imagem 3D da Residência Paz das Palmeiras em perspectiva externa."
      },
      {
        src: "assets/images/portifolio/Residência Paz das Palmeiras/Residência-Paz-das-Palmeiras-02.png",
        alt: "Vista lateral da Residência Paz das Palmeiras com paisagismo."
      },
      {
        src: "assets/images/portifolio/Residência Paz das Palmeiras/Residência-Paz-das-Palmeiras-03.png",
        alt: "Fachada iluminada da Residência Paz das Palmeiras."
      }
    ]
  },
  {
    title: "Residência Vértice Nativo",
    category: "Arquitetônico",
    filters: ["residenciais", "fachadas", "3d"],
    description: "Do encontro entre arquitetura contemporânea e natureza, surge uma residência de presença marcante, onde planos inclinados, volumes expressivos, iluminação cênica e a precisão das linhas verticais compõem uma fachada sofisticada e imponente.",
    images: [
      {
        src: "assets/images/portifolio/Residência Vértice Nativo/Residência-Vértice Nativo-01.png",
        alt: "Imagem 3D da Residência Vértice Nativo com cobertura marcante."
      },
      {
        src: "assets/images/portifolio/Residência Vértice Nativo/Residência-Vértice Nativo-02.png",
        alt: "Vista complementar da Residência Vértice Nativo."
      }
    ]
  },
  {
    title: "Residência Áurea",
    category: "Arquitetônico",
    filters: ["residenciais", "fachadas", "3d"],
    description: "Com linguagem contemporânea e essência atemporal, a residência combina planos, texturas, pedra, luz e vegetação em uma composição sofisticada, acolhedora e marcada por volumes bem definidos.",
    images: [
      {
        src: "assets/images/portifolio/Residência Áurea/Residência-Áurea-01.png",
        alt: "Imagem 3D da fachada da Residência Áurea."
      },
      {
        src: "assets/images/portifolio/Residência Áurea/Residência-Áurea-02.png",
        alt: "Vista alternativa da Residência Áurea."
      }
    ]
  },
  {
    title: "Residência Highgarden",
    category: "Arquitetônico",
    filters: ["residenciais", "fachadas", "3d"],
    description: "Reforma de fachada residencial marcada pela valorização da arquitetura existente, com nova composição de materiais, linhas contemporâneas e paisagismo integrado. O projeto traz mais presença, sofisticação e identidade visual à residência, destacando o jardim elevado como elemento de charme e personalidade.",
    images: [
      {
        src: "assets/images/portifolio/Residência Highgarden/Residência-Highgarden-01.png",
        alt: "Imagem 3D da Residência Highgarden com fachada residencial contemporânea."
      },
      {
        src: "assets/images/portifolio/Residência Highgarden/Residência-Highgarden-02.png",
        alt: "Vista complementar da Residência Highgarden."
      }
    ]
  },
  {
    title: "Residência Átrio de Luz",
    category: "Arquitetônico",
    filters: ["residenciais", "interiores", "3d"],
    description: "O projeto parte da força dos materiais para criar uma arquitetura de identidade marcante. A luz percorre a fachada, destaca relevos e transforma a chegada em uma experiência visual refinada.",
    images: [
      {
        src: "assets/images/portifolio/Residência Átrio de Luz/Residência-Átrio-de-Luz-01.png",
        alt: "Imagem 3D da Residência Átrio de Luz com composição arquitetônica clara."
      },
      {
        src: "assets/images/portifolio/Residência Átrio de Luz/Residência-Átrio-de-Luz-02.png",
        alt: "Segunda imagem 3D da Residência Átrio de Luz."
      }
    ]
  },
    {
    title: "Espaço Gourmet Terra Serena",
    category: "Interiores",
    filters: ["interiores", "3d"],
    description: "Um ambiente para receber com conforto e sofisticação, onde texturas naturais, madeira e luz quente constroem uma atmosfera serena. O projeto une funcionalidade e estética em uma composição rústica, elegante e atemporal.",
    images: [
      {
        src: "assets/images/portifolio/Espaço Gourmet 01/1.png",
        alt: "Imagem 3D do Espaço Gourmet 01 com composição de interiores."
      },
      {
        src: "assets/images/portifolio/Espaço Gourmet 01/2.png",
        alt: "Vista complementar do Espaço Gourmet 01."
      },
      {
        src: "assets/images/portifolio/Espaço Gourmet 01/3.png",
        alt: "Detalhe do projeto de interiores do Espaço Gourmet 01."
      },
      {
        src: "assets/images/portifolio/Espaço Gourmet 01/4.png",
        alt: "Imagem adicional do Espaço Gourmet 01."
      }
    ]
  },
  {
    title: "Consultório Verde Calma",
    category: "Interiores",
    filters: ["comerciais", "interiores", "3d"],
    description: "Projeto de interiores para consultório de nutrição, Um espaço onde a leveza visual se une à sensação de acolhimento. O projeto valoriza tons suaves, texturas naturais e iluminação confortável para criar um consultório elegante, tranquilo e conectado ao bem-estar.",
    images: [
      {
        src: "assets/images/portifolio/Consultorio Nutrição/Consultorio-Nutrição-01.jpeg",
        alt: "Imagem 3D do consultório de nutricionista com ambientação comercial."
      },
      {
        src: "assets/images/portifolio/Consultorio Nutrição/Consultorio-Nutrição-02.jpeg",
        alt: "Vista complementar do consultório de nutricionista."
      }
    ]
  },
];

function createWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

window.createWhatsAppLink = createWhatsAppLink;

const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");
const heroSlides = document.querySelectorAll(".hero-bg");
const whatsappLinks = document.querySelectorAll("[data-whatsapp-link]");
const processSection = document.querySelector("#processo");
const processRevealItems = document.querySelectorAll("#processo .process-item, #processo .process-cta");
const projectGrid = document.querySelector(".project-grid");
const projectEmpty = document.querySelector(".project-empty");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.querySelector("#project-modal");
const modalPanel = modal?.querySelector(".modal-panel");
const modalBackdrop = modal?.querySelector(".modal-backdrop");
const modalClose = modal?.querySelector(".modal-close");
const modalTitle = document.querySelector("#modal-title");
const modalCategory = document.querySelector("#modal-category");
const modalDescription = document.querySelector("#modal-description");
const modalCounter = document.querySelector("#modal-counter");
const modalImage = document.querySelector("#modal-image");
const modalPrev = modal?.querySelector("[data-modal-prev]");
const modalNext = modal?.querySelector("[data-modal-next]");
const contactForm = document.querySelector("#contact-form");
const cookieBanner = document.querySelector("#cookie-banner");
const cookieAccept = document.querySelector("#cookie-accept");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const PROCESS_STEP_DELAY = 320;

let projectCards = [];
let lastFocusedElement = null;
let processRevealTimers = [];
let activeProjectIndex = 0;
let activeModalImageIndex = 0;
let modalCloseTimer = null;
let carouselTouch = null;
let modalTouch = null;

function getProjectImages(project) {
  return project.images?.length ? project.images : [];
}

function getCardImageSrc(image) {
  if (image.cardSrc) return image.cardSrc;
  return image.src
    .replace(PORTFOLIO_IMAGE_ROOT, PORTFOLIO_CARD_ROOT)
    .replace(/\.(png|jpe?g|webp)$/i, ".jpg");
}

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  return element;
}

function createCarouselButton(className, label, direction) {
  const button = document.createElement("button");
  button.className = className;
  button.type = "button";
  button.dataset.carouselAction = direction;
  button.setAttribute("aria-label", label);
  button.innerHTML = direction === "prev" ? "<span aria-hidden=\"true\">‹</span>" : "<span aria-hidden=\"true\">›</span>";
  return button;
}

function createProjectCard(project, projectIndex) {
  const images = getProjectImages(project);
  const card = document.createElement("article");
  card.className = "project-card reveal";
  card.dataset.projectIndex = String(projectIndex);
  card.dataset.activeIndex = "0";
  card.dataset.categories = project.filters.join(" ");
  card.dataset.category = project.filters[0] || "";

  const carousel = document.createElement("div");
  carousel.className = "project-carousel";
  carousel.dataset.carousel = "";

  const track = document.createElement("div");
  track.className = "project-track";
  track.dataset.carouselTrack = "";

  images.forEach((image, imageIndex) => {
    const slide = document.createElement("div");
    slide.className = "project-slide";
    slide.dataset.placeholder = project.title;

    const openButton = document.createElement("button");
    openButton.className = "project-image-button";
    openButton.type = "button";
    openButton.dataset.openLightbox = "";
    openButton.dataset.imageIndex = String(imageIndex);
    openButton.setAttribute("aria-label", `Ampliar imagem ${imageIndex + 1} de ${project.title}`);

    const img = document.createElement("img");
    img.src = getCardImageSrc(image);
    img.alt = image.alt;
    img.width = 900;
    img.height = 1125;
    img.loading = imageIndex === 0 && projectIndex < 3 ? "eager" : "lazy";
    img.fetchPriority = imageIndex === 0 && projectIndex < 3 ? "high" : "auto";
    img.decoding = "async";
    img.addEventListener("error", () => {
      img.hidden = true;
      slide.classList.add("has-placeholder");
    });

    const overlay = createTextElement("span", "project-overlay", "Ampliar imagem");

    openButton.append(img, overlay);
    slide.append(openButton);
    track.append(slide);
  });

  carousel.append(track);

  const hasMultipleImages = images.length > 1;
  const previousButton = createCarouselButton("carousel-arrow carousel-prev", `Imagem anterior de ${project.title}`, "prev");
  const nextButton = createCarouselButton("carousel-arrow carousel-next", `Próxima imagem de ${project.title}`, "next");
  previousButton.hidden = !hasMultipleImages;
  nextButton.hidden = !hasMultipleImages;
  carousel.append(previousButton, nextButton);

  const dots = document.createElement("div");
  dots.className = "project-dots";
  dots.hidden = !hasMultipleImages;
  dots.setAttribute("aria-label", `Navegação de imagens de ${project.title}`);

  images.forEach((_, imageIndex) => {
    const dot = document.createElement("button");
    dot.className = imageIndex === 0 ? "project-dot is-active" : "project-dot";
    dot.type = "button";
    dot.dataset.carouselDot = String(imageIndex);
    dot.setAttribute("aria-label", `Ver imagem ${imageIndex + 1} de ${project.title}`);
    dots.append(dot);
  });

  carousel.append(dots);

  const info = document.createElement("div");
  info.className = "project-info";
  info.append(
    createTextElement("span", "project-kicker", project.category),
    createTextElement("strong", "", project.title),
    createTextElement("p", "", project.description)
  );

  const cta = createTextElement("button", "project-cta", "Ver projeto");
  cta.type = "button";
  cta.dataset.openLightbox = "";
  cta.dataset.imageIndex = "0";
  cta.setAttribute("aria-label", `Ver projeto ${project.title}`);
  info.append(cta);

  card.append(carousel, info);
  return card;
}

function renderProjects() {
  if (!projectGrid) return;
  projectGrid.replaceChildren(...PROJECTS.map((project, index) => createProjectCard(project, index)));
  projectCards = Array.from(projectGrid.querySelectorAll(".project-card"));
}

renderProjects();

const revealItems = Array.from(document.querySelectorAll(".reveal")).filter((item) => {
  return !item.matches("#processo .process-item, #processo .process-cta");
});

function updateScrollLock() {
  const menuOpen = navList?.classList.contains("open");
  const modalOpen = modal && !modal.hidden;
  body.classList.toggle("scroll-locked", Boolean(menuOpen || modalOpen));
}

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 24);
}

function closeMenu() {
  if (!navToggle || !navList || !header) return;
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Abrir menu");
  navList.classList.remove("open");
  header.classList.remove("menu-open");
  updateScrollLock();
}

function toggleMenu() {
  if (!navToggle || !navList || !header) return;
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  navList.classList.toggle("open", !isOpen);
  header.classList.toggle("menu-open", !isOpen);
  updateScrollLock();
}

function setActiveNav(sectionId) {
  const sectionMap = {
    conceito: "servicos",
    valor: "processo",
    whatsapp: "contato",
  };
  const activeSection = sectionMap[sectionId] || sectionId;

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeSection}`;
    link.classList.toggle("active", isActive);
  });
}

function getWrappedIndex(index, total) {
  if (!total) return 0;
  return ((index % total) + total) % total;
}

function getActiveCardImageIndex(card) {
  return Number(card?.dataset.activeIndex || 0);
}

function setCarouselSlide(card, imageIndex) {
  if (!card) return;
  const project = PROJECTS[Number(card.dataset.projectIndex)];
  const images = getProjectImages(project);
  const nextIndex = getWrappedIndex(imageIndex, images.length);
  const track = card.querySelector("[data-carousel-track]");

  card.dataset.activeIndex = String(nextIndex);
  if (track) {
    track.style.transform = `translateX(-${nextIndex * 100}%)`;
  }

  card.querySelectorAll("[data-carousel-dot]").forEach((dot) => {
    const isActive = Number(dot.dataset.carouselDot) === nextIndex;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function moveCarousel(card, direction) {
  const activeIndex = getActiveCardImageIndex(card);
  setCarouselSlide(card, activeIndex + direction);
}

function updateProjectModal() {
  if (!modalImage || !modalTitle || !modalCategory || !modalDescription || !modalCounter) return;

  const project = PROJECTS[activeProjectIndex];
  const images = getProjectImages(project);
  const image = images[activeModalImageIndex];

  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;
  modalDescription.textContent = project.description;
  modalCounter.textContent = `${activeModalImageIndex + 1} / ${images.length}`;

  modalImage.hidden = false;
  modalImage.src = image.src;
  modalImage.alt = image.alt;

  if (modalPrev && modalNext) {
    const hasMultipleImages = images.length > 1;
    modalPrev.hidden = !hasMultipleImages;
    modalNext.hidden = !hasMultipleImages;
    modalPrev.setAttribute("aria-label", `Imagem anterior de ${project.title}`);
    modalNext.setAttribute("aria-label", `Próxima imagem de ${project.title}`);
  }
}

function openProjectModal(projectIndex, imageIndex = 0) {
  if (!modal || !modalPanel) return;

  const project = PROJECTS[projectIndex];
  const images = getProjectImages(project);
  if (!project || !images.length) return;

  window.clearTimeout(modalCloseTimer);
  lastFocusedElement = document.activeElement;
  activeProjectIndex = projectIndex;
  activeModalImageIndex = getWrappedIndex(imageIndex, images.length);

  updateProjectModal();
  modal.hidden = false;
  updateScrollLock();

  window.requestAnimationFrame(() => {
    modal.classList.add("is-open");
    modalPanel.focus();
  });
}

function closeProjectModal() {
  if (!modal || modal.hidden) return;

  modal.classList.remove("is-open");
  window.clearTimeout(modalCloseTimer);

  modalCloseTimer = window.setTimeout(() => {
    modal.hidden = true;
    updateScrollLock();
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }, prefersReducedMotion ? 0 : 240);
}

function moveProjectModal(direction) {
  const project = PROJECTS[activeProjectIndex];
  const images = getProjectImages(project);
  activeModalImageIndex = getWrappedIndex(activeModalImageIndex + direction, images.length);
  updateProjectModal();

  const activeCard = projectCards.find((card) => Number(card.dataset.projectIndex) === activeProjectIndex);
  setCarouselSlide(activeCard, activeModalImageIndex);
}

function trapModalFocus(event) {
  if (event.key !== "Tab" || !modal || modal.hidden) return;
  const focusable = modal.querySelectorAll("a[href], button:not([disabled]):not([hidden]), [tabindex]:not([tabindex='-1'])");
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  }

  if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function filterProjects(filter) {
  let visibleCount = 0;

  projectCards.forEach((card, index) => {
    const categories = card.dataset.categories?.split(" ") || [];
    const showCard = filter === "todos" || categories.includes(filter);
    card.classList.toggle("is-hidden", !showCard);

    if (showCard) {
      visibleCount += 1;
      card.style.animationDelay = prefersReducedMotion ? "0ms" : `${Math.min(index, 6) * 45}ms`;
      card.classList.remove("is-filtered-in");
      void card.offsetWidth;
      card.classList.add("is-filtered-in");
      window.setTimeout(() => card.classList.remove("is-filtered-in"), 460);
    }
  });

  if (projectEmpty) {
    projectEmpty.hidden = visibleCount > 0;
  }
}

function clearProcessRevealTimers() {
  processRevealTimers.forEach((timer) => window.clearTimeout(timer));
  processRevealTimers = [];
}

function resetProcessSteps() {
  clearProcessRevealTimers();
  processRevealItems.forEach((item) => item.classList.remove("is-visible"));
}

function revealProcessSteps() {
  if (!processRevealItems.length) return;

  if (prefersReducedMotion) {
    processRevealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  resetProcessSteps();
  void processSection?.offsetHeight;

  processRevealItems.forEach((item, index) => {
    const timer = window.setTimeout(() => {
      item.classList.add("is-visible");
    }, index * PROCESS_STEP_DELAY);

    processRevealTimers.push(timer);
  });
}

function clearFieldError(field, errorElement) {
  field.removeAttribute("aria-invalid");
  field.removeAttribute("aria-describedby");
  errorElement.textContent = "";
}

function setFieldError(field, errorElement, message) {
  field.setAttribute("aria-invalid", "true");
  field.setAttribute("aria-describedby", errorElement.id);
  errorElement.textContent = message;
}

function validateContactForm(form) {
  const name = form.elements.name;
  const phone = form.elements.phone;
  const nameError = document.querySelector("#name-error");
  const phoneError = document.querySelector("#phone-error");
  let isValid = true;

  clearFieldError(name, nameError);
  clearFieldError(phone, phoneError);

  if (!name.value.trim()) {
    setFieldError(name, nameError, "Informe seu nome para iniciarmos o atendimento.");
    isValid = false;
  }

  const phoneDigits = phone.value.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    setFieldError(phone, phoneError, "Informe um WhatsApp válido com DDD.");
    isValid = false;
  }

  return isValid;
}

function buildContactMessage(form) {
  const formData = new FormData(form);
  const lines = [
    DEFAULT_MESSAGE,
    "",
    `Nome: ${formData.get("name")?.toString().trim()}`,
    `WhatsApp: ${formData.get("phone")?.toString().trim()}`,
    `Cidade: ${formData.get("city")?.toString().trim() || "Não informado"}`,
    `Tipo de projeto: ${formData.get("projectType")}`,
  ];

  const message = formData.get("message")?.toString().trim();
  if (message) {
    lines.push(`Mensagem: ${message}`);
  }

  return lines.join("\n");
}

whatsappLinks.forEach((link) => {
  link.setAttribute("href", createWhatsAppLink(DEFAULT_MESSAGE));
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener");
});

if (heroSlides.length > 1 && !prefersReducedMotion) {
  let activeHeroSlide = 0;

  window.setInterval(() => {
    heroSlides[activeHeroSlide].classList.remove("is-active");
    activeHeroSlide = (activeHeroSlide + 1) % heroSlides.length;
    heroSlides[activeHeroSlide].classList.add("is-active");
  }, 5000);
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle?.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));

  if (processSection && processRevealItems.length) {
    const processObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealProcessSteps();
        } else {
          resetProcessSteps();
        }
      });
    }, { threshold: [0, 0.22] });

    processObserver.observe(processSection);
  }

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveNav(entry.target.id);
      }
    });
  }, { rootMargin: "-45% 0px -48% 0px", threshold: 0 });

  document.querySelectorAll("main section[id]").forEach((section) => {
    sectionObserver.observe(section);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
  revealProcessSteps();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "todos";
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    filterProjects(filter);
  });
});

projectGrid?.addEventListener("click", (event) => {
  const actionButton = event.target.closest("button");
  const card = event.target.closest(".project-card");
  if (!actionButton || !card) return;

  if (actionButton.dataset.carouselAction === "prev") {
    moveCarousel(card, -1);
    return;
  }

  if (actionButton.dataset.carouselAction === "next") {
    moveCarousel(card, 1);
    return;
  }

  if (actionButton.dataset.carouselDot) {
    setCarouselSlide(card, Number(actionButton.dataset.carouselDot));
    return;
  }

  if ("openLightbox" in actionButton.dataset) {
    const projectIndex = Number(card.dataset.projectIndex);
    const imageIndex = Number(actionButton.dataset.imageIndex || card.dataset.activeIndex || 0);
    openProjectModal(projectIndex, imageIndex);
  }
});

projectGrid?.addEventListener("touchstart", (event) => {
  const carousel = event.target.closest(".project-carousel");
  if (!carousel || event.touches.length !== 1) return;

  carouselTouch = {
    carousel,
    startX: event.touches[0].clientX,
    startY: event.touches[0].clientY,
  };
}, { passive: true });

projectGrid?.addEventListener("touchend", (event) => {
  if (!carouselTouch) return;

  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - carouselTouch.startX;
  const deltaY = touch.clientY - carouselTouch.startY;

  if (Math.abs(deltaX) > 42 && Math.abs(deltaX) > Math.abs(deltaY)) {
    const card = carouselTouch.carousel.closest(".project-card");
    moveCarousel(card, deltaX < 0 ? 1 : -1);
  }

  carouselTouch = null;
}, { passive: true });

modalPrev?.addEventListener("click", () => moveProjectModal(-1));
modalNext?.addEventListener("click", () => moveProjectModal(1));
modalClose?.addEventListener("click", closeProjectModal);
modalBackdrop?.addEventListener("click", closeProjectModal);

modalImage?.addEventListener("error", () => {
  modalImage.hidden = true;
});

modal?.addEventListener("touchstart", (event) => {
  if (event.touches.length !== 1) return;
  modalTouch = {
    startX: event.touches[0].clientX,
    startY: event.touches[0].clientY,
  };
}, { passive: true });

modal?.addEventListener("touchend", (event) => {
  if (!modalTouch || modal.hidden) return;

  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - modalTouch.startX;
  const deltaY = touch.clientY - modalTouch.startY;

  if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY)) {
    moveProjectModal(deltaX < 0 ? 1 : -1);
  }

  modalTouch = null;
}, { passive: true });

document.addEventListener("keydown", (event) => {
  const modalOpen = modal && !modal.hidden;

  if (event.key === "Escape") {
    closeProjectModal();
    closeMenu();
  }

  if (modalOpen && event.key === "ArrowLeft") {
    event.preventDefault();
    moveProjectModal(-1);
  }

  if (modalOpen && event.key === "ArrowRight") {
    event.preventDefault();
    moveProjectModal(1);
  }

  trapModalFocus(event);
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const feedback = document.querySelector("#form-feedback");
  const submitButton = contactForm.querySelector(".form-submit");

  feedback.textContent = "";

  if (!validateContactForm(contactForm)) {
    feedback.textContent = "Revise os campos destacados antes de enviar.";
    return;
  }

  const message = buildContactMessage(contactForm);
  const previousText = submitButton.textContent;
  submitButton.textContent = "Redirecionando...";
  submitButton.disabled = true;
  feedback.textContent = "Abrindo o WhatsApp com sua mensagem.";

  window.open(createWhatsAppLink(message), "_blank", "noopener");

  window.setTimeout(() => {
    submitButton.textContent = previousText;
    submitButton.disabled = false;
  }, 900);
});

if (cookieBanner && cookieAccept) {
  const cookieChoice = localStorage.getItem("pf_cookie_choice");
  if (!cookieChoice) {
    cookieBanner.hidden = false;
  }

  cookieAccept.addEventListener("click", () => {
    localStorage.setItem("pf_cookie_choice", "accepted");
    cookieBanner.hidden = true;
  });
}
