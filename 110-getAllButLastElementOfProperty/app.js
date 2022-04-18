function getAllButLastElementOfProperty(obj, key) {
    const arr = obj[key];
    if(Array.isArray(arr)){
      arr.pop();
      return arr;
    }else{
      return [];
    }
}


var obj = {
  key: [1, 2, 3]
};
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]