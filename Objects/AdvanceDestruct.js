console.clear();

// Nested Object
let addresses = {
  Location: {Society:'Sabzazar', Block:'N'},
  City: 'Lahore',
  Country: 'Pakistan'
}


// Normal way of Accessing
const society = addresses.Location.Society;


// Using destructing Methods
const {Location:{Society, Block}, City, Country} = addresses;
console.log(Block);

// Assigning Variable as well
const {Location:{Society:soc, Block:b}, City:city, Country:country} = addresses;
console.log(b);