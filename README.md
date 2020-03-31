# Binary search

Equal or closest search in sorted array using binary search algorithm.   
See https://en.wikipedia.org/wiki/Binary_search_algorithm#Procedure

### Performance

Binary search is faster than linear search (except for small array ...).

![js-bench](https://github.com/thejellyfish/binary-search/raw/master/js-bench.jpg)
 
### Install

```bash
yarn add @thejellyfish/binary-search
```

or

```bash
npm install @thejellyfish/binary-search
```

### Usage

```javascript
import { equalSearch, closestSearch } from '@thejellyfish/binary-search';

 // Create an array [0...99]
const numbers = new Array(100).fill().map((nop, i) => i);

// Create an array ['a'...'z']
const letters = new Array(26).fill().map((nop, i) => String.fromCharCode(97 + i));

// Equal search
console.log(equalSearch(numbers, 7));  // Output 7
console.log(equalSearch(numbers, 123));  // Output -1
console.log(equalSearch(letters, 'h'));  // Output 7
console.log(equalSearch(letters, 'jellyfish'));  // Output -1

// Closest search
console.log(closestSearch(numbers, 7.2));  // Output 7
console.log(closestSearch(numbers, -1));  // Output 0
console.log(closestSearch(numbers, 1000));  // Output 99
```

### Params

```javascript
equalSearch(haystack, needle[, { compare, from, to }]);
closestSearch(haystack, needle[, { compare, from, to }]);
```


| Prop      | Type       | Default                             | Note |
|-----------|------------|-------------------------------------|------|
| `compare` | `function` | `(needle, value) => needle - value` | Compare function. <br /><em>Special case for equalSearch:</em><br />if needle is a string, default compare is<br />`(a, b) => a.localeCompare(b)`
| `from`    | `integer`  | `0`                                 | Start index for range searching
| `to`      | `integer`  | `haystack.length - 1`               | End index for range searching


### Return value

Index in the array or -1 if not found
