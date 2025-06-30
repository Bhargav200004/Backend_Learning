import { expect, test } from 'vitest'
import { SumFunction } from '../utlis/sum'


test('adds 1 + 2 to equal 3', () => {
  expect(SumFunction(1, 2)).toBe(3)
})