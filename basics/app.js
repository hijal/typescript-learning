var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var Person = {
    name: 'hijal',
    age: 27,
    hobbies: ['cooking', 'sports'],
    role: Role.ADMIN
};
console.log(Person.name);
for (var _i = 0, _a = Person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (Person.role === Role.ADMIN) {
    console.log('is admin');
}
