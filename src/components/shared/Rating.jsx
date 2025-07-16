// Rating.js
import React from 'react';
import '../../assets/css/Home.css'
import imbd from '../../assets/img/icons/imbd.png'
import tomato from '../../assets/img/icons/tomato.png'

function Rating({ rate, score }) {
  return (
    <div className='rating'>
        <div>
        <img src={imbd} alt="image" />
        <span>{score}</span>

        </div>

        <div>

      <img src={tomato} alt="wdceq" />
      <span>{rate}</span>

        </div>
      
     
    </div>
  );
}

export default Rating;
