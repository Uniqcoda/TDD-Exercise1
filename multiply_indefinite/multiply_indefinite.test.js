// Multiply an indefinite amount of arguments

const multiply = require('./multiply_indefinite');

test('multiply 3 * 5 to equal 15', function () {
    expect(multiply(3, 5)).toBe(15);
});


test('Multiply an indefinite amount of arguments', function () {
    expect(multiply(3, 2, 5)).toBe(30);
});
