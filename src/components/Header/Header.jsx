import React, { Component } from 'react';
import "./Header.scss";
import logo from "../../assets/logo/WatchTower-logos_black.png";

export default class Header extends Component {
    render() {
        return (
          <div className="header">
            <img className="header__logo" src={logo} alt="Logo" />
            <ul className="header__list">
              <li className="header__list-item">HOME</li>
              <li className="header__list-item">FORUM</li>
              <li className="header__list-item">EMERGENCY</li>
            </ul>
          </div>
        );
    }
}
