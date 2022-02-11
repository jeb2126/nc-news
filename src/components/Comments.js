import { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId, postComment } from "../utils/nc-news-API";
import { ProfileContext } from "../contexts/Profile";
import RemoveComment from "./RemoveComment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [newCommentBody, setNewCommentBody] = useState("");
    const { article_id } = useParams();
    const { profile, setProfile } = useContext(ProfileContext);

    useEffect(() => {
        fetchCommentsByArticleId(article_id).then((opinions) => {
            setComments(opinions);
        })
    }, [article_id, newCommentBody]);

    const postCommentBody = () => {
        postComment(article_id, profile, newCommentBody).then((commentBody) => {
            setComments([...comments, commentBody]);
        }).catch((err) => {
            console.log(err);
        })
    }

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        postCommentBody();
    }

    const handleCommentChange = (event) => {
        if(profile && event.target.value.length > 0) {
            setNewCommentBody(event.target.value);
        } else {
            alert("please log in");
        }
    }

    return (
        <div className="comments">
            <h2>Comments</h2>
            <form onSubmit={handleCommentSubmit}>
                <input type="text" placeholder="Comment here..." name="commentPost" value={newCommentBody} onChange={handleCommentChange}></input>
                <button>Submit</button>
            </form>
            <ul>
                {comments.map((comment) => {
                    return (
                            <li className="comments" key={comment.comment_id}> 
                                <h3>{comment.author}</h3>
                                <p>{comment.votes}</p>
                                <p>{comment.created_at}</p>
                                <p>{comment.body}</p>
                                <RemoveComment comment={comment} commentAuthor={comment.author} comment_id={comment.comment_id}/>
                            </li>
                        
                    )
                })}
            </ul>
        </div>
    )
}

export default Comments;