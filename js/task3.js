'use strict'

function findLongestWord (string = "") {
    const words = string.split(' ');
    // console.log(words);
    let longestWord = words[0];
    // console.log(longestWord);
    let length = words.length;
    // console.log(length);
     for (let i=0; i<length; i+=1) {
        //  console.log(words[i]);
     if (longestWord.length < words[i].length) {
         longestWord = words[i];
         }

     }
     return longestWord;
    
  }
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'
  
// console.log(findLongestWord('Google do a roll'));
// // 'Google'
  
// console.log(findLongestWord('May the force be with you'));
//  // 'force'
  