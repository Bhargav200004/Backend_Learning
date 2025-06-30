import { expect, test } from 'vitest';
import { SubFunction, SumFunction } from '../../utlis/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(SumFunction(1, 2)).toBe(3);
});

test('subtract 2 - 1 to equal 1', () => {
  expect(SubFunction(2, 1)).toBe(1);
});
