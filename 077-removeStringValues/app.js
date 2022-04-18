function removeStringValues(obj) {
    for (const p in obj){
        if (typeof(obj[p]) === 'string'){delete obj[p]}
    }
}