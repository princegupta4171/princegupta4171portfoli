import { useState } from 'react';
import { projects } from '../data/portfolioData';
import { useReveal } from '../hooks/usePortfolio';
import ProjectModal from './ProjectModal';
import styles from './Projects.module.css';

function ProjectCard({ project, onClick }) {
  const [ref, visible] = useReveal();
  const { title, description, tech, github, live } = project;

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      onClick={onClick}
    >
      <div className={styles.cardHeader}>
        <i className="fas fa-folder-open" />
        <div className={styles.links}>
          <a
            href={github}
            title="GitHub"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <i className="fab fa-github" />
          </a>
          <a
            href={live}
            title="Live Demo"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.tech}>
        {tech.map((t, i) => (
          <span key={t}>
            {t}{i < tech.length - 1 && <span className={styles.dot}> · </span>}
          </span>
        ))}
      </div>
      <span className={styles.clickHint}>
        <i className="fas fa-expand-alt" /> Click to view details
      </span>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured <span>Projects</span></h2>
        <div className={styles.grid}>
          {projects.map(project => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
