import { expect, test } from 'vitest';
import { DivFunction, MulFunction } from '../../utlis/mul';

test('multiply 2 * 2 to equal 4', () => {
  expect(MulFunction(2, 2)).toBe(4);
});

test('Divide 2 * 2 to equal 1', () => {
  expect(DivFunction(2, 2)).toBe(1);
});
