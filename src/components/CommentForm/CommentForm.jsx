import React from 'react'
import "./CommentForm.scss"

function CommentForm(props) {
    const handleSubmit = (e) => {
        e.preventDefault()
        props.createComment(e,e.target.comment.value)
        // this.props.createComment(e,e.target.comment.value)
    }
    return (
      <>
        <form onSubmit={handleSubmit} className="forum-details-form">
          <div className="forum-details-form__send">
            <input
              type="text"
              name="comment"
              placeholder="Enter Comment"
              className="forum-details-form__input"
              required
            />
            <button type="submit" className="forum-details-form__submit-button">
              SEND
            </button>
          </div>
        </form>
      </>
    );
}

export default CommentForm;
