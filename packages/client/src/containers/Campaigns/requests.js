export const runQuery = async ({ campaign }) => {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: JSON.stringify(campaign),
		redirect: 'follow',
	};

	try {
		const url = 'http://localhost:4000/query';
		const res = await fetch(url, requestOptions);
		const { data, error } = await res.json();
		return { data, message: error };
	} catch (error) {
		console.log(error);
	}
};

export const sendEmail = async ({ activeCampaign }) => {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: JSON.stringify(activeCampaign),
		redirect: 'follow',
	};

	try {
		const url = 'http://localhost:4000/send-email';
		const res = await fetch(url, requestOptions);
		const { data, error } = await res.json();
		return { data, message: error };
	} catch (error) {
		console.log(error);
	}
};
