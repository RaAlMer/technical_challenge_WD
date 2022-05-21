import styles from "./Footer.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <p className={styles.Footer__text}>
      &#169; Raúl Alonso
        <a href="https://www.linkedin.com/in/raulalonsomerino/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/RaAlMer">
          <FaGithub />
        </a>
      </p>
    </footer>
  );
}
