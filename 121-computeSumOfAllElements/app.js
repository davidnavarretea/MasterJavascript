function computeSumOfAllElements(arr) {
  let total = 0;
  arr.map(n => {
    total = total + n;
  })
  return total;
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6