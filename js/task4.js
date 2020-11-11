'use strict'

function formatString (string, maxLength = 40) {
    let stringLength = string.length;
    // console.log(stringLength);;
    if (stringLength <= maxLength) {
        // console.log(string);
    }
    return string;
  }
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // 'Curabitur ligula sapien, tincidunt non.'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // 'Vestibulum facilisis, purus nec pulvinar...'
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
  // 'Vestibulum facilisis, purus ne...'

//   const string = 'Curabitur ligula sapien, tincidunt non.'
//   let stringLength = string.length;
//   console.log(stringLength);
 

