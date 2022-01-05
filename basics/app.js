function functionAndCallback(name, age, cb) {
    var result = {
        name: name,
        age: age
    };
    cb(result);
}
functionAndCallback('hijal', 27, function (obj) {
    console.log('callback');
    console.log(obj);
});
