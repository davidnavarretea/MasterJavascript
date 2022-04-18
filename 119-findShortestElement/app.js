function findShortestElement(arr) {
    let total = 99999999999999999;
    let result = '';
    arr.map(n => {
        if(n.length < total){
            total = n.length;
            result = n;
        }
    })
    return result;
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'