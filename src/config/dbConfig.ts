import { Sequelize } from 'sequelize';

const host = 'localhost';
const database = 'mydevdb';
const user = 'adminuser';
const password = 'goodPassword';
const port = 5432;

const dialect = 'postgres';

const db = new Sequelize(database, user, password, {
	host,
	port,
	dialect,
});

export default db;
