[![Version](https://img.shields.io/npm/v/@jollie/binary-search)](https://www.npmjs.com/package/@jollie/binary-search)
[![Licence](https://img.shields.io/npm/l/@jollie/binary-search)](https://en.wikipedia.org/wiki/MIT_license)
[![Build](https://img.shields.io/travis/thejellyfish/binary-search)](https://travis-ci.org/github/thejellyfish/binary-search)
[![Coverage](https://img.shields.io/codecov/c/github/thejellyfish/binary-search)](https://codecov.io/gh/thejellyfish/binary-search)
[![Downloads](https://img.shields.io/npm/dt/@jollie/binary-search)](https://www.npmjs.com/package/@jollie/binary-search)


# Binary search

Equal or closest search in **sorted array** using binary search algorithm.    
See https://en.wikipedia.org/wiki/Binary_search_algorithm#Procedure

### Performance

Binary search is faster than linear search (except for small array ...).

![js-perf](https://github.com/thejellyfish/binary-search/raw/master/js-perf.jpg)

### Install

```bash
yarn add @jollie/binary-search
```

or

```bash
npm install @jollie/binary-search
```

### Usage

```javascript
import { equalSearch, closestSearch } from '@jollie/binary-search';

// Equal search in numeric array
equalSearch([1, 2, 3], 2);   // Found -> Output 1
equalSearch([1, 2, 3], 5);   // Not found -> Output -1

// Equal search in string array
equalSearch(['a', 'b', 'c'], 'c');   // Found -> Output 2
equalSearch(['a', 'b', 'c'], '?');   // Not found -> Output -1

// Closest search
closestSearch([1, 2, 3], 2.2);  // Output 1
closestSearch([1, 2, 3], 2.6);  // Output 2
closestSearch([1, 2, 3], -1);   // Output 0
closestSearch([1, 2, 3], 1000); // Output 2
```

### Params

```javascript
equalSearch(haystack, needle[, { compare, from, to }]);
closestSearch(haystack, needle[, { compare, from, to }]);
```


| Prop      | Type       | Default                             | Note |
|:-----------|:------------|:-------------------------------------|:------|
| `haystack` | `array`  | mandatory                                 | Array of values 
| `needle` | `any`  | mandatory                                 | Searched value
| `compare` | `function` | `(needle, value) => needle - value` | Compare function. <br /><em>Special case for equalSearch:</em><br />if needle is a string, default compare is<br />`(a, b) => a.localeCompare(b)`
| `from`    | `integer`  | `0`                                 | Start index for range searching
| `to`      | `integer`  | `haystack.length - 1`               | End index for range searching


### Return value

Index in the array or -1 if not found

### Exception

Throw RangerError if `from` or `to` are outbounds
