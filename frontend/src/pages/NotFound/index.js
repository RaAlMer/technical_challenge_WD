import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

export function NotFound() {
  return (
    <>
      <div className={styles.img}></div>
      <div className={styles.text}>
        <h1>404</h1>
        <p>Oops, page not found</p>
        <Link className={styles.link} to="/phones">Go back to phones</Link>
      </div>
    </>
  );
}
