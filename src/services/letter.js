import {fetchData} from "./api";

export default class letter {

    static get = async () => {
        const usersPromise = fetchData('users');
        const postsPromise = fetchData('posts');
        
        try {
            const [users, posts] = await Promise.all([usersPromise, postsPromise]);
            const usersMap = users.data.reduce((acc, u) => ({
                ...acc,
                [u.id]: u
            }), {});

            posts.data.forEach((post) => {
                const {userId, ...p} = post;
                const user = usersMap[userId];

                user.posts = user.posts || [];
                user.posts.push(p);
            })
            return users.data

        } catch (e) {
            console.log('error is: ', e);
            return e.response
        }
    }

}