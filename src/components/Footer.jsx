import React from 'react'
import index from "./css/index.module.css";
import facebook from '../assets/img/icons/facebook.png'
import instagram from '../assets/img/icons/instagram.png'
import twitter from '../assets/img/icons/twitter.png'
import youtube from '../assets/img/icons/youtube.png'

function Footer() {
  return (
    <div>
   
   <div className={index.container}>

      <div className={index.footer}>

         <div className={index.socialLinks}>
          <a href="#">
              <img src={facebook} alt="facebook" />
          </a>

          <a href="#">
              <img src={instagram} alt="instagram" />
          </a>

          
          <a href="#">
              <img src={twitter} alt="twitter" />
          </a>

          
          <a href="#">
              <img src={youtube} alt="youtube" />
          </a>


      </div>

      <div className={index.links}>
         <a href="">Conditions of Use</a>
         <a href="">Privacy & Policy</a>
        <a href="">Press Room</a>

      </div>
      <div className={index.copyRight}>
        &copy; 2021 Movix
        
      </div>

      </div>
      
   </div>


    </div>
  )
}

export default Footer
