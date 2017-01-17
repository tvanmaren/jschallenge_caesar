'use strict';
const caesar = {};

caesar.encode = encode;
caesar.decode = decode;

function caesarShift(message, modifier) {

  let charArray = message.split('');
  charArray = charArray.map((char) => {
    let code = char.charCodeAt();
    let upperCaseRange = {
      lowest: 65,
      highest: 90
    };
    let lowerCaseRange = {
      lowest: 97,
      highest: 122
    };
    if (code >= upperCaseRange.lowest &&
      code <= upperCaseRange.highest) {
      code = (code + modifier) % upperCaseRange.highest;

    } else if (code >= lowerCaseRange.lowest &&
      code <= lowerCaseRange.highest) {
      code = (code + modifier) % lowerCaseRange.highest;
    }
    return String.fromCharCode(code);
  });

  return charArray.join('');

}

function encode(message) {
  return caesarShift(message, 3);
}

function decode(message) {
  return caesarShift(message, -3);
}

module.exports = caesar;
