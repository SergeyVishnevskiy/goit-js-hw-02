'use strict'

// function checkForSpam (str) { 
//     'use strict';
    // Write code under this line
    
//   }
  
  //console.log(checkForSpam('Latest technology news')); // false
  
  //console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  //console.log(checkForSpam('Get best sale offers now!')); // true
  
  //console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

  //Функция предикат возвращает true или false

  //Напиши функцию checkForSpam(message), 
  //принимающую 1 параметр message - строку. Функция проверяет ее на 
  //содержание слов spam и sale. Если нашли запрещенное слово 
  //то функция возвращает true, если запрещенных слов нет функция 
  //возвращает false. Слова в строке могут быть в произвольном регистре.

  function checkForSpam (message) { 
    const msg = message.toLowerCase();
    if (msg.includes('spam') || msg.includes('sale')) {
        return true;
    }
    return false;
  }
  
//   console.log(checkForSpam('Pizza'));
//   console.log(checkForSpam('hellO'));
//   console.log(checkForSpam('spAm'));
//   console.log(checkForSpam('saLe'));


  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true