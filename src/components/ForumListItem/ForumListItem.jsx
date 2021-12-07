import React from 'react'
import likes from "../../assets/icons/likes.png"
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import "./ForumListItem.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ForumListItem({ deleteForum, likeForum, forumId, forum }) {
    const onClick = () => {
        deleteForum(forumId)
    }
    const onLike = () => {
        likeForum(forumId)
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <>
        <Link to={`/forum/${forumId}`} className="forum-list__content">
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
          <button onClick={handleOpen} className="forum-list__delete">
            Delete
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="forum-list__modal">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Are your sure?
              </Typography>
              <button className="forum-list__delete" onClick={onClick}>
                Delete
              </button>
            </Box>
          </Modal>
        </div>
      </>
    );
}

export default ForumListItem
