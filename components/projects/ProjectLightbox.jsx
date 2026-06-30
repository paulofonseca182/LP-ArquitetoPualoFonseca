"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useSwipe } from "@/hooks/useSwipe";

export function ProjectLightbox({ projects, activeProjectIndex, activeImageIndex, onClose, onMove }) {
  const modalPanelRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const project = activeProjectIndex === null ? null : projects[activeProjectIndex];
  const image = project?.images[activeImageIndex];
  const hasMultipleImages = Boolean(project && project.images.length > 1);

  useBodyScrollLock(Boolean(project));

  const swipeHandlers = useSwipe((direction) => {
    onMove(direction === "next" ? 1 : -1);
  }, 48);

  useEffect(() => {
    if (!project) {
      setIsOpen(false);
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setIsOpen(true);
      modalPanelRef.current?.focus();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [project]);

  useEffect(() => {
    if (!project) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onMove(-1);
      if (event.key === "ArrowRight") onMove(1);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onMove, project]);

  const counter = useMemo(() => {
    if (!project) return "";
    return `${activeImageIndex + 1} / ${project.images.length}`;
  }, [activeImageIndex, project]);

  if (!project || !image) return null;

  return (
    <section
      className={`project-modal${isOpen ? " is-open" : ""}`}
      id="project-modal"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      aria-modal="true"
      role="dialog"
      {...swipeHandlers}
    >
      <button className="modal-backdrop" type="button" aria-label="Fechar imagem ampliada" onClick={onClose} />
      <article className="modal-panel project-lightbox" tabIndex="-1" ref={modalPanelRef}>
        <button className="modal-close" type="button" aria-label="Fechar modal" onClick={onClose}>
          <X aria-hidden="true" />
        </button>
        {hasMultipleImages && (
          <button className="modal-nav modal-prev" type="button" aria-label={`Imagem anterior de ${project.title}`} onClick={() => onMove(-1)}>
            <ChevronLeft aria-hidden="true" />
          </button>
        )}
        <figure className="modal-figure">
          <img src={image.src} alt={image.alt} />
          <figcaption className="modal-caption">
            <span className="project-kicker" id="modal-category">
              {project.category}
            </span>
            <strong id="modal-title">{project.title}</strong>
            <span className="modal-counter" id="modal-counter">
              {counter}
            </span>
            <p id="modal-description">{project.description}</p>
          </figcaption>
        </figure>
        {hasMultipleImages && (
          <button className="modal-nav modal-next" type="button" aria-label={`Próxima imagem de ${project.title}`} onClick={() => onMove(1)}>
            <ChevronRight aria-hidden="true" />
          </button>
        )}
      </article>
    </section>
  );
}
