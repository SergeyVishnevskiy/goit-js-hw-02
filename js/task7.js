'use strict'
//   Напиши функцию filterArray(array), принимающую 1 параметр array - массив. 
//   Функция проверяет каждое значение массива - является ли значение конечным числом 
//   (Number.isFinite). Для проверки используй цикл for. 
//   Числа добавляются в новый массив numbers с помощью метода push, а не числа - игнорируются. 
//   По завершению проверки массива array возвращается массив numbers.

function filterArray(array) {
    
    const numbers = [];
    const numberLength = array.length; 
    for(let pensil = 0; pensil < numberLength; pensil += 1) {
    //   console.log(array[pensil]);
      if (Number.isFinite(array[pensil])) {
          numbers.push(array[pensil])
      } 
      
    }
    return numbers;
  }
  

console.log(filterArray([-2, 0, 2]));
  // [-2, 0, 2]
  
  console.log(filterArray([1, NaN, Infinity]));
  // [1]
  
  console.log(filterArray([0, -0, 100, '100']));
  // [0, 0, 100]
  
  console.log(filterArray([undefined, false, null, [], 1]));
  // [1]
  
  console.log(filterArray([{}, () => {}, 2]));
  // [2]

//   const number = -0;
//   console.log(Number.isFinite(number));
