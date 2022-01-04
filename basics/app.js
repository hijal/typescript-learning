var TypeConversion;
(function (TypeConversion) {
    TypeConversion[TypeConversion["AS-NUMBER"] = 0] = "AS-NUMBER";
    TypeConversion[TypeConversion["AS-TEXT"] = 1] = "AS-TEXT";
})(TypeConversion || (TypeConversion = {}));
function combine(n1, n2, conversion) {
    if ((typeof n1 === 'number' && typeof n2 === 'number') ||
        conversion === TypeConversion['AS-NUMBER']) {
        return +n1 + +n2;
    }
    return n1.toString().toUpperCase() + ' ' + n2.toString().toUpperCase();
}
console.log(combine(10, 10, TypeConversion['AS-NUMBER']));
console.log(combine('10', '10', TypeConversion['AS-NUMBER']));
console.log(combine('hijikesh', 'hijal', TypeConversion['AS-TEXT']));
