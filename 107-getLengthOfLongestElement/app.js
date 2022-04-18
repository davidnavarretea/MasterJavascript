function getLengthOfLongestElement(arr) {
    let resultado = 0;
    arr.map(n => {
        if(n.length > resultado){
            resultado = n.length;
        }
    })
    return resultado;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5