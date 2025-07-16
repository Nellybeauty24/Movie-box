import React, { useRef } from "react";
import ComponentHeader from './shared/ComponentHeader'
import Scrollbuttons from './shared/Scrollbuttons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import styles from './css/Exclusive.module.css'
import index from './css/index.module.css'
import Posters from '../assets/img/posters'

function ExclusiveVdeos() {

   const scrollRef = useRef();
  
  return (
    <div className={index.container}>
        < ComponentHeader 
        Name = 'Exclusive Vidoes'
        />

        <Scrollbuttons scrollRef={scrollRef} />

       <div className={styles.cards}  ref={scrollRef}>

          <div className={styles.card}>

            <img src={Posters.LambTrailer}
             alt="image" />

            {/* <FontAwesomeIcon icon={faPlayCircle} className={styles.icon} />  */}

            <label htmlFor=""  className={styles.label}>Lamb (2021) Trailer</label>

            
          </div>

            {/* div2   */}
           <div className={styles.card}>

            <img src={Posters.TheSuicideSquade}
             alt="image" />

            {/* <FontAwesomeIcon icon={faPlayCircle} className={styles.icon} />  */}

            <label htmlFor=""  className={styles.label}>The Suicide Squad: John Cena Interview </label>

            
          </div>

          {/* div3 */}
          
          <div className={styles.card}>

            <img src={Posters.ThumbNails}
             alt="image" />

            {/* <FontAwesomeIcon icon={faPlayCircle} className={styles.icon} />  */}

            <label htmlFor="" className={styles.label}>Will there be a new era of ho</label>

            
          </div>

          

       </div>
      
    </div>
  )
}

export default ExclusiveVdeos
