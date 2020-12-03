import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-test-bc3fd.firebaseio.com/'
});

export default instance;