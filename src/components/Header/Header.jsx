import React, { Component } from 'react';
import "./Header.scss";
import logo from "../../assets/logo/WatchTower-logos_black.png";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="header__logo" src={logo} alt="Logo" />
                <h1 className="header__text">Hello</h1>
            </div>
        )
    }
}
