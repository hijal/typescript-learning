"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.helloWorld = function (name) {
        console.log('Hello, ' + name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.displayEmployee = function () {
        console.log(this.employees);
    };
    Department.fiscalYear = 2022;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log('IT Department - ID: ' + this.id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountingDepartment.prototype, "setMostRecentReport", {
        set: function (report) {
            this.lastReport = report;
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
        this.lastReport = report;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    // method override
    AccountingDepartment.prototype.addEmployee = function (employee) {
        if (employee === 'hijal') {
            return;
        }
        this.employees.push(employee);
    };
    AccountingDepartment.prototype.describe = function () {
        console.log('Accounting Department - ID: ' + this.id);
    };
    return AccountingDepartment;
}(Department));
Department.helloWorld('Hijal');
console.log(Department.fiscalYear);
var it = new ITDepartment('d1', ['hijal']);
it.describe();
it.addEmployee('john');
var Ac = new AccountingDepartment('d2', []);
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
//# sourceMappingURL=app.js.map