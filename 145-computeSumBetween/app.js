function computeSumBetween(num1, num2) {
    if (num1 > num2){
        return 0;
    }else{
    let total = 0;
    for(num1; num1 < num2; num1++){
        total = num1 + total;
    }
    return total;
}
}

var output = computeSumBetween(2, 5);
console.log(output); // --> 9