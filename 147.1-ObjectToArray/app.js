function getAllKeys(obj) {
  const arr = Object.keys(obj);
  return arr;
}
let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // ['name', 'age', 'hasPets']