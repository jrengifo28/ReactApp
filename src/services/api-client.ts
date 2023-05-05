import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2d38b3edeed445d5a85bb082629cd458'
    }
});