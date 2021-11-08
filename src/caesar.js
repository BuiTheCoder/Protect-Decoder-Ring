// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    if (encode === false) {
      return input.toLowerCase().replace(/[a-z]/g, (c) => {
        if (c.charCodeAt(0) - 97 - shift < 0) {
          return String.fromCharCode(
            ((c.charCodeAt(0) - 71 - shift) % 26) + 97
          );
        } else {
          return String.fromCharCode(
            ((c.charCodeAt(0) - 97 - shift) % 26) + 97
          );
        }
      });
    } else {
      return input.toLowerCase().replace(/[a-z]/g, (c) => {
        if (c.charCodeAt(0) - 97 + shift < 0) {
          return String.fromCharCode(
            ((c.charCodeAt(0) - 71 + shift) % 26) + 97
          );
        } else {
          return String.fromCharCode(
            ((c.charCodeAt(0) - 97 + shift) % 26) + 97
          );
        }
      });
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
