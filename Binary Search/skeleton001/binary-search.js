/* Typical comparison function */
let defaultCompare = (a, b) =>
  a > b ? 1 : (a < b ? -1 : 0);
  
/* Version 1:
    O(n)
    Fixed memory
    Loops
*/
let binarySearchWithLoops = (array, element, compare = defaultCompare) => {
    return -1;
};

export default binarySearchWithLoops;