import React, { Component } from 'react'
import axios from "axios";
import "./Forum.scss"
import ForumList from "../../components/ForumList/ForumList"

const apiLink = "http://localhost:9000/api/user";

export default class Forum extends Component {
  state = {
    isLoading: true,
    userInfo: {}
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
        <>
          <h3 className="forum-form__header">Forum</h3>
            <ForumList />
        </>
      );}
}
