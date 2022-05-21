import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PhoneExpand.module.scss";
import img_0 from "../../public/images/img_0.png";
import img_1 from "../../public/images/img_1.png";
import img_2 from "../../public/images/img_2.png";
import img_3 from "../../public/images/img_3.jpg";
import img_4 from "../../public/images/img_4.jpg";
import img_5 from "../../public/images/img_5.jpg";
import img_6 from "../../public/images/img_6.jpeg";
import img_7 from "../../public/images/img_7.png";
import { Spinner } from "../Spinner";

export function PhoneExpand() {
  const [phone, setPhone] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const images = [img_0, img_1, img_2, img_3, img_4, img_5, img_6, img_7];

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/phones/${id}`)
      .then((res) => {
        setPhone(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.phoneExpand}>
          <div className={styles.phoneExpand__image}>
            <img src={images[id]} alt={phone.name} />
            <div className={styles.basicInfo}>
              <h2>{phone.name}</h2>
              <h1>{phone.price} €</h1>
              <button>Buy it!</button>
            </div>
          </div>
          <div className={styles.phoneExpand__info}>
            <p>
              <b>Description:</b> {phone.description}
            </p>
            <p>
              <b>Manufacturer:</b> {phone.manufacturer}
            </p>
            <p>
              <b>Color:</b> {phone.color}
            </p>
            <p>
              <b>Processor:</b> {phone.processor}
            </p>
            <p>
              <b>RAM:</b> {phone.ram} GB
            </p>
            <p>
              <b>Screen:</b> {phone.screen}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
