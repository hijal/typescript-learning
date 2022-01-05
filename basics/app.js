function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error ocurred!', 500);
