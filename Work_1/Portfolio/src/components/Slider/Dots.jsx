import "./Slider.css";

export default function Dots({
  slidesNumber,
  handleCurrentSlide,
  handleAutoPlay,
}) {
  return (
    <>
      {[...Array(slidesNumber).keys()].map((el) => (
        <div
          key={el}
          className="dot"
          onClick={() => {
            handleCurrentSlide(el);
            handleAutoPlay(false);
          }}
        ></div>
      ))}
    </>
  );
}
