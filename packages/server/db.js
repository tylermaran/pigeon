/* eslint-disable no-console */
const { Pool } = require('pg');

const connectDb = ({ DB_NAME, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER }) => {
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

module.exports = { connectDb };
