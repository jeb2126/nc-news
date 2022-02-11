import { deleteComment } from "../utils/nc-news-API";
import { useState, useContext } from "react";
import { ProfileContext } from "../contexts/Profile";


// delete comment from server
// update state

const RemoveComment = (props) => {
    const commentId = props.comment_id;
    const [comment, setComment] = useState(props.comment);
    const { profile, setProfile } = useContext(ProfileContext);

    

    const expungeComment = () => {
        deleteComment(commentId).then(() => {
            setComment();
        })
    }

    return (
        <div className="remove___comment">
            {profile === props.commentAuthor ? <button onClick={expungeComment}>❌</button> : null}
        </div>
    )
    
}

export default RemoveComment;