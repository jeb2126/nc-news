import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/nc-news-API";

const Topics = () => {
    const [topics, setTopics] = useState([]);

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
                    <li key={topic.slug}>{topic.slug}
                    
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Topics;