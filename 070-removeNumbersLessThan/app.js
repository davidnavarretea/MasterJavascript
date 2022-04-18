var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    for (const p in obj){
        if(obj[p] < num){
            delete obj[p];
        }
    }
}
