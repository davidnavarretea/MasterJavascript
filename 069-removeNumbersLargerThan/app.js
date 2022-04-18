var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    for(const p in obj){
        if(obj[p] > num){delete obj[p]};
    }
}