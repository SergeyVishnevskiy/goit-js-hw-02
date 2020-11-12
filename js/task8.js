'use strict'

function reduceArray(array) {
    const len = array.length;
    let total = 0;
    if (!len) {
        return 0;
    }
    for (let flesh = 0; flesh < len; flesh++) {
        // console.log(array[flesh]);
        total += array[flesh];
    }
    return total;
  };

console.log(reduceArray([1, 2, 3]));
  // 6
  
console.log(reduceArray([-2, 0, 2]));
  // 0
  
console.log(reduceArray([1, 2, 2.5]));
  // 5.5
//   Напиши функцию reduceArray(array), 
//   которая принимает числовой массив array. 
//   Если массив array не пустой, необходимо посчитать 
//   сумму всех элементов массива, используя цикл for. 
//   Для подсчета суммы используй переменную total. 
//   Функция должна возвращать 0 если массив пустой и 
//   значение total в противном случае.