import React, { Component } from 'react'
import "./ForumList.scss";
import axios from "axios";
import ForumListItem from "../ForumListItem/ForumListItem";

const apiLink = "http://localhost:9000/api/forum";


export default class ForumList extends Component {
    state = {
        forums: []
    }
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

    deleteForum = (e, forumId) => {
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
    }

    likeForum = (e, forumId) => {
        axios
            .delete(`${apiLink}/${forumId}/like`)
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
    }

    render() {
        document.title = "Watchtower Forum"
        return (
            <div className="forum-list">
                {
                    this.state.forums.map(forum => {
                        return (
                        <div className="forum-list-item" key={forum._id}>
                                <ForumListItem deleteForum={this.deleteForum} likeForum={this.likeForum} forumId={forum._id} forum={forum} />
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}