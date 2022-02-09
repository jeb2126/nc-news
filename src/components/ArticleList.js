import { useState, useEffect } from "react";
import { fetchArticles, fetchArticlesByTopic, patchArticlesVotes } from "../utils/nc-news-API";
import { useParams, Link, useLocation } from "react-router-dom";


const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [voteChange, setVoteChange] = useState(0);
    const { topic } = useParams();
    
    useEffect(() => {
        fetchArticlesByTopic(topic).then((items) => {
            setArticles(items);
        })
    }, [topic]);

    const handleClick = (topic, sort_by, order) => {
        fetchArticlesByTopic(topic, sort_by, order).then((items) => {
            setArticles(items);
        }) .catch((err) => {
            console.log(err);
        });
    }

    // set article votes in useState
    // Increase votes count by 1
    // make PATCH request to API 
    // create error handling :
    // // create err useState to null
    // // setErr "error"

    const incVotes = (article_id) => {
        console.log("Hi", article_id);
        setVoteChange((currCount) => currCount + 1);
        console.log(voteChange, "votechange")
        patchArticlesVotes(article_id);
        
    }


    return (
    <div>
        <h2>Article List</h2>
        
            <button onClick={() => handleClick(undefined, `votes`, `desc`)}>Top</button>
            <button onClick={() => handleClick(undefined, `created_at`, `desc`)}>New</button>
            <button onClick={() => handleClick(undefined, `comment_count`,`desc`)}>Comment count</button>
    
        <ul>
            {articles.map((article) => {
                return (
                    <div>
                        <li key={article.article_id} className="articleItems">
                            <h3>{article.title}</h3>
                            <p>{article.author}</p>
                            <p>Comments({article.comment_count})</p>
                            <button onClick={() => incVotes(article.article_id)}>👍 {article.votes + voteChange}</button>
                        </li>
                    </div>
                )
            })}
        </ul>
    </div>
    )
}

export default ArticleList;