import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./SignUp.scss";
import axios from "axios";
import backgroundVideo from "../../assets/background/firewatch.mp4";

const apiLink = "http://localhost:9000/api/user";

export default class SignUp extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${apiLink}/register`, {
        username: e.target.username.value,
        password: e.target.password.value,
        email: e.target.email.value,
        firstName: e.target.first.value,
        lastName: e.target.last.value,
        phoneNumber: e.target.phone.value,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    // document.location.href = "/login";
  };
  render() {
    return (
      <div className="signup">
        <video
          className="background-video"
          autoplay="autoplay"
          loop="true"
          muted="true"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <form onSubmit={this.handleSubmit} className="signup-form">
          <h3 className="signup-form__header">SIGN UP</h3>
          <label htmlFor="first" className="signup-form__label">
            First Name
          </label>
          <input
            type="text"
            name="first"
            placeholder="First Name"
            className="signup-form__input"
            required
          />
          <label htmlFor="last" className="signup-form__label">
            Last Name
          </label>
          <input
            type="text"
            name="last"
            placeholder="Last Name"
            className="signup-form__input"
            required
          />
          <label htmlFor="username" className="signup-form__label">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="signup-form__input"
            required
          />
          <label htmlFor="password" className="signup-form__label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="signup-form__input"
            required
          />
          <label htmlFor="verify-password" className="signup-form__label">
            Verify Password
          </label>
          <input
            type="password"
            name="verify-password"
            placeholder="Verify Password"
            className="signup-form__input"
            required
          />
          <label htmlFor="email" className="signup-form__label">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="signup-form__input"
            required
          />

          <label htmlFor="phone" className="signup-form__label">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="signup-form__input"
            required
          />
          <button type="submit" className="signup-form__submit-button">
            Submit
          </button>
          <Link className="signup-form__signup-link" to="/login">
            <button className="signup-form__signup-button">
              ALREADY HAVE AN ACCOUNT? LOG IN
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
