interface IAppResponse {
	// error is not mandatory because it contains data only if isError is true
	data: any;
	isError: boolean;
	errorMsg?: string;
}

/**
 * This is just a recommended response structure
 */
class AppResponse implements IAppResponse {
	/*
	 * Set isError to true for failure
	 * Make sure to pass errorMsg if isError is true
	 */
	constructor(
		readonly data: object,
		readonly isError: boolean,
		readonly errorMsg?: string
	) {}
}

export default AppResponse;
