import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Designed &amp; Built by <span>Prince Gupta</span> &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
