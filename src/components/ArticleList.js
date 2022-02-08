import { useState, useEffect } from "react";
import { fetchArticles, fetchArticlesByTopic } from "../utils/nc-news-API";
import { useParams } from "react-router-dom";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const { topic } = useParams();
    console.log(topic);

    // useEffect(() => {
    //     fetchArticles().then((listOfArticles) => {
    //         setArticles(listOfArticles);
    //     })
    // }, []);

    useEffect(() => {
        fetchArticlesByTopic(topic).then((items) => {
            setArticles(items);
        })
    }, [topic]);


    return (
    <div>
        <h2>Article List</h2>
        <button>Top</button>
        <button>New</button>
        <button>Comment Count</button>
        <ul>
            {articles.map((article) => {
                return (
                    <li key={article.article_id} className="articleItems">
                        <h3>{article.title}</h3>
                        <p>{article.author}</p>
                        <p>Comments({article.comment_count})</p>
                        <p>{article.votes}</p>
                    </li>
                )
            })}
        </ul>
    </div>
    )
}

export default ArticleList;