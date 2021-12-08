import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./Login.scss";
import axios from "axios";
import backgroundVideo from "../../assets/background/firewatch.mp4";

// import backgroundImage from "../../assets/background/watchtowerImage.jpg"

const apiLink = process.env.REACT_APP_APILINK;

class LogIn extends Component {
  state = {
    errorMessage: ''
  }

    handleSubmit = (e) => {
      e.preventDefault();

        axios.post(`${apiLink}/login`,
            {
            username: e.target.username.value,
            password: e.target.password.value,
          })
          .then((response) => {
            // console.log(response);
            let token = response.data.token;
            sessionStorage.setItem("authToken", token);
            this.props.history.push("/");
          })
          .catch((error) => {
            this.setState({
                errorMessage: error.response.data.message
            })
            // console.log(error.response.data.message)
          });
  }
  render() {
    document.title = "WatchTower Log In";

    return (
          <div className="login">
            <video
              className="background-video"
              autoPlay="autoplay"
              loop={true}
              muted={true}
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <form onSubmit={this.handleSubmit} className="login-form">
              <h3 className="login-form__header">LOGIN</h3>
              <label htmlFor="username" className="login-form__label">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="login-form__input"
                required
              />
              <label htmlFor="password" className="login-form__label">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="login-form__input"
                required
          />
          <p className="login-form__error">{this.state.errorMessage}</p>
              <button type="submit" className="login-form__submit-button">
                LOGIN
              </button>
              <Link className="login-form__signup-link" to="./signup">
                <button className="login-form__signup-button">SIGN UP</button>
              </Link>
            </form>
          </div>
        );
  }
}

export default LogIn;
