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

    const handleClick = (sort_by, order) => {
        fetchArticlesByTopic(topic, sort_by, order).then((items) => {
            setArticles(items);
        }) .catch((err) => {
            console.log(err);
        });
    }

    return (
    <div>
        <h2 className="articleList__header">Article List</h2>
        <div className="articleList__buttons">
            <button className="articleList__buttonItem" onClick={() => handleClick(`votes`, `desc`)}>Top</button>
            <button className="articleList__buttonItem" onClick={() => handleClick(`created_at`, `desc`)}>New</button>
            <button className="articleList__buttonItem" onClick={() => handleClick(`comment_count`,`desc`)}>Comment count</button>
        </div>
    
        <ul className="articleList__container">
            {articles.map((article) => {
                return (
                        <li key={article.article_id} className="articleList__items">
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