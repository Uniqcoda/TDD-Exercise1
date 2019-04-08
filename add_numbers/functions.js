function add(num1, num2) {
    if (typeof num1 !== 'number') {
        return 'NaN';
    } else {
        return num1 + num2;  
    }
}
module.exports = add;