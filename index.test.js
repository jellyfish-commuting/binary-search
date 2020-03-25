const { equalSearch, closestSearch } = require('./index');

// Fill values
const numbers = new Array(100).fill().map((nop, i) => i);
const letters = new Array(26).fill().map((nop, i) => String.fromCharCode(97 + i));

// Start tests ...
describe('Equal search', () => {
  it('expect -1 when searching 150 in [0...99]', async () => expect(equalSearch(numbers, 150)).toBe(-1));
  it('expect 7 when searching 7 in [0...99]', async () => expect(equalSearch(numbers, 7)).toBe(7));
  it('expect -1 when searching \'thejellyfish\' in [\'a\'...\'z\']', async () => expect(equalSearch(letters, 'thejellyfish')).toBe(-1));
  it('expect 7 when searching \'h\' in [\'a\'...\'z\']', async () => expect(equalSearch(letters, 'h')).toBe(7));
});

describe('Closest search', () => {
  it('expect 0 when searching -1 in [0...99]', async () => expect(closestSearch(numbers, -1)).toBe(0));
  it('expect 99 when searching 101 in [0...99]', async () => expect(closestSearch(numbers, 100)).toBe(99));
  it('expect 7 when searching 7 in [0...99]', async () => expect(closestSearch(numbers, 7)).toBe(7));
  it('expect 7 when searching 7.4 in [0...99]', async () => expect(closestSearch(numbers, 7.4)).toBe(7));
  it('expect 77 when searching 77 in [0...99]', async () => expect(closestSearch(numbers, 77)).toBe(77));
  it('expect 77 when searching 77.4 in [0...99]', async () => expect(closestSearch(numbers, 77.4)).toBe(77));
});
