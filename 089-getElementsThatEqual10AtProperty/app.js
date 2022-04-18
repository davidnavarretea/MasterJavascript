const getElementsThatEqual10AtProperty = (obj, key) => {
    arr = [];
    obj[key].map(n => {
        if (n === 10){
            arr.push(n);
        }
    })
    return arr;
}