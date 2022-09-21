import axios from 'axios';

import {fetchData, baseURL} from './api';

jest.mock('axios');

describe('get users and posts', () => {

    //USERS API SUCCESSFULLY
    it('get successfully data from users api', async () => {
        const data = {
            data: {
                id: 1,
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                address: {
                    street: 'Kulas Light',
                    suite: 'Apt. 556',
                    city: 'Gwenborough',
                    zipcode: '92998-3874',
                    geo: {
                        lat: '-37.3159',
                        lng: '81.1496'
                    }
                },
                phone: '1-770-736-8031 x56442',
                website: 'hildegard.org',
                company: {
                    name: 'Romaguera-Crona',
                    catchPhrase: 'Multi-layered client-server neural-net',
                    bs: 'harness real-time e-markets'
                }
            },
        };

        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(fetchData('users')).resolves.toEqual(data);
        expect(axios.get).toHaveBeenCalledWith(`${baseURL}users`);

    });


    //USERS API ERRONEOUSLY
    it('fetches erroneously data from users api', async () => {
        const errorMessage = 'Server Error';

        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );

        await expect(fetchData('users')).rejects.toThrow(errorMessage);
    });


    //POSTS API SUCCESSFULLY
    it('get successfully data from posts api', async () => {
        const data = {
            data: {
                body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
                id: 1,
                title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                userId: 1
            },
        };

        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(fetchData('posts')).resolves.toEqual(data);
        expect(axios.get).toHaveBeenCalledWith(`${baseURL}posts`);

    });


    //POSTS API ERRONEOUSLY
    it('fetches erroneously data from posts api', async () => {
        const errorMessage = 'Server Error';

        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );

        await expect(fetchData('posts')).rejects.toThrow(errorMessage);
    });

});