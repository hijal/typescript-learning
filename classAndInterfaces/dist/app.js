"use strict";
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name + ' and ' + this.id);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.displayEmployee = function () {
        console.log(this.employees);
    };
    return Department;
}());
var department = new Department('1', 'IT');
department.describe();
department.addEmployee('hijal');
department.addEmployee('Nasir');
// department.employees[2] = 'test';
department.displayEmployee();
//# sourceMappingURL=app.js.map