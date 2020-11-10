'use strict'
// const users = ['Vova', 'Sara', 'Mike', 'Bob', 'Bob', 'Entoni Hopckins'];

// function arrayFind (array, name) {
//     let arrayLength = array.length

//     for (let i=0; i<arrayLength; i+=1) {
//         // console.log(array[i]);
//         if (array[i] === name) {
//             console.log('Нашли')
//             return true;
//         } 
//     }
//     console.log('Not found');
//     return false;
// }

// arrayFind (users, 'Bob')

// let arrayLength = users.length
// for (let i=0; i<arrayLength; i+=1) {
//     console.log(users[i]);
// }






const pets = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong', 'Warwik'];


// const getItemsString = function (array) {
//     let arrayLenght = array.length;
//     for (let i = 0; i < arrayLenght; i+=1) {
//         console.log(array[i]);
//     }
// }

// let getItemsString = 'Vova';
// getItemsString = 451;

let result = ''
const getItemsString = function (array) {
    let arrayLenght = array.length;
    for (let i = 0; i < arrayLenght; i+=1) {
        // console.log(i+1 + ' ' + "-" + ' ' + array[i]);
        result += `${i+1}${' - '}${array[i]} \n`;}
        console.log(result);
}

getItemsString(pets)









