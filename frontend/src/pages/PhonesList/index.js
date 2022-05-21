import { useEffect, useState } from "react";
import styles from "./PhonesList.module.scss";
import axios from "axios";
import { Phone } from "../../components";

export function PhonesList() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/phones`)
      .then((res) => {
        setPhones(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.phonesList}>
      {phones.map((phone) => (
        <Phone key={phone.id} name={phone.name} image={phone.id} price={phone.price} />
      ))}
    </div>
  );
}
