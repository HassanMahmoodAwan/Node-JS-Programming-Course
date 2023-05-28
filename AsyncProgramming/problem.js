// Using SetTime out when we are programming Async then working the code parallely.
// Problem is that we wait for 2 sec and the code exe will move forward and after 2 sec it will come back just to execute. it will not return any thing.


const preparationPizza = (flavor)=>{
  //Time to Prepare.
  setTimeout(()=>{
    console.log('Pizza is started to prepare');
    return `your ${flavor} pizza is prepared`;
  }, 2000);
  
  return `your order is ${flavor} pizza is  recieve`;  
};

console.log(preparationPizza('tikka'));


// How we will be able to return `your ${flavor} pizza is prepared`.

// Solution
//1- CallBacks
//2- Promises
//3- Async await