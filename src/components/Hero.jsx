import React from "react";
import styles from "./css/Hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import icon1 from "../assets/img/icons/tv.png";
import icon2 from "../assets/img/icons/Menu.png";
import Rating from "./shared/Rating";
// import IMDB from "../assets/img/icons/imbd.png"
//import tomato from "../assets/img/icons/tomato.png"

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.top}>
        <div className={styles.icon1}>
          <img src={icon1} alt="logo" />
          <span>Movix</span>
        </div>

        <div className={styles.search}>
          <input type="text" placeholder="What do you want to watch?" />
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        </div>

        <div className={styles.icon2}>
          <span> Hi, $Fullname</span>

          <img src={icon2} alt="icon" />
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.info}>
          <h1>
            John Wick 3 :<br /> Parabellum
          </h1>

          <Rating rate="95%" score="86.0/100" />

          <p>
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>

          <label htmlFor="">
            <FontAwesomeIcon icon={faPlayCircle} className={styles.icon} />
            Watch Trailer
          </label>
        </div>
      </div>

      <div className={styles.buttons}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li className={styles.active}>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
