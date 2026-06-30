"use client";

import { useCallback, useMemo, useState } from "react";
import { projectFilters, projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectLightbox } from "@/components/projects/ProjectLightbox";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [lightbox, setLightbox] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "todos") return projects;
    return projects.filter((project) => project.filters.includes(activeFilter));
  }, [activeFilter]);

  const openLightbox = useCallback((projectIndex, imageIndex) => {
    setLightbox({ projectIndex, imageIndex });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  const moveLightbox = useCallback((direction) => {
    setLightbox((current) => {
      if (!current) return current;
      const project = projects[current.projectIndex];
      const nextImageIndex = ((current.imageIndex + direction) % project.images.length + project.images.length) % project.images.length;
      return { ...current, imageIndex: nextImageIndex };
    });
  }, []);

  return (
    <section className="section section-muted projects" id="projetos" aria-labelledby="projetos-title">
      <div className="container">
        <Reveal className="section-heading centered">
          <p className="eyebrow">Projetos</p>
          <h2 id="projetos-title">Arquitetura com essência, elegância e propósito.</h2>
          <p>
            Uma seleção de projetos que revela cuidado, precisão e sofisticação em soluções pensadas para unir estética,
            funcionalidade e identidade.
          </p>
        </Reveal>

        <Reveal className="project-filters" aria-label="Filtrar projetos" delay={0.06}>
          {projectFilters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                className={`filter-btn${isActive ? " active" : ""}`}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter.value)}
                key={filter.value}
              >
                {filter.label}
              </button>
            );
          })}
        </Reveal>

        <div className="project-grid" aria-live="polite">
          {filteredProjects.map((project) => {
            const projectIndex = projects.indexOf(project);
            return (
              <ProjectCard
                project={project}
                projectIndex={projectIndex}
                onOpenLightbox={openLightbox}
                key={project.title}
              />
            );
          })}
        </div>

        {filteredProjects.length === 0 && <p className="project-empty">Nenhum projeto nesta categoria no momento.</p>}
      </div>

      <ProjectLightbox
        projects={projects}
        activeProjectIndex={lightbox?.projectIndex ?? null}
        activeImageIndex={lightbox?.imageIndex ?? 0}
        onClose={closeLightbox}
        onMove={moveLightbox}
      />
    </section>
  );
}
