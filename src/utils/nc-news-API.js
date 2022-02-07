import axios from 'axios';

const ncNewsApi = axios.create({
    baseURL: 'https://james-barnes-nc-news.herokuapp.com/api',
});

export const fetchTopics = () => {
    return ncNewsApi.get(`/topics`).then((res) => {
        console.log(res.data.topics, "API");
        return res.data.topics;
    });
}

