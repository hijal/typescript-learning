class Department {
	protected employees: string[] = [];

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

class ITDepartment extends Department {
	constructor(id: string, public admins: string[]) {
		super(id, 'IT');
	}
}

class AccountingDepartment extends Department {
	constructor(id: string, private reports: string[]) {
		super(id, 'Accounting');
	}

	addReport(report: string): void {
		this.reports.push(report);
	}

	printReports(): void {
		console.log(this.reports);
	}
	// method override
	addEmployee(employee: string): void {
		if (employee === 'hijal') {
			return;
		}
		this.employees.push(employee);
	}
}

const it = new ITDepartment('d1', ['hijal']);
console.log(it);

it.addEmployee('john');

const Ac = new AccountingDepartment('d2', []);
// const Ac = new AccountingDepartment('d2', ['report01']);
console.log(Ac);
Ac.addReport('report01');
Ac.addReport('report02');

Ac.printReports();

Ac.addEmployee('hijal');
Ac.addEmployee('nasir');

Ac.displayEmployee();
