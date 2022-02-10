import { useState, useEffect } from "react";
import { fetchArticles, fetchArticlesByTopic, patchArticlesVotes } from "../utils/nc-news-API";
import { useParams, Link, useLocation } from "react-router-dom";
import Voter from "./Voter";
import Article from "./Article";


const ArticleList = () => {
    const [articles, setArticles] = useState([]);
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

    return (
    <div>
        <h2>Article List</h2>
        
            <button onClick={() => handleClick(undefined, `votes`, `desc`)}>Top</button>
            <button onClick={() => handleClick(undefined, `created_at`, `desc`)}>New</button>
            <button onClick={() => handleClick(undefined, `comment_count`,`desc`)}>Comment count</button>
    
        <ul>
            {articles.map((article) => {
                return (
                        <li key={article.article_id} className="articleItems">
                            <h3><Link to={`/articles/${article.article_id}`}>{article.title}</Link></h3> 
                            <p>{article.author}</p>
                            <p>Comments({article.comment_count})</p>
                            <Voter articleVotes={article.votes} article_id={article.article_id}/>
                        </li>
                )
            })}
        </ul>
    </div>
    )
}

export default ArticleList;