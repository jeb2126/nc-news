import { useState, useEffect } from "react";
import { fetchArticles, fetchArticlesByTopic } from "../utils/nc-news-API";
import { useParams, Link, useLocation } from "react-router-dom";
import Votes from "./Votes";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const { topic } = useParams();
    
    useEffect(() => {
        fetchArticlesByTopic(topic).then((items) => {
            console.log(items);
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
                            {/* <button onClick={() => handleClickVotes}>{article.votes}</button> */}
                        </li>
                        <li><Votes articles={articles} setArticles={setArticles}/></li>
                    </div>
                )
            })}
        </ul>
    </div>
    )
}

export default ArticleList;