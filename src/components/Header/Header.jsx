import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/WatchTower-logos_black.png";

export default class Header extends Component {
    render() {
        return (
          <div className="header">
            <img className="header__logo" src={logo} alt="Logo" />
            <ul className="header__list">
              <li className="header__list-item">
                <Link to="/" className="header__link">
                  HOME
                </Link>
              </li>

              <li className="header__list-item">
                <Link to="/forum" className="header__link">
                  FORUM
                </Link>
              </li>
              <li className="header__list-item">
                <Link to="/emergency" className="header__link header__link--important">
                  EMERGENCY
                </Link>
              </li>
            </ul>
          </div>
        );
    }
}
