function combine(n1, n2, resultConversion) {
    if ((typeof n1 === 'number' && typeof n2 === 'number') ||
        resultConversion === 'as-number') {
        return +n1 + +n2;
    }
    return n1.toString() + ' ' + n2.toString();
}
console.log(combine(10, 20, 'as-number'));
console.log(combine('10', '20', 'as-number'));
console.log(combine('hijikesh', 'hijal', 'as-text'));
