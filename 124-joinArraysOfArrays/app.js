function joinArrayOfArrays(arr) {
  let ar = [];
  arr.map(n => {
    ar = [...ar, ...n];
  })
  return ar;
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']

//Hecho con el spread operator en vez de con concat