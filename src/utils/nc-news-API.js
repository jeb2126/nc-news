import axios from 'axios';

const ncNewsApi = axios.create({
    baseURL: 'https://james-barnes-nc-news.herokuapp.com/api',
});

export const fetchTopics = () => {
    return ncNewsApi.get(`/topics`).then((res) => {
        return res.data.topics;
    });
}

// export const fetchArticles = () => {
//     return ncNewsApi.get('/articles').then((res) => {
//         return res.data.articles;
//     });
// }

export const fetchArticlesByTopic = (topic) => {
    return ncNewsApi.get('/articles', {
        params: {
            topic: topic
        }
    }).then((res) => {
        return res.data.articles;
    })
}