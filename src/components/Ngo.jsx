import React, { Component } from "react";
import Title from "./title";
import kittySmall from "../assets/img/save-kitty.png";

class Ngo extends Component {
  state = {};
  render() {
    return (
      <div className="ngo">
        <Title title="Save the " high="un-spoken." />
        <div className="ngo__body">
          <img src={kittySmall} alt="" className="ngo__img" />
          <section>
            <p>
              Kitten Ipsum dolor sit amet discovered siamesecalico peaceful her
              Gizmo peaceful boy rutrum caturday enim lived quis Mauris sit
              malesuada gf’s saved fringilla enim turpis, at mi kitties ham.
              Venenatis belly cat et boy bat dang saved nulla other porta ipsum
              mi chilling cat spoon tellus. Aliquet sapien Sed grandparents
              home, waffles congue amused.
            </p>
            <button>Adopt Right Now</button>
          </section>
        </div>
      </div>
    );
  }
}

export default Ngo;
