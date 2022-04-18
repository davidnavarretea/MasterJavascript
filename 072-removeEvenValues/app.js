function removeEvenValues(obj) {
    for (const p in obj){
        if (obj[p] % 2 === 0){delete obj[p]};
    }
}