import React, { Component } from 'react'
import "./ForumList.scss";
import axios from "axios";
import ForumListItem from "../ForumListItem/ForumListItem";

const apiLink = "http://localhost:9000/api/forum";
const apiLinkUser = "http://localhost:9000/api/user";


export default class ForumList extends Component {
  state = {
    forums: [],
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
    e.preventDefault();
    axios
      .post(`${apiLink}/`, {
        title: e.target.title.value,
        description: e.target.description.value,
        createdBy: this.state.userInfo.username,
      })
      .then((response) => {
        
        this.setState({});
      })
      .catch((error) => console.log(error.response.data.message));
  };

  render() {
    document.title = "Watchtower Forum";
    return (
      <div className="forum-list">
        {this.state.forums.map((forum) => {
          return (
            <div className="forum-list-item" key={forum._id}>
              <ForumListItem
                deleteForum={this.deleteForum}
                likeForum={this.likeForum}
                forumId={forum._id}
                forum={forum}
              />
            </div>
          );
        })}
      </div>
    );
  }
}