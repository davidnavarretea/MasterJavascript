function isOddWithoutModulo(num) {
    if (num % 2 !== 0){
        return true;
    }else{
        return false
    }
}
var output = isOddWithoutModulo(17);
console.log(output); // --> true