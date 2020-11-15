import React, { Component } from "react";
import illus from "../assets/illustrations/pet-adoption.png";
import Title from "./title";

class Bout extends Component {
  state = {};
  render() {
    return (
      <div className="short-about">
        <Title title="What are we all " high="'bout." />
        <div className="bout__body">
          <p>
            Kitten Ipsum dolor sit amet discovered siamesecalico peaceful her
            Gizmo peaceful boy rutrum caturday enim lived quis Mauris sit
            malesuada gf’s saved fringilla enim turpis, at mi kitties ham.
            Venenatis belly cat et boy bat dang saved nulla other porta ipsum mi
            chilling cat spoon tellus. Aliquet sapien Sed grandparents home,
            waffles congue amused
          </p>
          <img src={illus} alt="" className="bout__illus" />
        </div>
      </div>
    );
  }
}

export default Bout;
