import React, { useState } from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './Projects.css';

export default function Projects({ projects }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'Creative'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-title">
            Engineered for <span className="text-gradient">Scale & Impact</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of production web platforms, developer tools, and interactive experiences.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
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

        {/* Action Links */}
        <div className="project-card-footer">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-details-btn"
            >
              <span>Live Demo</span>
              <ExternalLink size={15} />
            </a>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project-details-btn"
            >
              <span>View Source</span>
              <ExternalLink size={15} />
            </a>
          )}

          <div className="project-links-group">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="icon-link-btn"
                aria-label="GitHub Repository"
                title="View Source Code"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="icon-link-btn primary-icon-link"
                aria-label="Live Demo"
                title="Launch Live Preview"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
