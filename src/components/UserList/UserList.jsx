import React from 'react'
import "./UserList.scss"

export default function UserList(props) {
    return (
        <div className="user-list">
            {
                props.userList.map((user) => {
                    return (
                      <div className="user-card" key={user._id}>
                        <p className="user-card__content--username">
                          {user.username}
                        </p> 
                        <div className="user-card__hidden">
                          <p className="user-card__content">First Name</p>
                          <p className="user-card__content">{user.firstName}</p>
                          <p className="user-card__content">Last Name</p>
                          <p className="user-card__content">{user.lastName}</p>
                          <p className="user-card__content">Phone Number</p>
                          <p className="user-card__content">{user.phone}</p>
                          <p className="user-card__content">
                            Email
                          </p>
                          <p className="user-card__content">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    );
                })
            }
        </div>
    )
}
