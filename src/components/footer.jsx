import React, { Component } from "react";
import { Link } from "react-router-dom";
import youtube from "../assets/icons/icon-youtube.svg";
import facebook from "../assets/icons/icon-fb.svg";
import instagram from "../assets/icons/icon-ig.svg";
import spotify from "../assets/icons/icon-spotify.svg";

class Footer extends Component {
  state = {
    links: [
      { id: 1, value: "Read about our NGO" },
      { id: 2, value: "Make Donations" },
      { id: 3, value: "Contact Us" },
    ],
    social: [
      {
        id: 1,
        to: "https://www.youtube.com/",
        icon: youtube,
        value: "youtube",
      },
      {
        id: 2,
        to: "https://www.facebook.com/",
        icon: facebook,
        value: "facebook",
      },
      {
        id: 3,
        to: "https://www.instagram.com/",
        icon: instagram,
        value: "instagram",
      },
      {
        id: 4,
        to: "https://www.spotify.com/",
        icon: spotify,
        value: "spotify",
      },
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
        <div className="logo-and-social">
          <div className="logo">Kittenz Co.</div>
          <ul className="social">
            {this.state.social.map((link) => (
              <li key={this.state.links.id}>
                <Link to={link.to}>
                  <img src={link.icon} alt={link.value} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    );
  }
}
export default Footer;
