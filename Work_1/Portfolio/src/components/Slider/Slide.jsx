import "./Slider.css";

export default function Slide({ currentSlide, src }) {
  return (
    <div
      className="slide-list-container"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      <img className="slide-img" src={src}></img>
    </div>
  );
}
