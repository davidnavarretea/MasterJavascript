function getSquaredElementsAtProperty(obj, key) {
  const arr = obj[key];
  if (typeof(arr) !== 'object'){
    return [];
  }else{
    const ar = arr.map(n => n**2);
    return ar;
  }
}



var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]