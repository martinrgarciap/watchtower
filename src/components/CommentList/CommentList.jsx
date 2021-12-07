import React from 'react'
import likes from "../../assets/icons/likes.png";
import "./CommentList.scss"

export default function CommentList(props) {

    const onLike = (commentId) => {
        props.addLike(commentId)
    }
    return (
        <div className="comment-list">
            {
                props.comments.map(comment => {
                    return (
                      <div className="comment-list__card" key={comment._id}>
                        <p className="comment-list__comment">
                          {comment.content}
                        </p>
                        <div className="comment-list__info">
                          <p className="comment-list__likes">
                            {comment.likes.length}
                            <img
                              src={likes}
                              alt="Like button"
                              className="forum-list__like"
                                        onClick={() => {onLike(comment._id)}}
                            />
                          </p>
                          <p className="comment-list__author">
                            {comment.createdBy}
                          </p>
                        </div>
                      </div>
                    );
                })
            }
        </div>
    )
}
