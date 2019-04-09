// Add an indefinite amount of numbers

const add = require('./add_infinite');

test('add (3, 4, 2) to equal 9 ', function () {
    expect(add(3, 4, 2)).toBe(9);
});

test('add (3, 4, 2, 1) to equal 10 ', function () {
    expect(add(3, 4, 2, 1)).toBe(10);
});

test('parameters must be numbers', function () {
    expect(add(3, '4', 5, 3, 6, '3')).toBe('NaN');
});
