// Var can be reassigned and redeclare.
// reDeclare.
var name = 'Hassan Mahmood';
var name = 'Hassan Awan';
console.log(name);  // print Hassan Awan.

// reAssign.
name = 'Hassan';
console.log(name); // print Hassan.


// Let cannot be redeclare but can reassign
let age = 22;
// let age = 24; // (throw an error).

age = 25; //update the age.


// Const cannot be redeclare and ressign.
const career = 'full stack web development';
// const  career = 'AI engineer'; // throw an error

career = 'ML and data Science'; // throw an error.


console.log(career);

// Checking the Local and Global Scope.