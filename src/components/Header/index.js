import React, { PropTypes } from "react";
import Text from "../Text";
import { white, geyser, shuttleGray } from "../../style/color";
import { borderWidth } from "../../style/border";
import { Tab, Tabs } from "../Tabs";
import { BrowserRouter as Router, Link } from 'react-router-dom'

const headerStyle = {
    defaultHeader: {
      display: "flex",
      marginBottom: "2rem",
      padding: "1rem",
      width: "100%",
      backgroundColor: white,
      borderBottom: `${borderWidth} solid ${geyser}`,
      boxSizing: "border-box"
    },

    appHeader: {
        display: "flex",
        width: "100%",
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },

    appTitle: {
        color: '#999999',
        fontSize: 70,
        padding: 40
    }
};

export default class IdesignHeader extends React.Component {

  render() {
      const isIdesign = this.props.isIdesign;

      return (
        <div>
        {isIdesign?(
          <div>
            <div style={headerStyle.appHeader}>
                <div style={headerStyle.appTitle}>{this.props.title}</div>
            </div> 
            
            <Tabs id="tabbedNavigation" navigationHeight={80} navigationSticky={true}>
                <Tab label="iDesign" active></Tab>
                <Tab label="Portfolio"></Tab>
                <Tab label="Price"></Tab>
                <Tab label="Contact"></Tab>
                <Tab label="Chat"></Tab>
            </Tabs>
            
          </div>
          ):(
            <div style={headerStyle.defaultHeader}>
              <Text color={this.props.color} size={"large"} weight={"bold"}>{this.props.title}</Text>
            </div>
          )}
        </div>
      )
  }

  propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
  };

  defaultProps = {
    title: "Header"
  };

}
