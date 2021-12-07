import React from 'react'

function CommentForm(props) {
    const handleSubmit = (e) => {
        e.preventDefault()
        props.createComment(e,e.target.comment.value)
        // this.props.createComment(e,e.target.comment.value)
    }
    return (
        <>
            
        <form onSubmit={handleSubmit} className="forum-details-form">
            <h4 className="forum-details-form__subheader">
            Create a comment
            </h4>
            <div>
            <label htmlFor="title" className="forum-details-form__label">
                Comment
            </label>
            <input
                type="text"
                name="comment"
                placeholder="Enter Comment"
                className="forum-details-form__input"
                required
            />
            </div>
            <button
            type="submit"
            className="forum-details-form__submit-button"
            >
            SUBMIT
            </button>
        </form>
        </>
    );
}

export default CommentForm;
