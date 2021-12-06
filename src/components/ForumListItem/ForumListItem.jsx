import React from 'react'
import likes from "../../assets/icons/likes.svg"
import { Link } from "react-router-dom";
import "./ForumListItem.scss";

function ForumListItem({ deleteForum, likeForum, forumId, forum }) {
    const onClick = () => {
        deleteForum(forumId)
    }
    const onLike = () => {
        likeForum(forumId)
    }
    return (
      <>
        <Link to={`/${forumId}`} className="forum-list__content">
          {forum.title}
        </Link>
        <p className="forum-list__content">{forum.description}</p>
        <p className="forum-list__content">
          {forum.likes.length}
          <img
            src={likes}
            alt="Like button"
            className="forum-list__like"
            onClick={onLike}
          />
        </p>
        <p className="forum-list__content">{forum.createdAt}</p>
        <p className="forum-list__content">{forum.createdBy}</p>
        <div className="forum-list__buttons">
          <button className="forum-list__delete" onClick={onClick}>
            Delete
          </button>
        </div>
      </>
    );
}

export default ForumListItem
