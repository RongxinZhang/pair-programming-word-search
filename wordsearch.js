const createMatrix = function(col, row) {
  let resMatrix = [];
  for (let i = 0; i < row; i++) {
    resMatrix.push(new Array(col).fill("x"));
  }
  return resMatrix;
};
  
const transpose = function(matrix) {
  let row = matrix.length;
  let col = matrix[0].length;
  
  let newMatrix = createMatrix(row, col);
  
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      newMatrix[j][i] = matrix[i][j];
    }
  }
  return newMatrix;
};
  
// const createDiagonalMatrix = function(matrix) {
//   let responseMatrix = [];
//   for (let i = 0; i < matrix.length; i++) {
//     let diagonalWords = [];
//     let counter = 0;
//     for (let j = 0; j < matrix[i].length; j++) {
//       // If first element
//     //   if (j === 1) {
//     //     diagonalWords.push(matrix[i][j]);
//     //     matrix[i][j];
//     //     // ["A","B","C","D"],
//     //     // ["E","F","G","H"],
//     //     // ["I","J","K","L"],
//     //     // ["M","N","O","P"],
//     //   } else {
//       let diagRow = i + counter;
//       let diagCol = j;
        
//       if (diagRow > matrix.length) {
//         diagRow = i;
//       }
//       // if (diagCol > matrix[i].length) {
//       //   diagCol = j;
//       // }
//       diagonalWords.push(matrix[diagRow][diagCol]);
//       counter ++;
//       //   }
//       console.log(diagonalWords);
//       responseMatrix.push(diagonalWords);
//     }
//   }
// };

const wordSearch = (letters, word) => {

  if (letters.length <= 0) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  const reverseJoin = letters.map(ls => ls.reverse().join(''));
  for (let l of reverseJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

// module.exports = {wordSearch, createDiagonalMatrix};
module.exports = {wordSearch};

