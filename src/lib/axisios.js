import axios from 'axios';
import { STORAGE_KEY } from '../constants';

function getUserAuthLogin() {
	const data = localStorage.getItem(STORAGE_KEY.AUTH_KEY);
	const userData = JSON.parse(data);
	console.log(userData);
	// return userData.data.token;
}

const BASE_URL =
	'http://ec2-18-197-107-37.eu-central-1.compute.amazonaws.com:5500/api/v1';

const headers = {
	'Content-type': 'application/json',
	'UserId': 'DastanDulatbekov',
	'Authorization': getUserAuthLogin(),
};

export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers,
});
