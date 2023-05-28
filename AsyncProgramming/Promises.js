// Sol to callBack hell is Promises.
// 3 states in Promises 1- Pending 2- Fullfil 3- reject.

console.clear();



function makeFood(choice, flavor = 'Tikka'){
  console.log('your order is recieved');
   
  return new Promise((resolve, reject)=>{
       
    flavor == 'Fajita' ? reject(`Sorry, ${flavor } is Out of Stock`):
      console.log(`your order ${choice} is start preparing`);
    setTimeout(()=>{
      resolve(`your order ${choice}is prepared`);
    }, 2000);
  });
};

console.log(makeFood('Pizza')); // state is pending.


makeFood('Burger', 'Fajita').then(message=>console.log(message)).catch(error=>{
  console.log(error);
});

