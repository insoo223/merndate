import axios from 'axios'
const instance = axios.create({
	baseURL: 'http://192.168.123.122:8001'
});

export default instance;
