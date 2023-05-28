// Func on Array are
// 1- find, findIndex()   // Takes function as para.
// 2- Sort()  // First sort upperCase then Lower.
// Splice()  // (Start, delete, add on);
// As arrays also uses reference so both array will change.
// check how to create a deep copy of a sorted array.(Solved)

console.clear();

let students = ['Hassan', 'Ali', 'ahsan'];

let searchStudent = students.find(findStd); // return Ali
let searchStudentIndex = students.findIndex(findStd);

// let sortedArray = students.sort();

let arraySplicing = students.splice(1, 1, 'Ahmad', 'Bjawa');
// Test.
arraySplicing = students.splice(1, 1, ...['Ahmad', 'Bjawa']);

// Custom func to buildin sort() func  // Test yourself.
let sortedArray = students.sort((a, b) => {
  if (a > b) return 1; else return -1;
});

function findStd(std) {
  if (std == 'Ali') { return true; }
  else return false
};

// MAP and it take each element of an array. (deep Copy) 
const rates = [2, 10, 13];
const newRates = rates.map(r => r * 2);


// Printing Results.
console.log(searchStudent, searchStudentIndex);
console.log(sortedArray, students);
console.log(arraySplicing // ( its show the deleted one.)
  , students// complete
);
// Spread Operator returns the elements in an array.
console.log(...students);
console.log(rates, newRates);



// // deep copy of sorted array.
// Method 1
const marks = [35, 18.5, 42, 46]
let sorted_arr = [...marks].sort();
console.log(sorted_arr);

// Method 2
const mappedSortedArray = marks.map(e => e).sort();
console.log(mappedSortedArray);

// Method 3
const forEachSortedArray = [];
marks.forEach(e => forEachSortedArray.push(e));
forEachSortedArray.sort();
console.log(forEachSortedArray, marks);