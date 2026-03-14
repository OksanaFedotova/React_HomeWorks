import "./Button.css";

export default function Button({ label, disabled, onClick }) {
  return (
    <>
      <button className="customButton" disabled={disabled} onClick={onClick}>
        {label}
      </button>
    </>
  );
}
