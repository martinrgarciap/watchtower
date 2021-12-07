import React from 'react'
import "./CommentList.scss"

export default function CommentList(props) {
    return (
        <div className="comment-list">
            {
                props.comments.map(comment => {
                    return <div className="comment-list__card">
                        <p className="comment-list__comment">{comment.content}</p>
                        <p className="comment-list__author">{comment.createdBy}</p>
                    </div>
                })
            }
        </div>
    )
}
