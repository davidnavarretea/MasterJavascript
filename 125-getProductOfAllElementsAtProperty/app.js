function getProductOfAllElementsAtProperty(obj, key) {
  const arr = obj[key];
  let result = 1;
  if(!Array.isArray(arr)){
    return 0;
  }else if (arr.length === 0){
    return 0;
  }else{
    arr.map(n => {
      result = result * n;
    })
    return result;
  }
}


var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24