function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code };
}

generateError('An error ocurred!', 500);
