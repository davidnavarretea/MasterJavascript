function addToBackOfNew(arr, element) {
    let a = [...arr];
    a.push(element);
    return a;
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]