const {
    binarySearchWithLoops, 
    binarySearchWithRecursion, 
    binarySearchWithRecursionTail,
    binarySearchWithArraySplitting,
    ArrayView,
    binarySearchWithArrayView,
    ArrayPartition,
    binarySearchWithPartitionAndView } = require('./binary-search.js');
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


deepStrictEqual(binarySearchWithArraySplitting([], 2), -1);
deepStrictEqual(binarySearchWithArraySplitting([1], 1), 0);
deepStrictEqual(binarySearchWithArraySplitting([1], 2), -1);
deepStrictEqual(binarySearchWithArraySplitting([1,2,3], 2), 1);
deepStrictEqual(binarySearchWithArraySplitting([1,2,3], 3), 2);
deepStrictEqual(binarySearchWithArraySplitting([1,2,3], 4), -1);
deepStrictEqual(binarySearchWithArraySplitting([1,2,3,7], 3), 2);



let view = ArrayView([1,2,3,7]);

deepStrictEqual(view.toArray(), [1,2,3,7]);
deepStrictEqual(ArrayView([1,2,3,7], 1).toArray(), [2,3,7]);
deepStrictEqual(ArrayView([1,2,3,7], 1, 3).toArray(), [2,3]);
deepStrictEqual(view.slice(1, 3).toArray(), [2,3]);
deepStrictEqual(view.slice(1, 4).slice(0, 2).toArray(), [2,3]);

deepStrictEqual(view.get(0), 1);
deepStrictEqual(view.get(3), 7);
deepStrictEqual(view.get(-1), undefined);
deepStrictEqual(view.get(4), undefined);

deepStrictEqual(view.slice(1, 4).get(0), 2);
deepStrictEqual(view.slice(1, 4).get(2), 7);
deepStrictEqual(view.slice(1, 4).get(-1), undefined);
deepStrictEqual(view.slice(1, 4).get(3), undefined);

deepStrictEqual(binarySearchWithArrayView([], 2), -1);
deepStrictEqual(binarySearchWithArrayView([1], 1), 0);
deepStrictEqual(binarySearchWithArrayView([1], 2), -1);
deepStrictEqual(binarySearchWithArrayView([1,2,3], 2), 1);
deepStrictEqual(binarySearchWithArrayView([1,2,3], 3), 2);
deepStrictEqual(binarySearchWithArrayView([1,2,3], 4), -1);
deepStrictEqual(binarySearchWithArrayView([1,2,3,7], 3), 2);

view = ArrayView([1,2,3,7]);
let part = ArrayPartition(view, 2);
deepStrictEqual(part.left().toArray(), [1,2]);
deepStrictEqual(part.middle(), 3);
deepStrictEqual(part.right().toArray(), [7]);

deepStrictEqual(binarySearchWithPartitionAndView([], 2), -1);
deepStrictEqual(binarySearchWithPartitionAndView([1], 1), 0);
deepStrictEqual(binarySearchWithPartitionAndView([1], 2), -1);
deepStrictEqual(binarySearchWithPartitionAndView([1,2,3], 2), 1);
deepStrictEqual(binarySearchWithPartitionAndView([1,2,3], 3), 2);
deepStrictEqual(binarySearchWithPartitionAndView([1,2,3], 4), -1);
deepStrictEqual(binarySearchWithPartitionAndView([1,2,3,7], 3), 2);