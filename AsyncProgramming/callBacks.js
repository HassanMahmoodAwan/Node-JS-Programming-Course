// Callbacks are when done then call me.
// Callback is a function which is passed as an argument to the main function. when the work done then call this handler Callback function.
// Problem is CallBack Hell means one func dependent on other and other is dependent on another. there is a chain.
// Jquery library uses Callbacks.



const preparingFood = function(choice, flavor, callbackOne, callbackTwo){
  console.log(`your order ${choice} flavor ${flavor} is recieved`);
  console.log('Order is start preparing');
  
  setTimeout(()=>{
    callbackOne(`your ${flavor} ${choice} is prepared `);
    callbackTwo(choice, flavor);
  }, 2000);
  
  
};

const handlePreparing = (flavor)=>{
  console.log(flavor)
};

const handleRecieving = (choice, flavor)=>{
  console.log(`I recieved my order ${flavor} ${choice}`);
};


// Function Calling
preparingFood('Pizza', 'Tikka', handlePreparing, handleRecieving);


