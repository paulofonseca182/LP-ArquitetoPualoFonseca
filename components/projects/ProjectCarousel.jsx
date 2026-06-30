"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useSwipe } from "@/hooks/useSwipe";

export function ProjectCarousel({ project, projectIndex, onOpenLightbox }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleImages = project.images.length > 1;

  function goToImage(index) {
    const total = project.images.length;
    setActiveIndex(((index % total) + total) % total);
  }

  const swipeHandlers = useSwipe((direction) => {
    goToImage(activeIndex + (direction === "next" ? 1 : -1));
  });

  return (
    <div className="project-carousel" data-carousel="" {...swipeHandlers}>
      <div className="project-track" data-carousel-track="" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {project.images.map((image, imageIndex) => (
          <div className="project-slide" data-placeholder={project.title} key={image.src}>
            <button
              className="project-image-button"
              type="button"
              aria-label={`Ampliar imagem ${imageIndex + 1} de ${project.title}`}
              onClick={() => onOpenLightbox(projectIndex, imageIndex)}
            >
              <img
                src={image.cardSrc}
                alt={image.alt}
                width="900"
                height="1125"
                loading={imageIndex === 0 && projectIndex < 3 ? "eager" : "lazy"}
                fetchPriority={imageIndex === 0 && projectIndex < 3 ? "high" : "auto"}
                decoding="async"
              />
              <span className="project-overlay">Ampliar imagem</span>
            </button>
          </div>
        ))}
      </div>

      {hasMultipleImages && (
        <>
          <button
            className="carousel-arrow carousel-prev"
            type="button"
            aria-label={`Imagem anterior de ${project.title}`}
            onClick={() => goToImage(activeIndex - 1)}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            className="carousel-arrow carousel-next"
            type="button"
            aria-label={`Próxima imagem de ${project.title}`}
            onClick={() => goToImage(activeIndex + 1)}
          >
            <ChevronRight aria-hidden="true" />
          </button>
          <div className="project-dots" aria-label={`Navegação de imagens de ${project.title}`}>
            {project.images.map((image, imageIndex) => (
              <button
                className={`project-dot${activeIndex === imageIndex ? " is-active" : ""}`}
                type="button"
                aria-label={`Ver imagem ${imageIndex + 1} de ${project.title}`}
                aria-current={activeIndex === imageIndex}
                onClick={() => goToImage(imageIndex)}
                key={image.src}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
