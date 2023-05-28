console.clear();


const arr1 = [10, 12, 13, 9];

let arr2 = [];

// Using Spread Operator // deep Copy.
arr2 = [...arr1];
arr2.sort(); // why not sorted.
arr1.push(3);
console.log(arr1, arr2);
// I think so sort not work on numbers


const maxim = Math.max.apply(null, arr2); // 13.
const maxi = Math.max(arr2); // output: NaN
const maximus = Math.max(...arr2); // 13.