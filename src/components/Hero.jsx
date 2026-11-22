import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <div className={styles.text}>
          <p className={styles.greeting}>Hello, I'm</p>
          <h1 className={styles.name}>Prince Gupta</h1>
          <h2 className={styles.role}>Full-Stack Developer &amp; GenAI Enthusiast</h2>
          <p className={styles.tagline}>
            Building scalable web apps &amp; AI-powered solutions.
          </p>
          <div className={styles.gateBadge}>
            <i className="fas fa-award" />
            <span>GATE 2026 Qualified</span>
          </div>
          <div className={styles.cta}>
            <a href="#projects" className={styles.btnPrimary}>View My Work</a>
            <a href="#contact"  className={styles.btnSecondary}>Get In Touch</a>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <div className={styles.imageCircle}>
            <img src="/profile.png" alt="Prince" />
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span />
      </div>
    </section>
  );
}
