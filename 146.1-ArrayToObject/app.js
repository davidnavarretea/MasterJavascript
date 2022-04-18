function transformFirstAndLast(array) {
  const cero = array[0];
  const last = array[array.length - 1];
  const objecto = {};
  objecto[cero] = last;
  return objecto;
}

let output = transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])
console.log(output); // { Queen: "Beyonce" }