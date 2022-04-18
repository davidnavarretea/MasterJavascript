function removeArrayValues(obj) {
    for (const p in obj){
        if(typeof(obj[p]) === 'object'){delete obj[p]}
    }
}