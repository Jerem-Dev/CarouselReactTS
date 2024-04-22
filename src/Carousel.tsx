import { useEffect, useState } from "react";

export default function Carousel() {
  const slides = [
    { image: "/img/dog0.jpg" },
    { image: "/img/dog1.jpg" },
    { image: "/img/dog2.jpg" },
  ];

  const [index, setIndex] = useState(0);

  function updateDot(index: number) {
    document.querySelectorAll(".dot").forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("selected");
      } else {
        dot.classList.remove("selected");
      }
    });
  }

  useEffect(() => {
    updateDot(index);
  }, [index]);

  //   function handleClickNext() {
  //     setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  //   }

  //   function handleClickPrevious() {
  //     setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  //   }

  function handleClickNext() {
    index === 2 ? setIndex(0) : setIndex(index + 1);
  }

  function handleClickPrevious() {
    index === 0 ? setIndex(2) : setIndex(index - 1);
  }

  return (
    <>
      <div className="main-container">
        <div className="img-container">
          <img src={`/img/dog${index}.jpg`} alt="" />
        </div>
        <div className="dot-container">
          {slides.map((slide, i) => (
            <div key={i} className="dot"></div>
          ))}
        </div>
        <div className="button-container">
          <button onClick={handleClickPrevious}>Photo précédente</button>
          <button onClick={handleClickNext}>Photo suivante</button>
        </div>
      </div>
    </>
  );
}
