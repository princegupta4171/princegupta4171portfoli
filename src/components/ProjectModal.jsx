import { useEffect } from 'react';
import styles from './ProjectModal.module.css';

export default function ProjectModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose}>
          <i className="fas fa-times" />
        </button>

        {/* Image or Placeholder */}
        {project.image ? (
          <div className={styles.imageBox}>
            <img src={project.image} alt={project.title} />
          </div>
        ) : (
          <div className={styles.imagePlaceholder}>
            <i className="fas fa-image" />
            <span>Project Preview</span>
          </div>
        )}

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>{project.title}</h2>
            <div className={styles.actions}>
              {project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noreferrer" className={styles.actionBtn}>
                  <i className="fab fa-github" /> GitHub
                </a>
              )}
              {project.live !== '#' && (
                <a href={project.live} target="_blank" rel="noreferrer" className={styles.actionBtnPrimary}>
                  <i className="fas fa-external-link-alt" /> Live Demo
                </a>
              )}
            </div>
          </div>

          <p className={styles.detail}>{project.detail}</p>

          <div className={styles.techSection}>
            <h4>Tech Stack</h4>
            <div className={styles.techTags}>
              {project.tech.map(t => <span key={t}>{t}</span>)}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
