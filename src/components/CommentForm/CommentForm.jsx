import React, { Component } from 'react'

export default class CommentForm extends Component {
    render() {
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
              <button type="submit" className="forum-form__submit-button">
                SUBMIT
              </button>
            </form>
          </>
        );
    }
}
