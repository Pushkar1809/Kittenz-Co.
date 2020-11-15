import React, { Component } from "react";

class Hero extends Component {
  state = {};
  render() {
    return (
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            We have the <span>Cutest</span> kitties.
          </h1>
          <button className="hero__cta">Order Now</button>
        </div>
      </div>
    );
  }
}

export default Hero;
