import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/WatchTower-logos_white.png";

export default class Header extends Component {
  handleLogOut = (e) => {
    e.preventDefault();

    sessionStorage.removeItem("authToken");
    document.location.href = "/login";
    
  };
  render() {
    return (
      <div className="header">
        <img className="header__logo" src={logo} alt="Logo" />
        <ul className="header__list">
          <li className="header__list-item">
            <Link to="/" className="header__link">
              {/* <img src={home} alt="home icon" className="header__icon" /> */}
              HOME
            </Link>
          </li>

          <li className="header__list-item">
            <Link to="/forum" className="header__link">
              FORUM
            </Link>
          </li>
          <li className="header__list-item">
            <Link
              to="/emergency"
              className="header__link header__link--important"
            >
              EMERGENCY
            </Link>
          </li>
          <li className="header__list-item">
            <button className="header__logout" onClick={this.handleLogOut}>Log Out</button>
          </li>
        </ul>
      </div>
    );
  }
}
