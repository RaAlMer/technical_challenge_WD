import { PhoneExpand } from "../../components/PhoneExpand";
import styles from "./PhoneDetails.module.scss";

export function PhoneDetails() {
  return (
    <div className={styles.phoneDetails}>
      <PhoneExpand />
    </div>
  );
}