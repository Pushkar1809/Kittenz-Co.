import React, { Component } from "react";

class Title extends Component {
  state = {
    title: this.props.title,
    accent: this.props.high,
  };
  render() {
    return (
      <>
        <h1>
          {this.state.title}
          <span className="accent">{this.state.accent}</span>
        </h1>
      </>
    );
  }
}

export default Title;
