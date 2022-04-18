function average(array_of_numbers) {
  return sum(array_of_numbers) / array_of_numbers.length
}

function sum(numbers) {
    return numbers.reduce((p,c) => p + c);
}