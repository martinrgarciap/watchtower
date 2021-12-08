import React, { Component } from 'react'
import load from "../../assets/loaders/svg-smil-loaders/tail-spin.svg"
import "./Loading.scss"

export default class Loading extends Component {
    render() {
        return (
          <div className="loading">
            <img className="loading__image" alt="loading" src={load} />
          </div>
        );
    }
}
