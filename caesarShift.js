'use strict';
const caesar = {};

caesar.encode = encode;
caesar.decode = decode;

function encode(message) {
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
      code = (code + 3) % upperCaseRange.highest;

    } else if (code >= lowerCaseRange.lowest &&
      code <= lowerCaseRange.highest) {
      code = (code + 3) % lowerCaseRange.highest;
    }
    return String.fromCharCode(code);
  });
  return charArray.join('');
}

function decode(message) {
  return message;
}

module.exports = caesar;
