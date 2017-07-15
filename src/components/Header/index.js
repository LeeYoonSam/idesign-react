import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import { white, geyser, shuttleGray } from "../../style/color";
import { borderWidth } from "../../style/border";

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
              <div style={headerStyle.appHeader}>
                  <div style={headerStyle.appTitle}>{this.props.title}</div>
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