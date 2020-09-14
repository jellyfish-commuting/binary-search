[![Version](https://img.shields.io/npm/v/@jellyfish-commuting/binary-search)](https://www.npmjs.com/package/@jellyfish-commuting/binary-search)
[![Licence](https://img.shields.io/npm/l/@jellyfish-commuting/binary-search)](https://en.wikipedia.org/wiki/MIT_license)
[![Build](https://img.shields.io/travis/jellyfish-commuting/binary-search)](https://travis-ci.org/github/jellyfish-commuting/binary-search)
[![Coverage](https://img.shields.io/codecov/c/github/jellyfish-commuting/binary-search)](https://codecov.io/gh/jellyfish-commuting/binary-search)
[![Downloads](https://img.shields.io/npm/dt/@jellyfish-commuting/binary-search)](https://www.npmjs.com/package/@jellyfish-commuting/binary-search)


# Binary search

Equal or closest search in **sorted array** using binary search algorithm.    
See https://en.wikipedia.org/wiki/Binary_search_algorithm#Procedure

### Performance

Binary search is faster than linear search (except for small array ...).

![js-perf](https://github.com/jellyfish-commuting/binary-search/raw/master/js-perf.jpg)

### Install

```bash
yarn add @jellyfish-commuting/binary-search
```

or

```bash
npm install @jellyfish-commuting/binary-search
```

### Usage

```javascript
import { equalSearch, closestSearch } from '@jellyfish-commuting/binary-search';

 // Create an array [1...100]
const numbers = new Array(100).fill().map((nop, i) => i + 1);

// Create an array ['a'...'z']
const letters = new Array(26).fill().map((nop, i) => String.fromCharCode(97 + i));

// Equal search in numeric array
equalSearch(numbers, 7);   // Found -> Output 6
equalSearch(numbers, 123); // Not found -> Output -1

// Equal search in string array
equalSearch(letters, 'h');   // Found -> Output 7
equalSearch(letters, '?');   // Not found -> Output -1

// Closest search
closestSearch(numbers, 7.2);  // Output 6
closestSearch(numbers, 7.6);  // Output 7
closestSearch(numbers, -1);   // Output 0
closestSearch(numbers, 1000); // Output 99
```

### Params

```javascript
equalSearch(haystack, needle[, { compare, from, to }]);
closestSearch(haystack, needle[, { compare, from, to }]);
```


| Prop      | Type       | Default                             | Note |
|:-----------|:------------|:-------------------------------------|:------|
| `compare` | `function` | `(needle, value) => needle - value` | Compare function. <br /><em>Special case for equalSearch:</em><br />if needle is a string, default compare is<br />`(a, b) => a.localeCompare(b)`
| `from`    | `integer`  | `0`                                 | Start index for range searching
| `to`      | `integer`  | `haystack.length - 1`               | End index for range searching


### Return value

Index in the array or -1 if not found

### Exception

Throw RangerError if `from` or `to` are outbounds
