// ==================================================================================================================================
// TASK 1.
// -=Сделать первый символ заглавным=-
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";

// const ucFirst = function (str) {
//     return str[0].toUpperCase()+str.slice(1).toLowerCase(); 
// }
// console.log(ucFirst("uvasja"));
// console.log(ucFirst("nikol"));
// console.log(ucFirst("vova"));
// console.log(ucFirst("dima"));

// ==================================================================================================================================
// TASK 2.
// -= Операции с массивами =-
// Давайте произведём 5 операций с массивом.
// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 4. Удалите первый элемент массива и покажите его.
// 5. Вставьте «Рэп» и «Регги» в начало массива.

// const musics = ['Jazz', 'Blues'];
// console.log(musics);
// musics.push('Rock-and-Roll');
// console.log(musics);
// musics.splice(1, 1, "Classic");
// console.log(musics);
// console.log(musics.shift(0));
// musics.unshift('Rap', 'Reggae');
// console.log(musics);

// const style = ['Jazz', 'Blues'];
// const add = ['Rock-and-Roll'];
// style.push(add[0]);
// const array = style.concat(add);
// const index = Math.floor(array.length/2);
// array.splice(index, 1, "Classic")
// console.log(style);


// const remove = ['Рэп','Регги']
// const add = ['Рок-н-ролл'];

// const style = ['Джаз','Блюз'];
// //  style.push(add[0]);
// const array = style.concat(add);

// const index = Math.floor(array.length/2); 
// array.splice(index,1,"Классика")

// const removedElement = array.shift()

// // array.unshift(...remove);
// const newArray =remove.concat(array);

// console.log('newArray :>> ', newArray);

//   console.log(array);

// ==================================================================================================================================
// Task 3.
// -=Сумма введённых чисел=-
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».



// function sumInput() {
    //     let num = "";
    //     let sum = 0;
//     const arr = [];
//     do {
    //         num = prompt("Введите число");
//         console.log(num);
//         if (Number.isNaN(Number(num)) || !num) {
//             break
//         };
//         arr.push(num);
//     } while (num !== null);
//     for (let i = 0; i < arr.length; i += 1) {
    //         sum += Number(arr[i]);
    //     };
//     console.log(sum);
// }
// sumInput()

// function sumInput () {
//     let num = '';
//     let sum = 0;
//     const arr = [];
//     do {
//         num = prompt ("Введите число");
//         console.log(num);
//         if (Number.isNaN(Number(num)) || !num) {
//             break
//         };
//         arr.push(num);
//     } while (num !== null);
//     for (let i = 0; 1 < arr.length; i += 1) {
//         sum += Number(arr[i]);
//     };
//     return sum
// }
// const result = sumInput();
// console.log(result);


// function sumInput() {
//     let num = "";
//     let sum = 0;
//     const array = [];
//         function getNum() {
//             do {
//             num = prompt("Enter numer");
//             //console.log(num);
            
//             if (Number.isNaN(Number(num)) || !num) {
//                     break
//             };
//             array.push(num);
//             } while (num !== null);
            
//     }
   
//     function getResult() {
//         for (let i = 0; i < array.length; i += 1) {
//         sum += Number(array[i]);

//         //console.log(array.length[i]);
//         };
        
//     }
//     getNum()
//     getResult()
    
//     return sum;
// }
// const result = sumInput()
// console.log(result);


// Task 4.
// -=Переведите текст вида border-left-width в borderLeftWidth=-
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

// function camelize (str) {
//     const arr = str.split('-');
//     // console.log(arr);
//     for (const item of arr) {
//         if (arr.indexOf(item) === 0) {
//             continue
//         }
//         const idex = arr.indexOf(item);
//         const capitalize  = item[0].toUpperCase()+item.slice(1, item.length);
//         arr.splice(arr.indexOf(item), 1, capitalize);
//         // item = item[0].toUpperCase()+item.slice(1, item.length)
//         // console.log(item[0].toUpperCase()+item.slice(1, item.length));
//     }
//     return arr.join('');

// }
// const result = camelize('border-left-width');
// console.log(result);


// ==================================================================================================================================
// Task 5.
// -=Фильтрация по диапазону=-
// Напишите функцию filterRange(arr, a, b), 
// которая принимает массив arr, 
// ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log( filtered ); // 3,1 (совпадающие значения)
// console.log( arr ); // 5,3,8,1 (без изменений)



// const arr = [5, 3, 8, 1];
// const filterRange = (arr, a, b) => {

//     const newArr = [];
//     for (const num of arr) {
//         if (num >= a && num<=b) {
//             newArr.push(num);
//         }
//     }
//     return newArr;
// }
// const result = filterRange(arr, 2, 4);
// console.log(result);


// ==================================================================================================================================
// Task 7.
// -=Отсортировать пользователей по возрасту=-
// Напишите функцию sortByAge(users), которая принимает массив 
// массивов и сортирует их по возрасту.
// Например:
// let vasya = [ "Вася", 25 ];
// let petya = ["Петя", 30 ];
// let masha = ["Маша", 28 ];
// let arr = [ vasya, petya, masha ];
// sortByAge(arr);


// const vasya = ["Вася", 25 ];
// const petya = ["Петя", 30 ];
// const masha = ["Маша", 28 ];

// const arr = [ vasya, petya, masha ];
// function sortByAge (array) {
//     const newArr = []
//     for (const arr of array) {
//         // console.log(arr[1]);
//         newArr.push(arr[1]);
//         // if (arr <=)
//     }
//     console.log(Math.min(...newArr));
//     newArr.splice()
//     console.log(newArr);
// }


// sortByAge(arr);