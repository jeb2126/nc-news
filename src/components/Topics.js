import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/nc-news-API";
// import { sortArticlesByTopicSlug } from "../utils/sortArticlesByTopic";

const Topics = ({ articles, setArticles }) => {
    const [topics, setTopics] = useState([]);
    console.log(articles, "topics");
    useEffect(() => {
        fetchTopics().then((topicNames) => {
            setTopics(topicNames);
        })
    }, [])

    return (
        <div className="topicList">
            <h2>Topics</h2>
            <ul>
            {topics.map((topic) => {
                return (
                    // <button key={topic.slug} 
                    // onClick={() => sortArticlesByTopicSlug(topic.slug)}>{topic.slug}</button>
                    <li key={topic.slug}><Link to={`/topics/${topic.slug}`}>{topic.slug}</Link></li>
                )
            })}
            <li><Link to={`/`}>All Articles</Link></li>
            </ul>
        </div>
    )
}

export default Topics;