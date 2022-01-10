type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const emp1: ElevatedEmployee = {
	name: 'hijal',
	privileges: ['create-server'],
	startDate: new Date(),
};

function displayInformation(emp: ElevatedEmployee) {
	console.log(`Name: ${emp.name}`);
	if ('privileges' in emp) {
		console.log(`Privileges: ${emp.privileges}`);
	}
	if ('startDate' in emp) {
		console.log(`Start Date: ${emp.startDate}`);
	}
}

displayInformation(emp1);
