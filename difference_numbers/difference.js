function difference(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'NaN';
    } else {
        return num1 - num2;  
    }
};

module.exports = difference;