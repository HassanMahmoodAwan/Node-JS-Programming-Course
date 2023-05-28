// Types of Functions
// 1- simple func // can be declare anywhere in program. position doesnot matters.
// 2- anonymous Funcitons.
// if else alternative (Ternary Operator).


console.clear();

let arg = 'Hassan';

function print(arg){
  console.log(arg);
  return 2+arg;
};

// Anonymous Functions
const display = function(arg){
  console.log(arg);
}

// arrow function. (Anonymous)
const show = (arg, defaultPara = 'Hello')=>{
  console.log(arg);
}

// arrow functions shorthand
const shortHand = arg=> console.log(arg);


const ternary = ( args = 'ternary',  no = 2)=>{
  args ? true : false;
  
  // nested ternary
  return args ? true : no == 2 ? 1: false;
}



// printing and test yourself.

  // print; // Not working just return functions
 print(arg);
 console.log(print(arg));

 // display;
display(arg);

show;  // output
show(arg);

 // shortHand;
shortHand(arg);

// Ternary Operator.
console.log(ternary); // output: [Function: ternary].
console.log(ternary(10)); // how to give second input?.

let a = 10;
console.log( a && 'hello Talha');  // if (a) true then print hello Talha.