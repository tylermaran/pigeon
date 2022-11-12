/* eslint-disable no-console */
const { Pool } = require('pg');

const pgConnect = ({ DB_NAME, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER }) => {
	const pool = new Pool({
		database: DB_NAME,
		host: DB_HOST,
		password: DB_PASSWORD,
		port: DB_PORT,
		user: DB_USER,
		idleTimeoutMillis: 3000,
		connectionTimeoutMillis: 2000,
		max: 20,
	});

	pool.on('connect', () => {
		console.log('Connected to db');
	});

	pool.on('error', (err, client) => {
		console.log('PG Error: ', err);
		console.log('in client: ', client);
	});

	pool.on('remove', () => {
		console.log('Client connection ended');
	});
	return pool;
};

const queryPostgres = async ({ source, query }) => {
	const pool = pgConnect({
		DB_NAME: source.DB_NAME,
		DB_HOST: source.DB_HOST,
		DB_PASSWORD: source.DB_PASSWORD,
		DB_PORT: source.DB_PORT,
		DB_USER: source.DB_USER,
	});

	const client = await pool.connect();
	const readOnly = 'SET SESSION CHARACTERISTICS AS TRANSACTION READ ONLY';
	await client.query(readOnly);
	const data = await client.query(query);
	const { rows, rowCount, fields } = data;

	return { rows, rowCount, fields };
};

module.exports = { pgConnect, queryPostgres };
