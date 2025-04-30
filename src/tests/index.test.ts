import { expect, test } from 'vitest';
import { sum } from '../index';

test('adds 1 + 5 to equal 6', () => {
  expect(sum(1)).toBe(6);
});

test('adds 2 + 5 to equal 7', () => {
  expect(sum(1)).toBe(6);
});
