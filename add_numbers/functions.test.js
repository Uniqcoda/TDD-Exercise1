const add = require('./functions');

test('returns a value', function () {
    expect(add(3, 4)).toBeDefined();
});

// test('returns a number', function () {
//     expect(add()).toBe();
// });

// test('both parameters must be numbers', function () {
//     expect(add()).toBe();
// });

// test('adds 3 + 4 to equal 7', function () {
//     expect(add()).toBe();
// })