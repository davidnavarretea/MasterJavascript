function getLongestWordOfMixedElements(arr) {
    let resultado = '';
    let total = 0;
    if(arr.length === 0){
        return '';
    }else{
        arr.map(e => {
            if(typeof e === 'string'){
                if(e.length > total){
                    total = e.length;
                    resultado = e;
                }
            }
        })
        return resultado;
    }
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'