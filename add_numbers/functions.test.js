const add = require('./functions');

test('returns a value', function () {
    expect(add(3, 4)).toBeDefined();
});

test('adds 3 + 4 to equal 7', function () {
    expect(add(3, 4)).toBe(7);
})

// test('both parameters must be numbers', function () {
//     expect(add('3', [5,4])).toBe('both parameters must be of type - number');
// });

