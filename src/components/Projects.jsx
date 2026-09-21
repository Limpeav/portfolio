import React from 'react';
import { FolderGit2 } from 'lucide-react';

// Inline GitHub mark SVG (lucide-react doesn't ship this icon in all versions)
function GithubIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
    </svg>
  );
}
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
  const githubUrl  = project.githubUrl || primaryUrl;

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
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="view-details-pill"
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon size={16} />
            <span>View on GitHub</span>
          </a>
        </div>
        {project.liveUrl && (
          <div className="project-live-badge">
            <span className="live-dot" />
            Live
          </div>
        )}
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
