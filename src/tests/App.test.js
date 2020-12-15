import { total } from './testedapp';

//Mock function
const add = jest.fn(() => 3);

//Unit test : only tests one thing
test('add', () => {
  expect(add(1, 2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1, 2);
});

// test('total', () => {
//   expect(total(5, 20)).toBe('$25');
// });
