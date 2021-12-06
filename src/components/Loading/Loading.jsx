import React, { Component } from 'react'
import load from "../../assets/loaders/svg-smil-loaders/tail-spin.svg"

export default class Loading extends Component {
    render() {
        return (
          <div>
            <img alt="loading" src={load} />
          </div>
        );
    }
}
