// Takes two strings as arguments and return the concatenation of the two strings.
const concatenate = require('./concatenation');

test('', function () {
    expect(concatenate('Hello ', 'Mary!')).toBe('Hello Mary!');
});