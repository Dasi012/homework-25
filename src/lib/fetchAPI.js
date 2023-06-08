import axios from 'axios';

export const fetchRequest = async (urlPath, options = {}) => {
	try {
		const BASE_URL =
			'http://ec2-18-197-107-37.eu-central-1.compute.amazonaws.com:5500/api/v1/foods';

		const requestOption = {
			method: options.method || 'GET',
			headers: {
				'Content-Type': 'application/json',
				'UserID': 'DastanDulatbekov',
			},
		};

		if (options.method !== 'GET') {
			requestOption.data = options.body;
		}

		const response = await axios(`${BASE_URL}${urlPath}`, requestOption);
		const { data } = response.data;

		return data;
	} catch (error) {
		new Error(error);
	}
};
