const getFirstElementOfProperty = (obj, key) => {
    const arr = obj[key];
    return arr[0];
}

var obj = {
    key: [1, 2, 4]
  };
  var output = getFirstElementOfProperty(obj, 'key');
  console.log(output); // --> 1