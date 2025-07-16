import React, { useRef } from "react";
import styles from "./css/Featured.module.css";
import index from "./css/index.module.css";
import MovieCard from "./shared/MovieCard";
import ComponentHeader from "./shared/ComponentHeader";
import Posters from '../assets/img/posters';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Scrollbuttons from "./shared/Scrollbuttons";

function FeaturedMovie() {
   const scrollRef = useRef();
 

  return (
    <div className={index.container} style={{ position: "relative" }}>
      <ComponentHeader Name="Featured Movie" />

      <Scrollbuttons scrollRef={scrollRef} />

      <div className={styles.movies} ref={scrollRef}>
        
        <MovieCard 
        img={Posters.strangerThings}
         Name="Stranger things" 
         Category={["Horror", "Action", "Adventure", "Tv Series"]} 
         Location_Year="USA, 2016" 
         rate="86.0/100" 
         score="97%"
          />


        <MovieCard img={Posters.batmanBegins} Name="Batman Begins" Category={["Horror", "Action", "Adventure"]} Location_Year="USA, 2005" rate="82.0/100" score="70%" />
        <MovieCard img={Posters.spiderMan} Name="Spider-man:Into The Spider Verse" Category={["Horror", "Action", "Adventure"]} Location_Year="USA, 2018" rate="84.0/100" score="87%" />
        <MovieCard img={Posters.dunkirk} Name="Dunkirk" Category={["Horror", "Action", "Adventure"]} Location_Year="USA, 2017" rate="78.0/100" score="94%" />
           <MovieCard img={Posters.strangerThings} Name="Stranger things" Category={["Horror", "Action", "Adventure", "Tv Series"]} Location_Year="USA, 2016" rate="86.0/100" score="97%" />
        <MovieCard img={Posters.batmanBegins} Name="Batman Begins" Category={["Horror", "Action", "Adventure"]} Location_Year="USA, 2005" rate="82.0/100" score="70%" />
        <MovieCard img={Posters.spiderMan} Name="Spider-man:Into The Spider Verse" Category={["Horror", "Action", "Adventure"]} Location_Year="USA, 2018" rate="84.0/100" score="87%" />
        <MovieCard img={Posters.dunkirk} Name="Dunkirk" Category={["Horror", "Action", "Adventure"]} Location_Year="USA, 2017" rate="78.0/100" score="94%" />
      </div>
    </div>
  );
}

export default FeaturedMovie;
