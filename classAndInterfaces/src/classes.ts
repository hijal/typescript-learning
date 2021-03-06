abstract class Department {
	static fiscalYear = 2022;
	protected employees: string[] = [];

	constructor(protected readonly id: string, public name: string) {}

	static helloWorld(name: string) {
		console.log('Hello, ' + name);
	}

	abstract describe(this: Department): void;

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
	describe() {
		console.log('IT Department - ID: ' + this.id);
	}
}

class AccountingDepartment extends Department {
	private lastReport: string;
	private static instance: AccountingDepartment;

	get mostRecentReport(): string {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error('No report found');
	}

	set setMostRecentReport(report: string) {
		this.lastReport = report;
	}

	private constructor(id: string, private reports: string[]) {
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
	describe() {
		console.log('Accounting Department - ID: ' + this.id);
	}

	static getInstance() {
		if (AccountingDepartment.instance) {
			return this.instance;
		}
		this.instance = new AccountingDepartment('d2', []);
		return this.instance;
	}
}

Department.helloWorld('Hijal');

console.log(Department.fiscalYear);

const it = new ITDepartment('d1', ['hijal']);
it.describe();

it.addEmployee('john');

// const Ac = new AccountingDepartment('d2', []);
const Ac = AccountingDepartment.getInstance();
// const Ac = new AccountingDepartment('d2', ['report01']);
console.log(Ac);
Ac.addReport('report01');
Ac.addReport('report02');
console.log('Latest report: ', Ac.mostRecentReport);
Ac.printReports();

Ac.addEmployee('hijal');
Ac.addEmployee('nasir');

Ac.displayEmployee();

Ac.describe();
