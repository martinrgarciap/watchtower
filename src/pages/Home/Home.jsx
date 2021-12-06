import axios from "axios";
import React, { Component } from "react";
import Loading from "../../components/Loading/Loading"

const apiLink = "http://localhost:9000/api/user";

class Home extends Component {
  state = {
    isLoading: true,
    userInfo: {},
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
          console.log(res);
          this.setState({
            userInfo: res.data,
            isLoading: false,
          });
        });
    } else {
      this.props.history.push("/login");
    }
  }

  handleLogOut = (e) => {
    e.preventDefault();

    sessionStorage.removeItem("authToken");

    this.props.history.push("/login");
  };

  render() {
    const { isLoading, userInfo } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <div className="dashboard">
        <h1>Dashboard</h1>

        <h2>Welcome! {userInfo.firstName}</h2>

        <button onClick={this.handleLogOut}>Log Out</button>
      </div>
    );
  }
}

export default Home;
