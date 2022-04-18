const getAverageOfElementsAtProperty = (obj, key) => {
  const arr = obj[key];
  let promedio = 0;
  if (typeof (arr) !== 'object'){
    return 0;
  }else if(arr.length === 0){
    return 0;
  }else{
    arr.map(n => {
      promedio = promedio + n;
    })
    promedio = promedio / arr.length;
    return promedio;
  }
}