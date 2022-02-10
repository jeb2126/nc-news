import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId } from "../utils/nc-news-API";

const Comments = () => {
    const [comments, setComments] = useState([]);
    const { article_id } = useParams();

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
                        <li className="comments" key={comment.comment_id}> 
                            <h3>{comment.author}</h3>
                            <p>{comment.votes}</p>
                            <p>{comment.created_at}</p>
                            <p>{comment.body}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Comments;