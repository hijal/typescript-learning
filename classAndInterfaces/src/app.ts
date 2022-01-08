class Department {
	static fiscalYear = 2022;
	protected employees: string[] = [];

	constructor(private readonly id: string, public name: string) {}

	static helloWorld(name: string) {
		console.log('Hello, ' + name);
	}
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
	private lastReport: string;

	get mostRecentReport(): string {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error('No report found');
	}

	set setMostRecentReport(report: string) {
		this.lastReport = report;
	}

	constructor(id: string, private reports: string[]) {
		super(id, 'Accounting');
		this.lastReport = reports[0];
	}

	addReport(report: string): void {
		this.reports.push(report);
		this.lastReport = report;
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

console.log(Department.helloWorld('Hijal'));

console.log(Department.fiscalYear);

const it = new ITDepartment('d1', ['hijal']);
console.log(it);

it.addEmployee('john');

const Ac = new AccountingDepartment('d2', []);
// const Ac = new AccountingDepartment('d2', ['report01']);
console.log(Ac);
Ac.addReport('report01');
Ac.addReport('report02');
console.log('Latest report: ', Ac.mostRecentReport);
Ac.printReports();

Ac.addEmployee('hijal');
Ac.addEmployee('nasir');

Ac.displayEmployee();
