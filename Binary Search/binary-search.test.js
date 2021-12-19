const {
    binarySearchWithLoops, 
    binarySearchWithRecursion, 
    binarySearchWithRecursionTail } = require('./binary-search.js');
const { deepStrictEqual }  = require('assert');

deepStrictEqual(binarySearchWithLoops([], 2), -1);
deepStrictEqual(binarySearchWithLoops([1], 1), 0);
deepStrictEqual(binarySearchWithLoops([1], 2), -1);
deepStrictEqual(binarySearchWithLoops([1,2,3], 2), 1);
deepStrictEqual(binarySearchWithLoops([1,2,3], 3), 2);
deepStrictEqual(binarySearchWithLoops([1,2,3], 4), -1);
deepStrictEqual(binarySearchWithLoops([1,2,3,7], 3), 2);


deepStrictEqual(binarySearchWithRecursion([], 2), -1);
deepStrictEqual(binarySearchWithRecursion([1], 1), 0);
deepStrictEqual(binarySearchWithRecursion([1], 2), -1);
deepStrictEqual(binarySearchWithRecursion([1,2,3], 2), 1);
deepStrictEqual(binarySearchWithRecursion([1,2,3], 3), 2);
deepStrictEqual(binarySearchWithRecursion([1,2,3], 4), -1);
deepStrictEqual(binarySearchWithRecursion([1,2,3,7], 3), 2);

deepStrictEqual(binarySearchWithRecursionTail([], 2), -1);
deepStrictEqual(binarySearchWithRecursionTail([1], 1), 0);
deepStrictEqual(binarySearchWithRecursionTail([1], 2), -1);
deepStrictEqual(binarySearchWithRecursionTail([1,2,3], 2), 1);
deepStrictEqual(binarySearchWithRecursionTail([1,2,3], 3), 2);
deepStrictEqual(binarySearchWithRecursionTail([1,2,3], 4), -1);
deepStrictEqual(binarySearchWithRecursionTail([1,2,3,7], 3), 2);