function search(array, value) {
  const index = array.findIndex(n => n === value)
  if(index === -1){
    return null;
  }else{
  return index;
}}

var arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // => 4