import React from "react";
import Radium from "radium";
import Text from "../Text";
import PropTypes from "prop-types";
import { black, white, geyser, shuttleGray, linkBlue } from "../../style/color";
import { fontWeight, fontWeightBold } from "../../style/font";
import speed from "../../style/speed";
import { navbar } from "../../style/zIndex";
import Container from "../Container";

const styles = {
  nav: {
    position: "relative",
    textAlign: "center",
    transform: "translateZ(0)",
    zIndex: navbar
  },

  container: {
    borderBottom: `1px solid ${geyser}`,
    overflow: "hidden"
  },

  scroller: {
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap"
  }
};

const Navigation = props => {
  const { children, height, sticky, style, ...properties } = props;

  return (
    <nav
      className="Navigation"
      style={[styles.nav, sticky && { position: "sticky", top: 0 }, style]}
      {...properties}
    >
      <Container style={[styles.container, { height: `${height + 1}px` }]}>
        <div style={[styles.scroller, { height: `${height + 15}px` }]}>
          <div style={{ height: `${height}px` }}>
            {children}
          </div>
        </div>
      </Container>
    </nav>
  );
};

Navigation.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  height: PropTypes.number,
  sticky: PropTypes.bool,
  style: PropTypes.style
};

Navigation.defaultProps = {
  height: 80
};

export default Radium(Navigation);
