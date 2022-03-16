import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId, postComment } from "../utils/nc-news-API";
import { ProfileContext } from "../contexts/Profile";
import RemoveComment from "./RemoveComment";
import Button from "@mui/material/Button";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newCommentBody, setNewCommentBody] = useState("");
  const { article_id } = useParams();
  const { profile, setProfile } = useContext(ProfileContext);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((opinions) => {
      setComments(opinions);
    });
  }, [article_id, newCommentBody]);

  const postCommentBody = () => {
    postComment(article_id, profile, newCommentBody)
      .then((commentBody) => {
        setComments([...comments, commentBody]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    console.log(newCommentBody.length);
    if (profile && newCommentBody.length > 0) {
      postCommentBody();
    } else if (!profile) {
      alert("please login");
    } else if (newCommentBody.length <= 0) {
      alert("Please enter comment");
    }
  };

  const handleCommentChange = (event) => {
    if (profile && event.target.value.length > 0) {
      setNewCommentBody(event.target.value);
    } else {
      alert("please log in");
    }
  };

  return (
    <div className="Comments">
      <h2 className="commentHeader__Comments">Comments</h2>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="Comment here..."
          name="commentPost"
          value={newCommentBody}
          onChange={handleCommentChange}
          className="commentInput__Comments"
          required
        ></input>
        <Button className="commentSubmitBtn__Comments" variant="contained">
          Comment
        </Button>
      </form>
      <ul className="commentList__Comments">
        {comments.map((comment) => {
          return (
            <li className="commentListItem__Comments" key={comment.comment_id}>
              <h3 className="commentListItemHeader__Comments">
                {comment.author}
              </h3>
              <p>{comment.body}</p>
              <p>{comment.votes}</p>
              <p>{comment.created_at}</p>
              <RemoveComment
                comment={comment}
                commentAuthor={comment.author}
                comment_id={comment.comment_id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
