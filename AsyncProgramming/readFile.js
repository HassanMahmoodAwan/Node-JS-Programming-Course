console.clear()
const fs = require('fs');



// Syncrohnous way of reading the file.
console.log('File started Reading');
// Issue is that if take lot of time in reading a file then this func will not free the thread uptil its complete excecution.
const fileText = fs.readFileSync('Text.txt', 'utf8');
console.log(fileText);
console.log('reading file done');


// Async way of reading a file. need to give callBack.
console.log('\n\n\nFile started Reading');
const fileTextReading = fs.readFile('Text.txt', 'utf8', (err, data)=>{
  return new Promise((resolve, reject)=>{
    err ? reject(err):resolve(data);
  }).then(res=>{
    console.log(res);
  }).catch(err=>console.log(err));
});

console.log('reading file done');


// Using External CallBack

console.log('\n\n\nstart reading the File');

let fileReading = fs.readFile('Text.txt', 'utf8', function callback(err, data){
  return new Promise((resolve, reject)=>{
    err ? reject(err):resolve(data);
  }).then(
  function(data){console.log(data)},
  function(err){console.log(err)});
}
);








