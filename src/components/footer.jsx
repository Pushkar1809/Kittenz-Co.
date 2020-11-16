import React, { Component } from "react";
import { Link } from "react-router-dom";
import youtube from "../assets/icons/icon-youtube.svg";
import facebook from "../assets/icons/icon-fb.svg";
import instagram from "../assets/icons/icon-ig.svg";
import spotify from "../assets/icons/icon-spotify.svg";

class Footer extends Component {
  state = {
    links: [
      { id: 1, src: "/about", value: "Read about our NGO" },
      { id: 2, src: "/shop", value: "Make Donations" },
      { id: 3, src: "/contact", value: "Contact Us" },
    ],
    social: [
      {
        id: 1,
        src: "https://www.youtube.com/",
        icon: youtube,
        value: "youtube",
      },
      {
        id: 2,
        src: "https://www.facebook.com/",
        icon: facebook,
        value: "facebook",
      },
      {
        id: 3,
        src: "https://www.instagram.com/",
        icon: instagram,
        value: "instagram",
      },
      {
        id: 4,
        src: "https://www.spotify.com/",
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
              <Link to={link.src}>{link.value}</Link>
            </li>
          ))}
        </ul>
        <div className="logo-and-social">
          <div className="logo">
            Kittenz <span>Co.</span>
          </div>
          <ul className="social">
            {this.state.social.map((link) => (
              <li key={this.state.links.id} className={link.value}>
                <Link to={link.src}>
                  <img src={link.icon} alt="" />
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
