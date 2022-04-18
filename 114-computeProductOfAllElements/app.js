function computeProductOfAllElements(arr) {
    if(arr.length === 0){
        return 0;
    }else{
    let total = 1;
    arr.map(n => {
        total = total * n;
    })
    return total;
}
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60