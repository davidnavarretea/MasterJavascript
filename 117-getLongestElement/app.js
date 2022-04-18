function getLongestElement(arr) {
    let total = 0;
    let resultado = '';
    arr.map((n,i) => {
        if (n.length > total){
            total = n.length;
            resultado = arr[i];
        }
    })
    return resultado;
}
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'