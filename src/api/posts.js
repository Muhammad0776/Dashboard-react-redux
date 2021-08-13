const axios = require('axios');

export const getPosts = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
        return res.data;
    } catch (error) {
        console.error(error);
        return { error: true }
    }
}