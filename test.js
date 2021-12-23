// "use strict";
// function subarraySum(arr, n, s) {
//   let sum = 0;
//   let left = 0,
//     right = 0;
//   while (right < n) {
//     if (sum > s) {
//       sum -= arr[left];
//       left++;
//       console.log("sliding left", left, sum)
//     }
//     else if (sum < s) {
//       sum += arr[right];
//       right++;
//       console.log("sliding right", right, sum)
//     }
//     if (sum === s) {
//       return [left + 1, right ];
//     }
//   }
//   while (sum !== s && left < n) {
//     sum -= arr[left];
//     left++;
//   }
//   if (sum !== s) return [-1];
//   return [left + 1, right ];
// }

// console.log(
//   subarraySum(
//     [
//         135, 101, 170 ,125,79 ,159 ,163, 65, 106 ,146, 82, 28, 162 ,92 ,196, 143, 28 ,37, 192, 5 ,103 ,154, 93 ,183 ,22 ,117 ,119, 96 ,48, 127, 172 ,139, 70, 113, 68 ,100, 36, 95, 104 ,12, 123, 134
//     ],
//     42,
//     468
//   )
// );

// let o = {
//   // An object o.
//   m: function () {
//     // Method m of the object.
//     let self = this; // Save the "this" value in a variable
//     console.log(this === o); // => true: "this" is the object o.
//     f();
//     f2();
//     function f() {
//       // A nested function f
//       console.log(this === o); // => false: "this" is global or undefined
//       console.log(this);
//       console.log(self === o); // => true: self is the outer "this" value
//     }

//     const f2 = (() => {
//       // A nested function f
//       console.log(this === o); // => false: "this" is global or undefined
//       console.log(this);
//       console.log(self === o); // => true: self is the outer "this" value
//     }).bind(this);
//   },
// };

// o.m();


// const module2 = {
//   x: 42,
//   getX: function() {
//     return this.x;
//   }
// };


// const boundGetX = module2.getX.bind(module2);
// console.log(boundGetX());
// // expected output: 42


let  o = {
  name: "Adham"
}

function printer(arr) {
  console.log(this.name)
  console.log(Array.isArray(arr), arr)
  arr.forEach(element => {
    console.log(element)
  });
}

// printer.call(o)
printer.call(o, [1, 2, 3])