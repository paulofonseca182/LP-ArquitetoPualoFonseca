"use client";

import { motion } from "motion/react";
import { ProjectCarousel } from "@/components/projects/ProjectCarousel";

export function ProjectCard({ project, projectIndex, onOpenLightbox }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.42, delay: Math.min(projectIndex, 6) * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
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
    </motion.article>
  );
}
