// Takes two numbers as argument and return the difference between the numbers

const difference = require('./difference');

test('substracts 10 - 3 to equal 7', function () {
    expect(difference(10, 3)).toBe(7);
});

test('both parameter must be numbers', function () {
    expect(difference(3, '1')).toBe('NaN');
});