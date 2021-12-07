import React from 'react'
import likes from "../../assets/icons/likes.png";
import likesDisabled from "../../assets/icons/likes-disabled.png";
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
                      <div
                        className={
                          comment.createdBy === props.userInfo.username
                            ? "comment-list__card comment-list__card--selected"
                            : "comment-list__card"
                        }
                        key={comment._id}
                      >
                        <p className="comment-list__comment">
                          {comment.content}
                        </p>
                        <div className="comment-list__info">
                          <p className="comment-list__likes">
                            {comment.likes.length}
                            <img
                              src={
                                comment.likes.includes(props.userInfo.username)
                                  ? likes
                                  : likesDisabled
                              }
                              alt="Like button"
                              className="forum-list__like"
                              onClick={() => {
                                onLike(comment._id);
                              }}
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
