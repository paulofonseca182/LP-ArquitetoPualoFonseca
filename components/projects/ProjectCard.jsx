"use client";

import { ProjectCarousel } from "@/components/projects/ProjectCarousel";

export function ProjectCard({ project, projectIndex, onOpenLightbox }) {
  return (
    <article className="project-card">
      <ProjectCarousel project={project} projectIndex={projectIndex} onOpenLightbox={onOpenLightbox} />
      <div className="project-info">
        <span className="project-kicker">{project.category}</span>
        <strong>{project.title}</strong>
        <p>{project.description}</p>
        <button
          className="project-cta"
          type="button"
          aria-label={`Ver projeto ${project.title}`}
          onClick={() => onOpenLightbox(projectIndex, 0)}
        >
          Ver projeto
        </button>
      </div>
    </article>
  );
}
