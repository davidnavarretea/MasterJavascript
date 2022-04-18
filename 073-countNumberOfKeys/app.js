function countNumberOfKeys(obj) {
    count = 0;
    for (const p in obj){
        count++;
    }
    return count;
}