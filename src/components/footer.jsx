import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {
    links: [
      { id: 1, value: "Read about our NGO" },
      { id: 2, value: "Make Donations" },
      { id: 3, value: "Contact Us" },
    ],
  };
  render() {
    return (
      <footer>
        <ul className="footer__links">
          {this.state.links.map((link) => (
            <li key={this.state.links.id}>
              <Link to="/{link.value}">{link.value}</Link>
            </li>
          ))}
        </ul>
      </footer>
    );
  }
}
export default Footer;
