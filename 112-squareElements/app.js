function squareElements(arr) {
  return arr.map(n => n**2)
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]