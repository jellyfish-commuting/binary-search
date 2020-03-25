const { equalSearch, closestSearch } = require('./index');

// Fill values
const values = new Array(100).fill().map((nop, i) => i);

// Start tests ...
describe('Equal search', () => {

  it('expect -1 when searching 150 in [0...99]', async () => {
    const index = equalSearch(values, 150);
    expect(index).toBe(-1);
  });

  it('expect 7 when searching 7 in [0...99]', async () => {
    const index = equalSearch(values, 7);
    expect(index).toBe(7);
  });
});

describe('Closest search', () => {

  it('expect 0 when searching -1 in [0...99]', async () => {
    const index = closestSearch(values, -1);
    expect(index).toBe(0);
  });

  it('expect 99 when searching 101 in [0...99]', async () => {
    const index = closestSearch(values, 100);
    expect(index).toBe(99);
  });

  it('expect 7 when searching 7 in [0...99]', async () => {
    const index = closestSearch(values, 7);
    expect(index).toBe(7);
  });

  it('expect 7 when searching 7.4 in [0...99]', async () => {
    const index = closestSearch(values, 7.4);
    expect(index).toBe(7);
  });

  it('expect 77 when searching 77 in [0...99]', async () => {
    const index = closestSearch(values, 77);
    expect(index).toBe(77);
  });

  it('expect 77 when searching 77.4 in [0...99]', async () => {
    const index = closestSearch(values, 77.4);
    expect(index).toBe(77);
  });
});
