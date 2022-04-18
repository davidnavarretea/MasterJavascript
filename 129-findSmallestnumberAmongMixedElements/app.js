function findSmallestNumberAmongMixedElements(arr) {
  let total = 2^53;
  let prueba = 0;
  if(arr.length === 0){
    return 0;
  }else{
    arr.map(e =>{
      if(typeof e === 'number' && e < total){
        prueba = prueba + 1;
        total = e;
        }
      })
    if(prueba === 0){
      return 0;
    }else{
      return total;
    }
  }
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4