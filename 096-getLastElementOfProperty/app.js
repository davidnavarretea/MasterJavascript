const getLastElementOfProperty = (obj, key) => {
    const arr = obj[key];
    return arr[arr.length - 1];
}
var obj = {
    key: [1, 2, 5]
  };
  var output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5