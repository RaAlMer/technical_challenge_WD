import styles from "./Navbar.module.scss";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className={styles.Navbar}>
        <ul className={styles.Navbar__list}>
            <li className={styles.Navbar__list__item}>
                <Link to="/phones" className={styles.Navbar__list__item__link}>
                    Phones
                </Link>
            </li>
        </ul>
    </nav>
  );
}
