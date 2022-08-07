require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const { connectDb } = require('./db');

// Ping
app.get('/', (req, res, next) => {
	return res.status(200).send('pong');
});

app.post('/query', async (req, res, next) => {
	console.log(req.body);
	const { query, source } = req.body;

	const pool = connectDb({
		DB_NAME: source.name,
		DB_HOST: source.host,
		DB_PASSWORD: source.password,
		DB_PORT: source.port,
		DB_USER: source.user,
	});

	try {
		const client = await pool.connect();
		const readOnly = 'SET SESSION CHARACTERISTICS AS TRANSACTION READ ONLY';
		await client.query(readOnly);
		const data = await client.query(query);
		console.log(Object.keys(data));
		const { rows } = data;

		return res.status(200).json({
			data: rows,
		});
	} catch (error) {
		console.log(error);
		console.log(error.message);
		return res.status(400).json({ error: error.message });
	}
});

app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});

// Throw errors from anywhere in the app
app.use((error, req, res, next) => {
	res.status(error.status || 500).json({
		error: {
			message: error.message,
		},
	});
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

module.exports = app;
