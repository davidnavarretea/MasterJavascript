function isIsogram(text) {
  const arr = text.split('');
  const elset = new Set(arr);
  if(text.length === elset.size){
    return true;
  }else{
    return false;
  }
}
console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false