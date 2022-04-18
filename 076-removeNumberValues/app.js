var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    for (const p in obj){
        if (typeof(obj[p]) === 'number'){delete obj[p]}
    }
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }