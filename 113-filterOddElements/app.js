function filterOddElements(arr) {
  const ar = arr.filter(e => e % 2 !== 0);
  return ar;
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]