
function addToFrontOfNew(arr, element) {
    a = [...arr];
    a.unshift(element);
    return a;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]