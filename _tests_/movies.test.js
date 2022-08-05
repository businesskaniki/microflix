import { displayMovies } from '../src/modules/fetch.js';

describe('howmany movies are in the page', () => {
  const arr = ['1', '2', '3'];
  test('displaying movies', () => {
    expect(typeof displayMovies).toBe('function');
  });

  test('counting', () => {
    expect(arr.length).toBe(3);
  });
});
