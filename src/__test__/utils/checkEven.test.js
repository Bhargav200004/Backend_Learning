import { test, expect } from 'vitest';
import { IsEven } from '../../utlis/checkEven';

test('check 10 is even', () => {
  expect(IsEven(10)).toBe(true);
});

test('check 9 is odd', () => {
  expect(IsEven(9)).toBe(false);
});
