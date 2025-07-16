import React, { useRef } from "react";
import index from './css/index.module.css'
import styles from './css/FeaturedCasts.module.css'
import ComponentHeader from './shared/ComponentHeader'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Scrollbuttons from './shared/Scrollbuttons';
import Posters from '../assets/img/posters'

function FeaturedCasts() {
     const scrollRef = useRef();
  return (
    <div className={index.container}>
        <ComponentHeader
        Name="Featured Cast" 
         />

          <Scrollbuttons scrollRef={scrollRef} />

        <div className={styles.Casts}  ref={scrollRef}>

            <div className={styles.cast}>
                <img src={Posters. keanuReeves} alt="image" />
                <label htmlFor="" className={styles.label}>Keanu Reaves</label>
            </div>

            {/* div2 */}
             <div className={styles.cast}>
                <img src={Posters.  ryanReynolds} alt="image" />
                <label htmlFor="" className={styles.label}>Ryan Reynolds</label>
            </div>

            {/* div3 */}

             <div className={styles.cast}>
                <img src={Posters. timothee} alt="image" />
                <label htmlFor="" className={styles.label}>Timothee Chalamet</label>
            </div>

            {/* div4 */}

             <div className={styles.cast}>
                <img src={Posters. chloeGrace} alt="image" />
                <label htmlFor="" className={styles.label}>Chloe Grace Moretz</label>
            </div>
        </div>
      
    </div>
  )
}

export default FeaturedCasts
