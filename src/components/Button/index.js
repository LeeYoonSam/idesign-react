import React from "react";
import Radium from "radium";

const Button = ({
  fixColor,
  hoverColor,
  fontSize,
  padding,
  children,
  onClick
}) => (
  <button
    style={{
      border: "1px solid " + fixColor,
      backgroundColor: "transparent",
      color: fixColor,
      padding: padding,
      fontSize: fontSize,
      ":hover": {
        backgroundColor: fixColor,
        color: hoverColor
      }
    }}
    onClick={onClick}
  >

    {children}
  </button>
);

Button.propTypes = {
  fixColor: React.PropTypes.string.isRequired,
  hoverColor: React.PropTypes.string.isRequired,
  fontSize: React.PropTypes.number,
  padding: React.PropTypes.number,
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
};

Button.defaultProps = {
  fontSize: 15,
  padding: 20
};

export default Radium(Button);
