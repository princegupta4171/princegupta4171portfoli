import { contactLinks } from '../data/portfolioData';
import { useReveal } from '../hooks/usePortfolio';
import styles from './Contact.module.css';

function ContactCard({ icon, label, href, external }) {
  const [ref, visible] = useReveal();
  return (
    <a
      ref={ref}
      href={href}
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <i className={icon} />
      <span>{label}</span>
    </a>
  );
}

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In <span>Touch</span></h2>
        <p className={styles.subtitle}>
          I'm currently open to new opportunities. Feel free to reach out!
        </p>
        <div className={styles.grid}>
          {contactLinks.map(link => (
            <ContactCard key={link.label} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
}
