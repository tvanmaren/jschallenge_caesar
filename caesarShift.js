'use strict';
const caesar = {};

caesar.encode = encode;
caesar.decode = decode;

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
