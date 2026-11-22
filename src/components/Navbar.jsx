import { navLinks } from '../data/portfolioData';
import { useScrolled, useActiveSection } from '../hooks/usePortfolio';
import styles from './Navbar.module.css';

export default function Navbar() {
  const scrolled = useScrolled();
  const active = useActiveSection(['home', 'about', 'skills', 'projects', 'contact']);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          Prince Gupta<span>.</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map(link => {
            const id = link.toLowerCase();
            return (
              <li key={link}>
                <a
                  href={`#${id}`}
                  className={active === id ? styles.activeLink : ''}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        <a href="/Prince-CV.pdf" download className={styles.cvBtn}>
          Download CV
        </a>
      </div>
    </nav>
  );
}
