
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import index from '../css/index.module.css'



function Scrollbuttons({ scrollRef }) {
  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <>
      <button className={index.scrollBtn + " " + index.left} onClick={() => scroll("left")}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className={index.scrollBtn + " " + index.right} onClick={() => scroll("right")}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </>
  );
}


export default Scrollbuttons
