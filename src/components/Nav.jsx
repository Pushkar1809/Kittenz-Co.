import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {
    links: [
      { id: 1, to: "/", value: "Home" },
      { id: 2, to: "/shop", value: "Kitties" },
      { id: 3, to: "/contact", value: "Contact" },
      { id: 4, to: "/about", value: "About" },
    ],
  };
  render() {
    return (
      <nav>
        <div className="nav__logo">Kittenz Co.</div>
        <ul className="nav__links">
          {this.state.links.map((link) => (
            <li key={this.state.links.id}>
              <Link to={link.to}>{link.value}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
