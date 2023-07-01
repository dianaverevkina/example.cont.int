// test(description, work)
import { calculateTotal } from '../calculate.js';
// test('basic test', () => {
//   let result = 4;
//   expect(result).toBe(3);
// });

test('calculateTotal sum without Discount', () => {
  const list = [
    {
      id: 45,
      name: 'book1',
      count: 3,
      price: 400
    },
    {
      id: 77,
      name: 'book2',
      count: 1,
      price: 1300
    }
  ];

  const result = calculateTotal(list);
  expect(result).toBe(2500);

});

test('calculateTotal sum with Discount', () => {
  const list = [
    {
      id: 45,
      name: 'book1',
      count: 3,
      price: 401
    },
    {
      id: 77,
      name: 'book2',
      count: 1,
      price: 1300
    }
  ];

  const result = calculateTotal(list, true);
  expect(result).toBeCloseTo(2230.173);
})