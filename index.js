
// const sum = (x) => (y) => y ? sum(x + y) : x;

// console.log(sum(1)(2)());
// console.log(sum(1)(2)(3)());

// console.log(sum(1,2,3,4,5));
// console.log(sum(1,2,3,4)(5));
// console.log(sum(1,2,3)(4,5));
// console.log(sum(1,2)(3,4,5));
// console.log(sum(1)(2,3,4,5));
// console.log(sum(1)(2)(3)(4)(5));

// const sum2 = (...args) => {
//     let ans = 0;
//     args.forEach((x) => {
//         ans += x
//     });
//     return function(...args) {
//         sun2(args);
//     } 
// }

// const sum = (...args) => {
//     console.log("args", args)
//     if (args.length == 5) {
//         return args.reduce((acc, curr) => acc + curr, 0);
//     }
//     else {
//         return function (...args2) {
//             console.log("args2", args2)
//             args = args.concat(args2)
//             sum(args);
//         }
//     }    
// }

// const midFunc = sum(1,2,3,4);
// console.log(midFunc);
// console.log(midFunc(5));

// console.log(sum(1,2,3,4)(5));


// utils.js
const calculateWinner = (squares) => {
    const BOARD_SIZE = squares.length;
  
    for (let i = 0; i < BOARD_SIZE; i++) {
      // Check rows
      if (squares[i][0] && squares[i].every((val) => val === squares[i][0])) {
        return squares[i][0];
      }
      // Check columns
      if (squares[0][i] && squares.every((row) => row[i] === squares[0][i])) {
        return squares[0][i];
      }
    }
    // Check diagonals
    if (squares[0][0] && squares.every((row, index) => row[index] === squares[0][0])) {
      return squares[0][0];
    }
    if (squares[0][BOARD_SIZE - 1] && squares.every((row, index) => row[BOARD_SIZE - 1 - index] === squares[0][BOARD_SIZE - 1])) {
      return squares[0][BOARD_SIZE - 1];
    }
    // Check for a draw
    if (squares.every((row) => row.every((val) => val))) {
      return 'Draw';
    }
    return null;
  };
  
  const squares = [
    ['X', 'O', null],
    [null, 'X', 'O'],
    [null, null, 'X'],
  ];
  const winner = calculateWinner(squares);
  console.log(winner)