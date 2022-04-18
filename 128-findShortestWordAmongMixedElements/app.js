function findShortestWordAmongMixedElements(arr) {
    let resultado = '';
    let total = 9999999999999999999;
    if(arr.length === 0){
        return '';
    }else{
        arr.map(e => {
            if(typeof e === 'string'){
                if(e.length < total){
                    total = e.length;
                    resultado = e;
                }
            }
        })
        return resultado;
    }
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'