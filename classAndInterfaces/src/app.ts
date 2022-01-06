class Department {
	// private id: string;
	// private name: string;
	private employees: string[] = [];

	constructor(private readonly id: string, public name: string) {}

	describe(this: Department) {
		console.log('Department: ' + this.name + ' and ' + this.id);
	}
	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	displayEmployee() {
		console.log(this.employees);
	}
}

const department = new Department('1', 'IT');

department.describe();
department.addEmployee('hijal');
department.addEmployee('Nasir');
// department.employees[2] = 'test';
department.displayEmployee();
