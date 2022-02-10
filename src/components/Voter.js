import { useState } from "react";
import { patchArticlesVotes } from "../utils/nc-news-API";

const Voter = (props) => {
    const [voteChange, setVoteChange] = useState(0);

    // create error handling :
    // // create err useState to null
    // // setErr "error"

    const incVotes = (article_id, voteValue) => {
        setVoteChange((currCount) => currCount + voteValue);
        patchArticlesVotes(article_id, voteValue);
        
    }

     return (
    <div className="voteButtons">
     <button onClick={() => incVotes(props.article_id, 1)}>👍 </button>
     <span>{props.articleVotes + voteChange}</span>
     <button onClick={() => incVotes(props.article_id, -1)}>👎</button>
    </div> 
     )
}

export default Voter;