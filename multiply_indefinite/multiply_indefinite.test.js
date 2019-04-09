const multiply = require('./multiply_indefinite');

test('multiply 3 * 5 to equal 15', function () {
    expect(multiply(3, 5)).toBe(15);
});

