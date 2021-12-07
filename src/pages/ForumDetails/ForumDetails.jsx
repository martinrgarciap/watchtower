import axios from 'axios';
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading"
import CommentForm from "../../components/CommentForm/CommentForm"
import CommentList from "../../components/CommentList/CommentList"
import "./ForumDetails.scss"

const apiLinkUser = "http://localhost:9000/api/user";
const apiLink = "http://localhost:9000/api/forum";

export default class ForumDetails extends Component {
  state = {
    selectedForum: {},
    comments: [],
  };

  componentDidMount() {
    let forumId = this.props.match.params.forumId;
    axios
      .get(`${apiLink}/${forumId}`)
      .then((response) => {
        // console.log(response.data);
        this.setState({
          selectedForum: response.data,
          comments: response.data.comments,
        });
      })
      .catch((error) => console.log(error));
  }

  createComment = (e, comment) => {
    e.preventDefault();
    let token = sessionStorage.getItem("authToken");

    if (!!token) {
      axios
        .get(`${apiLinkUser}/current`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
        //   console.log(res.data);
          axios
            .post(`${apiLink}/${this.state.selectedForum._id}/comment/`, {
              content: comment,
              createdBy: res.data.username,
            })
            .then((result) => {
            //   console.log(result);
              axios
                .get(`${apiLink}/${this.state.selectedForum._id}`)
                .then((result) => {
                  //   console.log(result);
                  this.setState({
                    selectedForum: result.data,
                    comments: result.data.comments,
                  });
                    e.target.reset();
                    console.log(this.state.selectedForum)
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
  };

  render() {
    document.title = "Forum Details";
    if (!this.state.selectedForum) {
      console.log(this.state.selectedForum);
      return (
        <>
          <h2 className="forum-description__message">Page Not Found</h2>
          <Link className="forum-description__button" to="/forum">
            Back to Forums Page
          </Link>
        </>
      );
    }
    if (Object.keys(this.state.selectedForum).length === 0) {
      return (
        <>
          <Loading />
        </>
      );
    }
    return (
      <>
        <div className="forum-details-headers">
          <h1 className="forum-details-headers__header">
            {this.state.selectedForum.title}
          </h1>
          <h3 className="forum-details-headers__description">
            {this.state.selectedForum.description} by:{" "}
            {this.state.selectedForum.createdBy}
          </h3>
        </div>
            <div className="forum-details-comments">
            <CommentList comments={this.state.comments} />
          <CommentForm createComment={this.createComment} />
        </div>
      </>
    );
  }
}
