import PropTypes from "prop-types";

function Button({ children, type, colorVersion, isDisabled }) {
  const handleSubmit = (e) => {
    console.log(e.target.value);
  };

  return (
    <button
      type={type}
      className={`btn btn-${colorVersion}`}
      disabled={isDisabled}
      onSubmit={handleSubmit}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  colorVersion: "primary",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  colorVersion: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
