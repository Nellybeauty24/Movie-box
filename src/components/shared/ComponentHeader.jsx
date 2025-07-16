import React from "react";
import styles from "../css/Featured.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function ComponentHeader({Name}) {
  return (
    <div className={styles.top}>
           <h1>{Name}</h1>
           <button>
             see more
             <FontAwesomeIcon icon={faCaretRight} className={styles.icon} />
           </button>
         </div>
  )
}

export default ComponentHeader
