function removeStringValuesLongerThan(num, obj) {
    for (const p in obj){
        if(obj[p].length > num){delete obj[p]}
    }
}
