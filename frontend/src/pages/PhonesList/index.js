import { useEffect, useState } from "react";
import styles from "./PhonesList.module.scss";
import axios from "axios";
import { Phone, Spinner } from "../../components";

export function PhonesList() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/phones`)
      .then((res) => {
        setPhones(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.phonesList}>
      {loading ? (
        <Spinner />
      ) : (
        phones.map((phone) => (
          <Phone
            key={phone.id}
            id = {phone.id}
            name={phone.name}
            image={phone.id}
            price={phone.price}
          />
        ))
      )}
    </div>
  );
}
