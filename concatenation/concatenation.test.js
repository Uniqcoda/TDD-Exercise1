// Takes two strings as arguments and return the concatenation of the two strings.
const concatenate = require('./concatenation');

test('returns a value', function () {
    expect(concatenate()).toBeDefined();
});

test("concatenate 'Hello ' and 'Mary!' to give 'Hello Mary!'", function () {
    expect(concatenate('Hello ', 'Mary!')).toBe('Hello Mary!');
});

test('both parameters must be strings', function () {
    expect(concatenate(5, 'Mary!')).toBe('both parameters must be strings');
});