import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/nc-news-API";

const Topics = ({ articles, setArticles }) => {
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        fetchTopics().then((topicNames) => {
            setTopics(topicNames);
        })
    }, [])

    return (
        <div className="topicList">
            <h2 className="Topics__header">Topics</h2>
            <ul className="Topics__container">
            {topics.map((topic) => {
                return (
                    <li className="Topics__link"key={topic.slug}><Link to={`/topics/${topic.slug}`}>{topic.slug}</Link></li>
                )
            })}
            <li className="Topics__link"><Link to={`/`}>All Articles</Link></li>
            </ul>
        </div>
    )
}

export default Topics;