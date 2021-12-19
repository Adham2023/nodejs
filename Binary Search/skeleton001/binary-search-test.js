import binarySearch from './binary-search.js';
import { deepStrictEqual } from 'assert';

deepStrictEqual(binarySearch([], 2), -1);
deepStrictEqual(binarySearch([1], 1), 0);
deepStrictEqual(binarySearch([1], 2), -1);
deepStrictEqual(binarySearch([1,2,3], 2), 1);
deepStrictEqual(binarySearch([1,2,3], 3), 2);
deepStrictEqual(binarySearch([1,2,3], 4), -1);
deepStrictEqual(binarySearch([1,2,3,7], 3), 2);