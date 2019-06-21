import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService {
    //GET POST
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        })
    }

    //CREATE
    static inserPost(text) {
        return axios.post(url, { text });
    }
    //DELETE
    static deletePost(id) {
        return axios.deletePost(`${url}${id}`);
    }
}

export default PostService;