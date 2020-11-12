'use strict'

function mapArray(array) {
    'use strict';
    // const numbers = newArray(array.length);
    const newArr = [];
    const len = array.length;
    for(let i = 0; i < array.length; i += 1) {
        // console.log(array[i]);
        newArr.push(array[i] * 10);
    }
    return newArr;
  }
console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]
console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]

console.table(mapArray([-2, 0, 2]));



























//   function mapArray(array) {
//     const numbers = new Array(array.length);
//       const num = [];
//     for(let i = 0; i < array.length; i += 1) {
//        num.push(array[i]*10);
//     }
//     return num;
//   }