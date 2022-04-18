function getOddElementsAtProperty(obj, key) {
    const arr = obj[key];
    if(typeof(arr) !== 'object'){
      return [];
    }else{
      const ar = arr.filter(n => n % 2 !== 0);
      return ar;
    }
}






var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]