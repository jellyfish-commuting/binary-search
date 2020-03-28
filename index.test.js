const { equalSearch, closestSearch } = require('./index');

// Fill values
const numbers = new Array(100).fill().map((nop, i) => i);
const letters = new Array(26).fill().map((nop, i) => String.fromCharCode(97 + i));

// Start tests ...
describe('Equal search', () => {
  it('expect 7 when searching 7 in [0...99]', () => expect(equalSearch(numbers, 7)).toBe(7));
  it('expect -1 when searching 150 in [0...99]', () => expect(equalSearch(numbers, 150)).toBe(-1));
  it('expect 7 when searching \'h\' in [\'a\'...\'z\']', () => expect(equalSearch(letters, 'h')).toBe(7));
  it('expect -1 when searching \'jellyfish\' in [\'a\'...\'z\']', () => expect(equalSearch(letters, 'jellyfish')).toBe(-1));
  it('expect -1 when outbounds range', () => expect(equalSearch(numbers, 7, { to: 101 })).toBe(-1));
});

describe('Closest search', () => {
  it('expect 7 when searching 7 in [0...99]', () => expect(closestSearch(numbers, 7)).toBe(7));
  it('expect 7 when searching 7.4 in [0...99]', () => expect(closestSearch(numbers, 7.4)).toBe(7));
  it('expect 77 when searching 77 in [0...99]', () => expect(closestSearch(numbers, 77)).toBe(77));
  it('expect 77 when searching 77.4 in [0...99]', () => expect(closestSearch(numbers, 77.4)).toBe(77));
  it('expect 0 when searching -1 in [0...99]', () => expect(closestSearch(numbers, -1)).toBe(0));
  it('expect 99 when searching 101 in [0...99]', () => expect(closestSearch(numbers, 100)).toBe(99));
  it('expect -1 when outbounds range', () => expect(closestSearch(numbers, 7, { to: 101 })).toBe(-1));
});
