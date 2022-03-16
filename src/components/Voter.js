import { useState } from "react";
import { patchArticlesVotes } from "../utils/nc-news-API";
import { Button } from "@mui/material";

const Voter = (props) => {
  const [voteChange, setVoteChange] = useState(0);

  const incVotes = (article_id, voteValue) => {
    setVoteChange((currCount) => currCount + voteValue);
    patchArticlesVotes(article_id, voteValue);
  };

  return (
    <div className="voteButtons">
      <Button
        onClick={() => incVotes(props.article_id, 1)}
        className="button__voter"
      >
        👍
      </Button>
      <span>{props.articleVotes + voteChange}</span>
      <Button
        onClick={() => incVotes(props.article_id, -1)}
        className="button__voter"
      >
        👎
      </Button>
    </div>
  );
};

export default Voter;
