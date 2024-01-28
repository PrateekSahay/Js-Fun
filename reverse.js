let statement1 = "Hi I am Prateek";
// Prateek am I Hi

// const reverseStatement = (statement2) => {
//     let statement = statement2.split("");
//   const length = statement.length;
//   let startIndex = 0;
//   let endIndex = length -1 ;
//   while (startIndex < endIndex) {
//     let temp = statement[startIndex];    
//     statement[startIndex] = statement[endIndex];
//     statement[endIndex] = temp;    
//     startIndex ++;
//     endIndex --;
//     console.log("statement1", statement);
//   }
//   console.log("statement", statement.join(""));
// }

// string is immutable in js

reverseStatement(statement1);

const m = "Hi I am Prateek";
m.split('').reverse().join('');

const x = "Hi I am Prateek";
x.split(' ').reverse().join(' ')