import React from "react";
import styles from "../css/Featured.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Rating from "./Rating";

function MovieCard({ Name, Category = [], Location_Year, img, rate, score }) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={Name} />
        <div className={styles.cardLabel}>
          {Category[3] && <label>{Category[3]}</label>}
          <FontAwesomeIcon icon={faHeart} className={styles.icon2} />
        </div>
      </div>

      {Location_Year && <label>{Location_Year}</label>}

      <div className={styles.nameWrapper}>
        <h2>{Name}</h2>
      </div>

      <Rating rate={rate} score={score} />

      <div>
        {Category[2] && <label>{Category[2]}</label>}
        {Category[1] && <label>{Category[1]}</label>}
        {Category[0] && <label>{Category[0]}</label>}
      </div>
    </div>
  );
}

export default MovieCard;
