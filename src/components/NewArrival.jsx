import React, { useRef } from "react";
import styles from "./css/Featured.module.css";
import MovieCard from "./shared/MovieCard";
import Posters from '../assets/img/posters'
import ComponentHeader from './shared/ComponentHeader';
import Scrollbuttons from './shared/Scrollbuttons';
function NewArrival() {
   const scrollRef = useRef();
   return (
    <div className={styles.container}>
      < ComponentHeader
      Name = "New Arrivals" />

       <Scrollbuttons scrollRef={scrollRef} />
      <div className={styles.movies}  ref={scrollRef}>
        <MovieCard
          img = {Posters.dune}
          Name="Stranger things"
          Category={["Horror", "Action", "Adventure", "Tv Series"]}
          Location_Year="USA, 2021"
          rate="84.0/100"
          score="75%"
        />

         <MovieCard
          img = {Posters. noTimeToDie}
          Name= " noTimeToDie"
          Category={["Horror", "Action", "Adventure",]}
          Location_Year="USA, 2021"
          rate="76.0/100"
          score="68%"
        />

         <MovieCard
         img={Posters. shangChi}
          Name="Shang-Chi and thr Legend of the Ten Rings"
          Category={["Horror", "Action", "Adventure"]}
          Location_Year="USA, 2021"
          rate="71.100"
          score="71%"
        />

         <MovieCard
          img={Posters.dontBreath}
          Name="dontBreath"
          Category={["Horror", "Action", "Adventure"]}
          Location_Year="USA, 2017"
          rate="61.0/100"
          score="46%"
        />


         <MovieCard
          img = {Posters.dune}
          Name="Stranger things"
          Category={["Horror", "Action", "Adventure", "Tv Series"]}
          Location_Year="USA, 2021"
          rate="84.0/100"
          score="75%"
        />

         <MovieCard
          img = {Posters. noTimeToDie}
          Name= " noTimeToDie"
          Category={["Horror", "Action", "Adventure",]}
          Location_Year="USA, 2021"
          rate="76.0/100"
          score="68%"
        />

         <MovieCard
         img={Posters. shangChi}
          Name="Shang-Chi and thr Legend of the Ten Rings"
          Category={["Horror", "Action", "Adventure"]}
          Location_Year="USA, 2021"
          rate="71.100"
          score="71%"
        />

         <MovieCard
          img={Posters.dontBreath}
          Name="dontBreath"
          Category={["Horror", "Action", "Adventure"]}
          Location_Year="USA, 2017"
          rate="61.0/100"
          score="46%"
        />
      </div>
    </div>
  );
}

export default NewArrival
