function getLargestNumberAmongMixedElements(arr) {
    let total = 0;
    let prueba = 0;
    if(arr.length === 0){
      return 0;
    }else{
      arr.map(e =>{
        if(typeof e === 'number' && e > total){
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

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5