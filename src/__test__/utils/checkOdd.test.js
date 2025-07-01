import { test, expect } from 'vitest';
import { IsOdd } from '../../utlis/checkOdd';

test('check if no number exist', () => {
  expect(IsOdd()).toBe(false);
});

test('check 10 is odd', () => {
  expect(IsOdd(10)).toBe(false);
});

test('check 9 is odd', () => {
  expect(IsOdd(9)).toBe(true);
});
