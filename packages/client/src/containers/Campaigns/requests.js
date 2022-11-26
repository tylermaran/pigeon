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
		const url = process.env.REACT_APP_API_URL + '/query';
		const res = await fetch(url, requestOptions);
		const { data, error } = await res.json();
		return { data, message: error };
	} catch (error) {
		console.log(error);
	}
};

export const previewEmail = async ({ activeCampaign, previewIndex }) => {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const requestOptions = {
		body: JSON.stringify({ activeCampaign, previewIndex }),
		headers: myHeaders,
		method: 'POST',
		redirect: 'follow',
	};

	try {
		const url = process.env.REACT_APP_API_URL + '/preview-email';
		const res = await fetch(url, requestOptions);
		const { body, subject, toEmail } = await res.json();
		return { body, subject, toEmail };
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
		const url = process.env.REACT_APP_API_URL + '/send-email';
		await fetch(url, requestOptions);
		return 'ok';
	} catch (error) {
		console.log(error);
	}
};
