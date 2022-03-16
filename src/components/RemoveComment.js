import { deleteComment } from "../utils/nc-news-API";
import { useState, useContext } from "react";
import { ProfileContext } from "../contexts/Profile";
import Button from "@mui/material/Button";

const RemoveComment = (props) => {
  const commentId = props.comment_id;
  const [comment, setComment] = useState(props.comment);
  const { profile, setProfile } = useContext(ProfileContext);

  const expungeComment = () => {
    deleteComment(commentId).then(() => {
      setComment();
    });
  };

  return (
    <div className="remove___comment">
      {profile === props.commentAuthor ? (
        <Button onClick={expungeComment}>❌</Button>
      ) : null}
    </div>
  );
};

export default RemoveComment;
