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
            <h5>Create a Forum</h5>
          <form onSubmit={this.handleSubmit} className="forum-form">
            <label htmlFor="title" className="forum-form__label">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="forum-form__input"
              required
            />
            <label htmlFor="description" className="forum-form__label">
              Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="forum-form__input"
              required
            />
            <button type="submit" className="forum-form__submit-button">
              SUBMIT
            </button>
          </form>
          <div className="forum">
            <div className="forum-headers">
              <p className="forum-headers__labels">Name</p>
              <p className="forum-headers__labels">Description</p>
              <p className="forum-headers__labels">Likes</p>
              <p className="forum-headers__labels">Created On</p>
              <p className="forum-headers__labels">Author</p>
              <p className="forum-headers__labels">Delete</p>
            </div>
            <ForumList />
          </div>
        </>
      );}
}
