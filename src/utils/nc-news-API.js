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
        return res.data.articles;
    })
}

export const patchArticlesVotes = (article_id, voteValue) => {
    console.log(article_id, "API");
    return ncNewsApi.patch(`/articles/${article_id}`, {inc_votes: voteValue})
    .then((res) => {
        return res.data.article;
    });
}

export const fetchArticleByArticleId = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`).then((res) => {
        return res.data.article;
    })
}

export const fetchCommentsByArticleId = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}/comments`).then((res) => {
        return res.data.comments;
    })
}

export const postComment = (article_id, username, body) => {
    return ncNewsApi.post(`/articles/${article_id}/comments`, {username: username, body: body})
    .then((res) => {
        return res.data.comments;
    });
}