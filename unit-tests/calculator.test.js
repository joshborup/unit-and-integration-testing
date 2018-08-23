const {sum, subtract, divide, multiply} = require('./calculator');

test('sum function', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(3, 3)).toBe(6);
  expect(sum(200, 2)).toBe(202);
  expect(sum(5, 2)).toBe(7);

});

test('subtracts 6 - 2 to equal 4', () => {
  expect(subtract(6, 4)).toBe(2);
  expect(subtract(6, 6)).toBe(0);
  expect(subtract(680, 90)).toBe(590);
});

test('divide 12 / 6 to equal 2', () => {
  expect(divide(12, 6)).toBe(2);
  expect(divide(12, 3)).toBe(4);
  expect(divide(12, 4)).toBe(3);
});

test('multiply 4 * 6 to equal 24', () => {
  expect(multiply(4, 6)).toBe(24);
  expect(multiply(23, 2)).toBe(46);
  expect(multiply(2, 6)).toBe(12);
  expect(multiply(40, 6)).toBe(240);
});
