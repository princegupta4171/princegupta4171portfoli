import { stats } from '../data/portfolioData';
import { useReveal } from '../hooks/usePortfolio';
import styles from './About.module.css';

export default function About() {
  const [gridRef, gridVisible] = useReveal();

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About <span>Me</span></h2>

        <div
          ref={gridRef}
          className={`${styles.grid} ${gridVisible ? styles.visible : ''}`}
        >
          <div className={styles.imageBox}>
            <img src="/about.jpeg" alt="Prince" />
          </div>

          <div className={styles.textBox}>
            <h3>Who am I?</h3>
            <p>
              I'm <strong>Prince Gupta</strong>, a Full-Stack Developer and Generative AI &amp; Machine
              Learning enthusiast, currently pursuing my B.Tech in Artificial Intelligence
              and Machine Learning.
            </p>
            <p>
              I enjoy building practical, scalable applications that combine modern web
              technologies with AI. My core skills include{' '}
              <strong>React.js, Node.js, Express.js, MongoDB, Python, REST APIs, and Java</strong>,
              along with hands-on experience in{' '}
              <strong>Generative AI, LangChain, RAG, LLMs, and Vector Databases</strong>.
            </p>
            <p>
              Through internships and personal projects, I have gained experience in{' '}
              <strong>full-stack development, Android development and machine learning</strong>.
              I enjoy turning ideas into working products and continuously exploring new
              technologies to solve real-world problems.
            </p>
            <p>
              I'm currently looking for opportunities where I can contribute my technical
              skills, work on challenging projects, and grow as a software developer.
            </p>

            <div className={styles.stats}>
              {stats.map(({ number, label }) => (
                <div key={label} className={styles.stat}>
                  <span className={styles.statNumber}>{number}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
