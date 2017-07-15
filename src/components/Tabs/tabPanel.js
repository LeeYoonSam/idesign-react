import React, { PropTypes } from "react";
import Radium from "radium";
import { propStyle } from "../../lib/utils";
import Container from "../Container";

const TabPanel = props => (
  <div className="TabPanel" style={props.style} role="tabpanel" {...props}>
    <Container>
      {props.children}
    </Container>
  </div>
);

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  style: propStyle
};

export default Radium(TabPanel);
