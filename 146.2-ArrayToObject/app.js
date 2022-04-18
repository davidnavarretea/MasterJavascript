function fromListToObject(array) {
  const objeto = {};
  array.map(e => {
    objeto[e[0]] = e[1];
  })
  return objeto;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);
console.log(output); // {make : 'Ford', model : 'Mustang', year : 1964}