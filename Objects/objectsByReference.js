// So if 
// 1- Objects.
// 2- Functions.
// 3- Array.
// mean if we update the value then this is used in which reference will also be updated.


let a = 10;
let y = a;
a = 15;
// y will not be change and it will remain same (10).

// WhereAs

let student_114 = { name: 'Hassan', age: 22 };
let professional = student_114;  // Shallow Copy.
let Business = professional;  // dependent shallow copy.

// Change in one will change all.
console.log(professional);
console.log(student_114);
console.log(Business);


student_114.name = 'Hassan Awan';
professional.name = 'Hassan Mahmood';

// { name: 'Hassan Mahmood', age: 22 }
console.log(professional);
console.log(Business);


// Deep Copy. If wanted it a separate copy and not wanted any reference.
let personalLife = Object.assign({}, student_114);
console.log(personalLife);



// Now realTime example using Function.
let x = 10;
function increment(para) {
  para++;
}
increment(x);
console.log(x);  // give 10.

// where as
// increases the value.
let z = { value: 12 };
const increase = function(para) {
  para.value++;
}
increase(z.value);  // can also give (z)
console.log(z.value); // increase the z value as well.





