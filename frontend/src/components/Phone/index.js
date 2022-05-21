import styles from "./Phone.module.scss";
import img_0 from "../../public/images/img_0.png";
import img_1 from "../../public/images/img_1.png";
import img_2 from "../../public/images/img_2.png";
import img_3 from "../../public/images/img_3.jpg";
import img_4 from "../../public/images/img_4.jpg";
import img_5 from "../../public/images/img_5.jpg";
import img_6 from "../../public/images/img_6.jpeg";
import img_7 from "../../public/images/img_7.png";
import { Link } from "react-router-dom";

export function Phone({ id, name, image, price }) {
  const images = [img_0, img_1, img_2, img_3, img_4, img_5, img_6, img_7];
  return (
    <Link to={`/phones/${id}`} className={styles.phone}>
      <h2>{name}</h2>
      <img className={styles.img} src={images[image]} alt={name} />
      <p>{price} €</p>
    </Link>
  );
}
