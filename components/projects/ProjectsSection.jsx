"use client";

import { useCallback, useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectLightbox } from "@/components/projects/ProjectLightbox";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsSection() {
  const [lightbox, setLightbox] = useState(null);

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

        {/*
          Project filters temporarily disabled.
          All project cards remain visible while this block is inactive.
        */}

        <div className="project-grid" aria-live="polite">
          {projects.map((project, projectIndex) => {
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
