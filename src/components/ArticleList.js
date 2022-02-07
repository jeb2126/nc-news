import { useState, useEffect } from "react";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        
    }, []);


    return (
    <div>
        <h2>ArticleList</h2>
        <h3>Top</h3>
        <h3>New</h3>
        <h3>Comment Count</h3>
    </div>
    )
}

export default ArticleList;