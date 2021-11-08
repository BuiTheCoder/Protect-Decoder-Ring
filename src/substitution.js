// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    function isUnique(str) {
      return new Set(str).size == str.length;
    }
    if (!alphabet || alphabet.length !== 26 || isUnique(alphabet) === false) {
      return false;
    }

    const normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let cipher = {};
    for (let i = 0; i < 26; i++) {
      encode
        ? (cipher[normalAlphabet.charAt(i)] = alphabet.charAt(i))
        : (cipher[alphabet.charAt(i)] = normalAlphabet.charAt(i));
    }
    return input
      .toLowerCase()
      .match(/[a-z]|[^a-z]|\s/g)
      .map((character) => cipher[character] || character)
      .join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
