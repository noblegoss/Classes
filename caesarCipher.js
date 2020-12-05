function caesarCipher(str, num){

  num %= 26 // if num was bigger than 26, this should help; 26 = total of alphabet letter.
  // console.log(num)
  let lowCaseString = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = '';

  for(let i = 0; i<lowCaseString.length; i++){

    let currentLetter = lowCaseString[i];
    if(currentLetter === ' '){ // take care of the space character
      newString += currentLetter;
      continue;
    }

    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    //console.log(newIndex)
    if(newIndex > 25) newIndex -= 26;
    if(newIndex < 0) newIndex = 26 + newIndex;
   // console.log(newIndex)
    if(str[i] === str[i].toUpperCase()){
      // str[i] = currentLetter (but in caps)
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }
  }
  console.log(newString)
}

caesarCipher('zoo keeper', 2) // 'bqq mggrgt' ou num = 28 (26 + 2)

caesarCipher('zoo keeper', 3) // 'crr nhhshu' ou num = 29 (26 + 3)

caesarCipher('Big Car', -16) // 'Lsq Mkb'

caesarCipher('zoo keeper', 300) // num = 14; 'ncc yssdsf'

caesarCipher('Javascript', -900) // num = -16; Tkfkcmbszd

/*
 num %= 26 
 all number that have the same remainder when divided by 26 will give the same result.
 ex: if num = 1, 27, 53 ...313 ... 781
 1 % 26 = 1 
 
 */ 
 caesarCipher('zoo keeper',1) // 'app lffqfs'


// for(let i = 0; i< 1001; i++){
//   if(i%26 ===1) console.log(i)
// }

// modulo == remainder = le reste
// 27 % 26 === 1 est le reste