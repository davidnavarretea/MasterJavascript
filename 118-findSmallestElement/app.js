function findSmallestElement(arr) {
    if (arr.length > 0){
        return Math.min(...arr);
    }else{
        return 0;
    }
    
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1