export const getItem = (key) => {
	const res = window.localStorage.getItem(key);
	return JSON.parse(res);
};

export const setItem = (key, value) => {
	window.localStorage.setItem(key, value);
};
