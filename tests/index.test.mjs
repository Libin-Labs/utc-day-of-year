import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('returns first day', () => {
  assert.equal(api.dayOfYear('2024-01-01'), 1);
});
test('counts leap day', () => {
  assert.equal(api.dayOfYear('2024-02-29'), 60);
});
test('counts common year date', () => {
  assert.equal(api.dayOfYear('2023-03-01'), 60);
});
test('returns leap-year end', () => {
  assert.equal(api.dayOfYear('2024-12-31'), 366);
});
test('returns common-year end', () => {
  assert.equal(api.dayOfYear('2023-12-31'), 365);
});
test('rejects invalid date', () => {
  assert.throws(() => api.dayOfYear('2023-02-29'), RangeError);
});
