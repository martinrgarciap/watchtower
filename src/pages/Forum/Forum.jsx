import React, { Component } from 'react'
import axios from "axios";
import "./Forum.scss"

const apiLink = "http://localhost:9000/api/user";

export default class Forum extends Component {
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
  render() {
      return (
        <div className="forum">
          <div className="forum-headers">
            <p className="forum-headers__labels">Name</p>
            <p className="forum-headers__labels">Description</p>
            <p className="forum-headers__labels">Likes</p>
            <p className="forum-headers__labels">Created On</p>
            <p className="forum-headers__labels">Author</p>
              </div>
              
        </div>
      );}
}
