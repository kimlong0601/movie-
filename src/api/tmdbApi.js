import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    params:{
        api_key: '0bd6243f67615082a22b4ac006afd23f'
    }
});
