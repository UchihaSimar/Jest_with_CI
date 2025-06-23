const { sum } = require('./math');

test("Testing Math Function: Sum",() => {
    expect(sum(1,2)).toBe(3);
    expect(sum(1,2)).not.toBe(4);
})