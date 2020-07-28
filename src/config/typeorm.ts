import {createConnection} from 'typeorm';
import path from 'path';

export async function connect () {
	await createConnection({
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'admin',
		password: 'tomate21',
		database: 'graph-project',
		entities: [
			path.join(__dirname, '../entity/**/**.ts')
		],
		synchronize: true

	});

	console.log('DB is connected');
}