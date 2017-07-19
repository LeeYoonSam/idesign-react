import React, { PropTypes } from "react";
import Radium from "radium";
import { NavigationTab } from "../Navigation";

const Tab = props => (
  <NavigationTab {...props}>
    {props.label}
  </NavigationTab>
);

Tab.propTypes = {
  label: PropTypes.string.isRequired
};

export default Radium(Tab);
