import { useState } from "react";
import { patchArticlesVotes } from "../utils/nc-news-API";

const Votes = () => {
   const [ voteCount, setVoteCount ] = useState(articles.Votes);

   const incVotes = (article_id) => {
       setVoteCount((currCount) => currCount + 1);
       patchArticlesVotes(article_id);
   }
    
    return <button onClick={() => incVotes}></button>
}

export default Votes;