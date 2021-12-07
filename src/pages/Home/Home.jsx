import axios from "axios";
import React, { Component } from "react";
import UserCardList from "../../components/UserList/UserList";
import "./Home.scss"

import Loading from "../../components/Loading/Loading"

const apiLink = "http://localhost:9000/api/user";

class Home extends Component {
  state = {
    isLoading: true,
    userInfo: {},
    userList: [],

  };

  componentDidMount() {
    let token = sessionStorage.getItem("authToken");

    // console.log(token)
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
          axios
            .get(`${apiLink}/`)
            .then((response) => {
              // console.log(response)
              this.setState({
                  userList: response.data
                })
              })
        })
    } else {
      this.props.history.push("/login");
    }

  }

  render() {
    const { isLoading, userInfo } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <div className="home-page">
        <div className="home-page__hero">
            <h1 className="home-page__header">Welcome {userInfo.firstName} to WatchTower</h1>
            <h2 className="home-page__subheader">Current members of the neighbourhood: {this.state.userList.length}</h2>
          </div>
          <div className="home-page__user-card-list">
            <UserCardList userList={this.state.userList}/>
          </div>
        </div>
    );
  }
}

export default Home;
