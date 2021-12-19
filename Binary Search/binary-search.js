/* Typical comparison function */
let defaultCompare = (a, b) =>
  a > b ? 1 : (a < b ? -1 : 0);
  
/* Version 1:
    O(n)
    Fixed memory
    Loops
*/
let binarySearchWithLoops = (array, element, compare = defaultCompare) => {
    // TODO 1: Create left-limit index
    let left = 0;
    // TODO 2: Create right-limit index
    let right = array.length - 1;

    // TODO 3: Create a loop and give condition left <= right
    while(left <= right) {
      // TODO 4: create middle variable index
      let middle = Math.floor((right + left) / 2)
      // TODO 5: comapre the tow element;
      // TODO 6: create switch case;
      switch(compare(element, array[middle])) {
        case -1: { // biz qidirayotgan element chap tarafdaligini bildiradi va right limitni yangilash kerak
            right = middle - 1;
            break;
        }
        case 1: { // biz qidirayotgan element o'ng tarafdaligini bildiradi va left limitni langilash kerak
            left = middle + 1;
            break;
        }
        default: {
          return middle;
        }
      }
    }

    return -1;
};


binarySearchWithRecursion = (array, element, compare = defaultCompare, left=0, right=array.length - 1) => {
    // TODO 1: create middle index
    if(left > right) return -1;
    const middle = Math.floor((right + left) / 2)
    // TODO 2: comprasition
    const comparision = compare(element, array[middle])
  
    return (
    comparision === -1 ? 
      binarySearchWithRecursion(array, element, compare, left, middle - 1)
    : comparision === 1 ?
      binarySearchWithRecursion(array, element, compare, middle + 1, right)
    : middle
    )
  
  };

  let binarySearchWithRecursionTail = (array, element, compare = defaultCompare, left=0, right=array.length - 1) => {
    // TODO 1: create middle index
    if(left > right) return -1;
    
    const middle = Math.floor((right + left) / 2)
    // TODO 2: comprasition
    const comparison = compare(element, array[middle])

    if(comparison === 0) {return middle}
  
    const newBounds = comparison === -1 
      ? [left, middle - 1]
      : [middle + 1, right]
    return  binarySearchWithRecursion(array, element, compare, ...newBounds)
    // TAIL RECURSION;
  };

module.exports =   {
    binarySearchWithLoops,
    binarySearchWithRecursion,
    binarySearchWithRecursionTail
};

