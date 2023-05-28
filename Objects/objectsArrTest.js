console.clear();

// Check why this program not working.
const objectAry = require('./objectsArray.json');
console.log(objectAry); // Not Working

// Testing different Array Methods
// 1
const objectWRTLoc = objectArray.find(e=>e.Location == 'Lahore');
console.log(objectWRTLoc);

// 2
const slicingObjects = objectAry.slice(1,2); // (start, end)
console.log(slicing);
