var Person = {
    name: 'hijal',
    age: 27,
    hobbies: ['cooking', 'sports']
};
var favoriteActivities;
favoriteActivities = ['gaming'];
console.log(Person.name);
for (var _i = 0, _a = Person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
