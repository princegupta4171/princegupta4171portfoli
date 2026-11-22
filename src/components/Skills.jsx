import { skillCategories } from '../data/portfolioData';
import { useReveal } from '../hooks/usePortfolio';
import styles from './Skills.module.css';

function SkillCard({ icon, title, tags }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`${styles.card} ${visible ? styles.visible : ''}`}>
      <h3><i className={icon} /> {title}</h3>
      <div className={styles.tags}>
        {tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My <span>Skills</span></h2>
        <div className={styles.grid}>
          {skillCategories.map(cat => (
            <SkillCard key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
