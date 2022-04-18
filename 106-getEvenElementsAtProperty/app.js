function getEvenElementsAtProperty(obj, key) {
    const arr = obj[key];
    if(typeof(arr) !== 'object'){
      return [];
    }else{
      const ar = arr.filter(n => n % 2 === 0);
      return ar;
    }
}



var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]