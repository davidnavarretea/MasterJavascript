function getSmallestElementAtProperty(obj, key) {
    const arr = obj[key];
    if(Array.isArray(arr) && arr.length !== 0){
      return Math.min(...arr);
    }else{
      return [];
    }
}
var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
//Tiene BUG