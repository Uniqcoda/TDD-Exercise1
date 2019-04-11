// Takes two numbers as arguments and returns the first number divided by the second number.
const divide = require('./division');

test('divide 15 by 5 to equal 3', function () {
expect(divide(15, 5)).toBe(3);
});

test('both parameter must be numbers', function () {
    expect(divide(15, '5')).toBe('NaN');
});
test('both parameter must be numbers', function () {
    expect(divide(15, null)).toBe('NaN');
});