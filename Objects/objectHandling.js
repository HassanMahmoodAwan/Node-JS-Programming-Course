// Destructing is a way to extract the values from the objects in a more cleaner way than a traditional way.

console.clear();

let address = {
  Location: 'Sabzazar',
  City: 'Lahore',
  Country: 'Pakistan'
};
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};



// Object destructing  Note: (Names should be similar as in Object.)
const {Location, City, Country } = address;
console.log(City);  // checker
// For extracting Properties and assigning to variable.
const {Location:loc, City:city, Country:cntry} = address;
console.log(cntry);

const display = (loc, city, countr)=>console.log(`I am from ${loc} which is area of ${city} situated in ${countr} `);
// function call
display(Location, City, Country);


//Use Destructuring for passing object to function.
// Normal way of passing an object in function.
const half = (stats) => (stats.max + stats.min) / 2.0; 
console.log("working");

// Using Destructing passing an object.
const halfs = ({ max, min }) => (max + min) / 2.0;
console.log(halfs(stats));
