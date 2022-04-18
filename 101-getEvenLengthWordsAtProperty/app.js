function getEvenLengthWordsAtProperty(obj, key) {
  const arr = obj[key];
    if(typeof(arr) !== 'object'){
      return [];
    }else{
      const ar = arr.filter(e => e.length % 2 === 0);
      return ar;
    }
}

var obj = {
  key: ['a', 'long', 'game', 'b', 'eee']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']