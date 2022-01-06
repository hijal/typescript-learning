const discount: (price: number, rate?: number) => number = (
	price: number,
	rate: number = 0.1
) => {
	return price * (1 - rate);
};

const getDay: (month: number, year?: number) => number = (
	month: number,
	year: number = new Date().getFullYear()
) => {
	const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if (month === 2) {
		// leap year condition
		if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
			return 29;
		}
		return 28;
	}
	return days[month - 1];
};

const display: (a: string | number, message: string) => void = (
	result,
	message
) => console.log(message + ': ', result);

display(discount(10), 'Discount');
display(getDay(2), `Days`);
