"use strict";
const emp1 = {
    name: 'hijal',
    privileges: ['create-server'],
    startDate: new Date(),
};
function displayInformation(emp) {
    console.log(`Name: ${emp.name}`);
    if ('privileges' in emp) {
        console.log(`Privileges: ${emp.privileges}`);
    }
    if ('startDate' in emp) {
        console.log(`Start Date: ${emp.startDate}`);
    }
}
displayInformation(emp1);
//# sourceMappingURL=app.js.map