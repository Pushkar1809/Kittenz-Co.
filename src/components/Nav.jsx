import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends Component {
  state = {
    links: [
      { id: 1, value: "Home" },
      { id: 2, value: "Kitties" },
      { id: 3, value: "Contact" },
      { id: 4, value: "About" },
    ],
  };
  render() {
    return (
      <nav>
        <div className="nav__logo">Kittenz Co.</div>
        <ul className="nav__links">
          {this.state.links.map((link) => (
            <li key={this.state.links.id}>
              <Link to="/{link.value}">{link.value}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
