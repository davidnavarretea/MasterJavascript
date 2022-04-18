function getLengthOfShortestElement(arr) {
    let corto = 99999999999999;
    if(arr.length === 0){
        return 0;
    }else{
        arr.map(n => {
            if(n.length < corto){
                corto = n.length;
            }
        })
        return corto;
    }
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3