import { commentCounter } from '../src/modules/comments.js';

describe('The function;', () => {
  test('Increases 0 comments to 1', () => {
    expect(typeof commentCounter).toBe('function');
  });
  test('is defined', () => {
    expect(commentCounter).toBeDefined();
  });
  test('Increases 0 comments to 1', () => {
    expect(commentCounter(0)).toBe(1);
  });
  test('Increases 100 comments to 101', () => {
    expect(commentCounter(100)).toBe(101);
  });
});