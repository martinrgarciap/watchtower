import React, { Component } from "react";
import axios from "axios";
import wave from "../../assets/loaders/svg-smil-loaders/rings.svg"
import "./Emergency.scss"

const apiLink = "http://localhost:9000/api/user";
const apiLinkTwitter = "http://localhost:9000/api/twitter";

export default class Emergency extends Component {
  state = {
    isLoading: true,
    userInfo: {},
    pressed: "emergency__call",
    pressedButton: "emergency__button",
  };

  componentDidMount() {
    let token = sessionStorage.getItem("authToken");

    if (!!token) {
      axios
        .get(`${apiLink}/current`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          // console.log(res);
          this.setState({
            userInfo: res.data,
            isLoading: false,
          });
        });
    } else {
      this.props.history.push("/login");
    }
  }

  onClick = () => {
    let message = `${this.state.userInfo.firstName} ${this.state.userInfo.lastName} is has pressed the emergency button, please keep a look out and be safe`;

    axios
      .post(`${apiLinkTwitter}/tweet`, {
        tweet: message,
      })
      .then((res) => {
        console.log(res);
      });
    this.setState({
      pressed: "emergency__call emergency__call--active",
      pressedButton: "emergency__button emergency__button--active",
    });
  };
  render() {
    return (
      <div className="emergency">
        <button className={this.state.pressedButton} onClick={this.onClick}>
          Press for Emergency
          <img src={wave} alt="Emergency wave" className={this.state.pressed} />
        </button>
      </div>
    );
  }
}
