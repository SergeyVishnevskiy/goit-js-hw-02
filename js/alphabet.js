'use strict'
// Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
// a b c d e f g h i j k l m n o p q r s t u v w x y z

// let a = "a".charCodeAt();
// let b = "b".charCodeAt();
// let c = "c".charCodeAt();
// let z = "z".charCodeAt();
// console.log('a', a);
// console.log('b', b);
// console.log('c', c);
// console.log('z', z);

// const alhabet = 26;
// let string = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
// for (let i=0; i <= alhabet; i+=1) {
//     let alhabetArray = string.split(' ');
//     console.log(alhabetArray[i]);

// }
 const getAlphabet = function () {
     let charIndex = "a".charCodeAt(0);
     console.log(charIndex);
     let alphabet = '';
     for (let i=0; i<26; i+=1) {
         alphabet += String.fromCharCode(charIndex)
         charIndex+=1
     }
     return alphabet;
 }
 console.log(getAlphabet());
















