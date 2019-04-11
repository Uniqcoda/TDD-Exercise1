// Add two numbers

const add = require('./functions');

test('returns a value', function () {
    expect(add(3, 4)).toBeDefined();
});

test('adds 3 + 4 to equal 7', function () {
    expect(add(3, 4)).toBe(7);
});

test('both parameter must be numbers', function () {
    expect(add(3, '4')).toBe("all parameters must be numbers");
});


