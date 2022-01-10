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

class Car {
	drive() {
		console.log('driving car...');
	}
}

class Truck {
	drive() {
		console.log('driving truck...');
	}

	loadCargo(amount: number) {
		console.log('loading cargo...' + amount);
	}
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();

	if ('loadCargo' in vehicle) vehicle.loadCargo(10);

	if (vehicle instanceof Truck) vehicle.loadCargo(10000);
}

useVehicle(new Car());
useVehicle(new Truck());
