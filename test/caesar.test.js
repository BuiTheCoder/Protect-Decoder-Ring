// Write your tests here!
const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it("should return false if the shift amount is 0", () => { 
        const expected = false;
        const actual = caesar("input", 0);
        expect(actual).to.equal(expected);
    })
    it("should return false if the shift amount is above 25", () => {
        const expected = false;
        const actual = caesar("input", 26);
        expect(actual).to.equal(expected);
    })
    it("should return false if the shift amount is less than -25", () => {
        const expected = false;
        const actual = caesar("input", -30);
        expect(actual).to.equal(expected);
    })
  it("should encode a message by shifting the letters", () => {
        const expected = "wklqnixo";
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    })
  it("should leave spaces and other symbols as is", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    })
  it("should ignore capital letters", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    })
  it("should appropritately handle letters at the end of the alphabet", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    })
  it("should allow for a negative shift that will shift to the left", () => {
        const expected = "xyzab stuvw";
        const actual = caesar("abcde vwxyz", -3);
        expect(actual).to.equal(expected);
    })
  it("should decode a message by shifting the letters in the opposite direction", () => {
        const expected = "xyzab stuvw";
        const actual = caesar("abcde vwxyz", 3, false);
        expect(actual).to.equal(expected);
    })
})