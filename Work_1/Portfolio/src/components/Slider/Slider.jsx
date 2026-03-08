import Slide from "./Slide";
import Dots from "./Dots";
import { useEffect, useState, useRef } from "react";
import "./Slider.css";
import getDirection from "../../utils/getDirection";
const imagesModule = import.meta.glob("../../assets/slider/*", { eager: true });

export default function Slider() {
  const images = Object.values(imagesModule);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const direction = useRef(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const currentDirection = getDirection(prev, images.length, direction);
        if (currentDirection) {
          const slideIndex = prev > images.length ? 0 : prev + 1;
          return slideIndex;
        } else {
          const slideIndex = prev >= 0 ? prev - 1 : 0;
          return slideIndex;
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [autoPlay, images.length]);

  return (
    <>
      <div className="slider-container">
        <div className="slider-list">
          {Object.values(images).map((value, i) => (
            <Slide
              key={i}
              src={value.default}
              currentSlide={currentSlide}
            ></Slide>
          ))}
        </div>
      </div>
      <Dots
        slidesNumber={images.length}
        handleCurrentSlide={setCurrentSlide}
        handleAutoPlay={setAutoPlay}
      ></Dots>
    </>
  );
}
