function isEvenWithoutModulo(num) {
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}
var output = isEvenWithoutModulo(8);
console.log(output); // --> true