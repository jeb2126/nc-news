import { useState, useEffect} from "react";
import { fetchArticleByArticleId } from "../utils/nc-news-API";
import { useParams } from "react-router-dom";
import Comments from "./Comments";


const Article = () => {
    
    const [article, setArticle] = useState({});
    const { article_id } = useParams();

    useEffect(() => {
        fetchArticleByArticleId(article_id).then((item) => {
            setArticle(item);
        })
    }, [article_id]);

    return (
        <article>
            <h1>{article.title}</h1>
            <h2>{article.author}</h2>
            {/* votes section */}
            <p>{article.body}</p>
            <p>Article Votes: {article.votes}</p>
            <Comments />
        </article>
    )
}

export default Article;