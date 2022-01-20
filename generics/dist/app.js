"use strict";
const names = [];
names.push('John');
names.push('Jane');
console.log('------------------------------');
console.log('names:', names);
console.log('------------------------------');
let done = true;
const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const msg = 'Done!!!!';
        return resolve(msg);
    }
    const why = 'Still working on something else...';
    reject(why);
});
const checkIfItIsDone = () => {
    isItDoneYet
        .then((ok) => {
        console.log(ok);
    })
        .catch((err) => {
        console.log(err);
    });
};
checkIfItIsDone();
//# sourceMappingURL=app.js.map