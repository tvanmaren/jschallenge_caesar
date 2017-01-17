'use strict';
const caesar = {};

caesar.encode = encode;
caesar.decode = decode;

// function caesarRing(unicode, min, max, shift, add) {
//   let ring = max - min;
//   let newCode = unicode - min;
//   if (newCode < shift && !add) {
//     newCode += max;
//   }
//   unicode = (unicode + shift) % ring;
//   unicode += min;
//   return unicode;
// }

// function caesarShift(message, modifier, addBool) {
//
//   let charArray = message.split('');
//   charArray = charArray.map((char) => {
//     let code = char.charCodeAt(0);
//     let upperCaseRange = {
//       floor: 65,
//       ceil: 90
//     };
//     let lowerCaseRange = {
//       floor: 97,
//       ceil: 122
//     };
//     if (code >= upperCaseRange.floor &&
//       code <= upperCaseRange.ceil) {
//       code = caesarRing(code, upperCaseRange.floor, upperCaseRange.ceil, modifier, addBool);
//
//     } else if (code >= lowerCaseRange.floor &&
//       code <= lowerCaseRange.ceil) {
//       code = caesarRing(code, lowerCaseRange.floor, lowerCaseRange.ceil, modifier, addBool);
//     }
//     return String.fromCharCode(code);
//   });
//
//   return charArray.join('');
//
// }

function codeRing(char, shift, min) { //lower:97-122,upper:65-90
  let code = char.charCodeAt(0) + shift;
  if (code >= (min + 26)) {
    code -= 26;
  } else if (code < min) {
    code = (min + 25) - (min-code);
  }
  return String.fromCharCode(code);
}

function caesarShift(message, shift, encode) {
  if (!encode) {
    shift *= (-1);
  }

  return message.split('')
    .map((char) => {
      if (char.match(/[a-z]/)) {
        return codeRing(char, shift, 97);
      } else if (char.match(/[A-Z]/)) {
        return codeRing(char, shift, 65);
      } else {
        return char;
      }
    })
    .join('');
}

function encode(message) {
  return caesarShift(message, 3, true);
}

function decode(message) {
  return caesarShift(message, 3, false);
}

module.exports = caesar;
