const add = require('./functions');

test('returns a value', function () {
    expect(add(3, 4)).toBeDefined();
});

test('adds 3 + 4 to equal 7', function () {
    expect(add(3, 4)).toBe(7);
});

test('first parameter must be number', function () {
    expect(add('3', 4)).toBe('NaN');
});

