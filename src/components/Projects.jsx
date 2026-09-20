import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import './Projects.css';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Selected Projects</span>
          </div>
          <h2 className="section-title">
            Learning. Building. <span className="text-gradient">Improving.</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of production web platforms, developer tools, and interactive experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const primaryUrl = project.liveUrl || project.githubUrl;

  return (
    <article className="project-card glass-card">
      {/* Media Thumbnail */}
      <a
        href={primaryUrl}
        target="_blank"
        rel="noreferrer"
        className="project-thumb-container"
        aria-label={`View ${project.title}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="project-thumb-img"
          loading="lazy"
        />

        <div className="project-thumb-overlay">
          <span className="view-details-pill">
            <ExternalLink size={16} />
            <span>Open Project</span>
          </span>
        </div>
        <div className="project-category-badge">
          {project.category}
        </div>
      </a>

      {/* Card Body */}
      <div className="project-body">
        <h3 className="project-title">
          <a
            href={primaryUrl}
            target="_blank"
            rel="noreferrer"
          >
            {project.title}
          </a>
        </h3>

        <p className="project-desc">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="project-tech-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="badge badge-tech">
              {tag}
            </span>
          ))}
        </div>


      </div>
    </article>
  );
}
