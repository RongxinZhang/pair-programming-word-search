const chai = require('chai');
const assert = chai.assert;

const {wordSearch, createDiagonalMatrix} = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'R', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'A', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'K', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return false if empty array", function() {
    const result = wordSearch([ ], 'BOB');
    assert.isFalse(result);
  });

  it("should return true even if work is backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['D', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  // it("should return diagonal arrays", function() {
  //   const result = createDiagonalMatrix([
  //     ["A","B","C","D"],
  //     ["E","F","G","H"],
  //     ["I","J","K","L"],
  //     ["M","N","O","P"],
  //   ], [
  //     ["A","F","K","P"],
  //     ["B","G","L"],
  //     ["C","H"],
  //     ["D"],
  //     ["E", "J", "O"],
  //     ["F", "K", "P"],
  //     ["G", "L"],
  //     ["H"],
  //     ["I", "N"],
  //     ["J", "O"],
  //     ["K", "P"],
  //     ["L"],
  //     ["M"],
  //     ["N"],
  //     ["O"],
  //     ["P"],
  //   ]);

  //   assert.isTrue(result);
  // });

  // it("should return true if word is diagonal", function() {
  //   const result = wordSearch([
  //     ['F', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  //     ['S', 'R', 'I', 'C', 'F', 'E', 'L', 'D'],
  //     ['Y', 'F', 'A', 'A', 'Q', 'U', 'A', 'L'],
  //     ['H', 'M', 'J', 'N', 'E', 'V', 'R', 'G'],
  //     ['W', 'H', 'C', 'H', 'K', 'E', 'R', 'L'],
  //     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  //     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  //     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  //     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  //   ], 'FRANK');

  //   assert.isTrue(result);
  // });
});
