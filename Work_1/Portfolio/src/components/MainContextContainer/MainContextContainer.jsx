import catProgger from "../../assets/catProgger.png";
import "./MainContextContainer.css";

export default function MainContextContainer() {
  return (
    <div className="mainContainer">
      <img
        className="mainContainer__image"
        src={catProgger}
        alt="Cat Programmer"
      ></img>
      <div className="mainContainer__info">
        <p>Программист c 2020г, опыт работы:</p>
        <p>С++</p>
        <p>Qt</p>
        <p>OpenGL</p>
        <p>Немного HTML</p>
        <p>Немного CSS</p>
        <p>Немного JavaScript</p>
        <p>Совсем чуть-чуть React</p>
      </div>
    </div>
  );
}
