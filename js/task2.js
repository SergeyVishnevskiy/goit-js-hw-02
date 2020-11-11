'use strict'


// let message = 'Proin sociis natoque et magnis parturient montes mus';
// let spl = message.split(' ');
// let len = spl.length;
// let price = len * 10;

// console.log(message);
// console.log(spl);
// console.log(len);
// console.log(price);



const calculateEngravingPrice = function (message = "", pricePerWord = 0) {
    let messageSplit = message.split(' ')
    // console.log(messageSplit)
    let messageLength = messageSplit.length;
    // console.log(messageLength);
    let result = messageLength * pricePerWord;
    
    return result
}; // Write code in this line

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

console.log(calculateEngravingPrice('Uno', 100)); // 100


