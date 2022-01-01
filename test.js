// function addPrivateProperty(o, name, predicate) {
//   let value;

//   o[`get${name}`] = function() { return value }

//   o[`set${name}`] = function(v) {
//     if(predicate && !predicate(v)) {
//       throw new TypeError(`set${name}: invalid value ${v}`);
//     } else {
//       value = v
//     }
//   }

// }

// let o = {}

// addPrivateProperty(o, "Name", x => typeof x === 'string')

// try {

//   o.setName("Frank")
//   console.log(o.getName())
//   o.setName(0)

// } catch (error) {

//   console.log('error producing')
//   console.error(error)

// }


// function constfuncs() {
//   let funcs = [];
//   for(var i = 0; i < 10; i++) {
//       funcs[i] = () => i;
//   }
//   return funcs
// }

// let funcs = constfuncs();

// console.log(funcs[8]()) // => 10; Why doesn't this return 5?

// function aa(a, b, c, ...d) {
//   console.log(a,b, c )
// }
// let bb = () => 123
// console.log(bb.name)

// Return a memoized version of f.
// It only works if arguments to f all have distinct string representations.
function memoize(f) {
  const cache = new Map();  // Value cache stored in the closure.
  return function(...args) {
      // Create a string version of the arguments to use as a cache key.
      let key = args.length + args.join("+");
      if (cache.has(key)) {
          return cache.get(key);
      } else {
          let result = f.apply(this, args);
          cache.set(key, result);
          return result;
      }
  };
}

// Return the Greatest Common Divisor of two integers using the Euclidian
// algorithm: http://en.wikipedia.org/wiki/Euclidean_algorithm
function gcd(a,b) {  // Type checking for a and b has been omitted
  if (a < b) {           // Ensure that a >= b when we start
      [a, b] = [b, a];   // Destructuring assignment to swap variables
  }
  while(b !== 0) {       // This is Euclid's algorithm for GCD
      [a, b] = [b, a%b];
  }
  return a;
}

const gcdmemo = memoize(gcd);
gcdmemo(85, 187)  // => 17

// Note that when we write a recursive function that we will be memoizing,
// we typically want to recurse to the memoized version, not the original.
const factorial = memoize(function(n) {
  return (n <= 1) ? 1 : n * factorial(n-1);
});
console.time('first time')
factorial(25)      // => 120: also caches values for 4, 3, 2 and 1.
console.timeEnd('first time')

console.time('second time')
factorial(24)      // => 120: also caches values for 4, 3, 2 and 1.
console.timeEnd('second time')