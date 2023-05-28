// Using Axios as a library of js which uses Promises as an Example.

const axios = require('axios');


axios.get('https://usman-fake-api.herokuapp.com/api/recipes').then((res)=>{
  console.log(res.data);
}).catch(err=>{
  console.log(err);
});

// Gives all data in the Api form of Json Array.
// Run and Check.