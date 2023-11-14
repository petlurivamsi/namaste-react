import { sum } from "../sum";

test("sum function should calculate the sum of two numbers ", () => {
  let result = sum(4, 3);
  expect(result).toBe(7);
});
