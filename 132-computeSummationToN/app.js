function computeSummationToN(n) {
    if(n === 0){
        return 0;
    }else{
        return n + computeSummationToN(n-1);
    }
}

var output = computeSummationToN(6);
console.log(output); // --> 21