import cross from "../../assets/cross.png";
import "./Modal.css";

export default function Modal({ handleClick }) {
  return (
    <div className="modal">
      Введите телефон и email для связи:
      <input label="Email" placeholder="Email"></input>
      <input label="Telephone" placeholder="Telephone"></input>
      <div onClick={handleClick}>
        <img src={cross} alt="фото"></img>
      </div>
    </div>
  );
}
