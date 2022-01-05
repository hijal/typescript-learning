function functionAndCallback(
	name: string,
	age: number,
	cb: (obj: object) => void
) {
	let result = {
		name,
		age,
	};
	cb(result);
}

functionAndCallback('hijal', 27, (obj) => {
	console.log('callback function');
	console.log(obj);
});
