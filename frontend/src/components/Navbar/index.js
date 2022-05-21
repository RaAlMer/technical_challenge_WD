import styles from "./Navbar.module.scss";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className={styles.Navbar}>
        <ul className={styles.Navbar__list}>
            <li className={styles.Navbar__list__item}>
                <Link to="/" className={styles.Navbar__list__item__link}>
                    Home
                </Link>
            </li>
            <li className={styles.Navbar__list__item}>
                <Link to="/about" className={styles.Navbar__list__item__link}>
                    About
                </Link>
            </li>
        </ul>
    </nav>
  );
}
