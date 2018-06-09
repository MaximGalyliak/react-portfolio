import React, { Component } from "react";

const tab_style = {
  backgroundColor: "transparent",
  transition: "background-color 0.3s linear",
  display: "inline-block",
  height: "100%",
  width: "100%",
  fontSize: "2rem",
  outline: "none",
  border: "none",
  color: "#00e676",
  cursor: "pointer",
  padding: "0.5rem",
};
//style will change on :hover
const hover = {
  backgroundColor: "rgba(0, 230, 118, 0.3)",
};

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }
  handleHover = () => {
    this.setState({ hover: !this.state.hover });
  };
  render() {
    return (
      <button
        style={this.state.hover ? { ...tab_style, ...hover } : tab_style}
        onClick={this.props.onClick}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Tab;
