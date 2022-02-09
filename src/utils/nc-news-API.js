import axios from 'axios';

const ncNewsApi = axios.create({
    baseURL: 'https://james-barnes-nc-news.herokuapp.com/api',
});

export const fetchTopics = () => {
    return ncNewsApi.get(`/topics`).then((res) => {
        return res.data.topics;
    });
}


export const fetchArticlesByTopic = (topic, sort_by, order) => {
    return ncNewsApi.get('/articles', {
        params: {
            topic: topic,
            sort_by: sort_by,
            order: order
        }
    }).then((res) => {
        console.log(res.data.articles);
        return res.data.articles;
    })
}

export const patchArticlesVotes = (article_id) => {
    return ncNewsApi.patch(`/articles/${article_id}`).then((res) => {
        return res.data.articles;
    })
}