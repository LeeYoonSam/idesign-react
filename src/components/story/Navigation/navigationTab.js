import React, { PropTypes }from "react";
import Radium from "radium";
import Text from "../Text";
import { black, white, geyser, shuttleGray, linkBlue } from "../../../style/color";
import { borderWidth } from "../../../style/border";
import { fontFamily, fontWeight, fontWeightBold } from "../../../style/font";
import speed from "../../../style/speed";
import { propStyle } from "../../../lib/utils";
import { Link } from 'react-router-dom';

const fontSizeUppercase = 11;

function textUppercase() {
  return {
    fontFamily: fontFamily,
    fontSize: `15px`,
    fontWeight: fontWeight,
    lineHeight: 15 / fontSizeUppercase,
    textTransform: "uppercase"
  };
}

const styles = Object.assign(
  {},
  {
    border: "none",
    backgroundColor: white,
    borderBottomColor: white,
    borderBottomStyle: "solid",
    borderBottomWidth: "4px",
    color: black,
    cursor: "pointer",
    display: "inline-block",
    fontWeight: fontWeight,
    height: "100%",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "4px", // offset border width, keep text centered
    textAlign: "center",
    transition: `border-bottom-color ${speed.fast} ease-in-out,
    color ${speed.fast} ease-in-out`,
    verticalAlign: "middle",

    ":hover": {
      color: geyser
    },

    ":active": {
      color: geyser
    },

    ":focus": {
      outline: 0,
      color: linkBlue
    }
  },
  textUppercase()
);

const NavigationTab = props => {
  const { children, onClick, active, style, ...properties } = props;

  // let Link = props.parentLink;
  return (
    <Link to={props.to}>
    <button
      className="NavigationTab"
      onClick={onClick}
      style={[styles, active && { borderBottomColor: linkBlue }, style]}
      {...properties}
    >
      {children}
    </button>

    </Link>
  );
};

NavigationTab.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  style: propStyle
};

export default Radium(NavigationTab);
