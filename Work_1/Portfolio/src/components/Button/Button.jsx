import PropTypes from "prop-types";
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

Button.PropTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
