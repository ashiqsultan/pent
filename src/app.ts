import express from 'express';
import morgan from 'morgan';
import AppRes from './AppRes';
import db from './config/dbConfig';

// Create Express server
const app = express();

// Connect to DB
(async () => {
	try {
		await db.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
})();

// Set PORT
app.set('port', process.env.PORT || 7000);

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Logger
app.use(morgan('dev'));

// Enable CORS

// Application route Handler

// 404 Handler
app.use(function (req, res, next) {
	const status = 404;
	const message = 'Resource not found';
	const errorResponse = new AppRes([], true, message);
	res.status(status).send(errorResponse);
});

// Server Error 500 Handler
// Calling next(error) in any of the routes will call this function
app.use(
	(
		error: express.ErrorRequestHandler,
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		// Error object is only logged in server and not sent in response to restrict error details being known in the front-end
		// instead a general message is sent incase of server error
		console.error(error);
		const status = 500;
		const message = 'API Server Error';
		const errorResponse = new AppRes([], true, message);
		res.status(status).send(errorResponse);
	}
);

export default app;
