import { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId, postComment } from "../utils/nc-news-API";
import { ProfileContext } from "../contexts/Profile";

// create comment form:
// 2 input: username, body
// form calls handle click function
// handle click function

const Comments = () => {
    const [comments, setComments] = useState([]);
    const { article_id } = useParams();
    const { profile, setProfile } = useContext(ProfileContext);

    useEffect(() => {
        fetchCommentsByArticleId(article_id).then((opinions) => {
            setComments(opinions);
        })
    }, [article_id]);

    return (
        <div className="comments">
            <h2>Comments</h2>
            <ul>
                {comments.map((comment) => {
                    return (
                        <div className="comments__body">
                            <form>
                                <label className="comments__input">

                                </label>
                            </form>
                            <li className="comments" key={comment.comment_id}> 
                                <h3>{comment.author}</h3>
                                <p>{comment.votes}</p>
                                <p>{comment.created_at}</p>
                                <p>{comment.body}</p>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Comments;