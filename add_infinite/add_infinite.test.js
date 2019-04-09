const add = require('./add_infinite');

test('add (3, 4, 2) to equal 9 ', function () {
    expect(add(3, 4, 2)).toBe(9);
})