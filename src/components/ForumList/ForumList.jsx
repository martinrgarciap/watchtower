import React, { Component } from 'react'
import "./ForumList.scss";
import axios from "axios";
import ForumListItem from "../ForumListItem/ForumListItem";

const apiLink = "http://localhost:9000/api/forum";
const apiLinkUser = "http://localhost:9000/api/user";


export default class ForumList extends Component {
  state = {
    forums: []
  };
  componentDidMount() {
    axios
      .get(`${apiLink}/`)
      .then((result) => {
        console.log(result);
        this.setState({
          forums: result.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteForum = (forumId) => {
    axios
      .delete(`${apiLink}/${forumId}`)
      .then((result) => {
        axios
          .get(`${apiLink}/`)
          .then((result) => {
            console.log(result);
            this.setState({
              forums: result.data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  likeForum = (forumId) => {
    console.log(forumId);

    let token = sessionStorage.getItem("authToken");

    if (!!token) {
      axios
        .get(`${apiLinkUser}/current`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          axios
            .post(`${apiLink}/${forumId}/like`, {
              createdBy: res.data._id,
            })
            .then((result) => {
              console.log(result);
              axios
                .get(`${apiLink}/`)
                .then((result) => {
                  console.log(result);
                  this.setState({
                    forums: result.data,
                  });
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((error) => {
              console.log(error);
            });
        });
    } else {
      this.props.history.push("/login");
    }
  };

  handleSubmit = (e) => {
    e.preventDefault()
    let token = sessionStorage.getItem("authToken");

    if (!!token) {
      axios
        .get(`${apiLinkUser}/current`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          axios
            .post(`${apiLink}/`, {
              title: e.target.title.value,
              description: e.target.description.value,
              createdBy: res.data.username,
            })
            .then((result) => {
              console.log(result);
              axios
                .get(`${apiLink}/`)
                .then((result) => {
                  console.log(result);
                  this.setState({
                    forums: result.data,
                  });
                  e.target.reset();
                })
                .catch((error) => {
                  console.log(error.data.message);
                });
            })
            .catch((error) => {
              console.log(error.data.message);
            });
        });
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    document.title = "Watchtower Forum";
    return (
      <>
        <form onSubmit={this.handleSubmit} className="forum-form">
          <h4 className="forum-form__subheader">Create a Forum</h4>
          <div>
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
          </div>
          <div>
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
          </div>
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
        </div>
        <div className="forum-list">
          {this.state.forums.map((forum) => {
            return (
              <div className="forum-list-item" key={forum._id}>
                <ForumListItem
                  deleteForum={this.deleteForum}
                  likeForum={this.likeForum}
                  forumId={forum._id}
                  forum={forum}
                  userInfo={this.props.userInfo}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}