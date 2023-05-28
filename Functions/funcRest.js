const sum = (...args) => {
  // const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(sum(20, 40, 20, 10, 12, 43, [2,3,1], 'Hassan'));
// output:  1452,3,1Hassan

// Todo: do it using ForEach() loop.

const add = (...arg)=>{
  let t=0;   
  arg.forEach(x=>{
    t+=x;
  });
  return t;
}  // Done.

console.log(add(20, 40, 20, 10, 12, 43, [2,3,1], 'Hassan', 10,10,10));

