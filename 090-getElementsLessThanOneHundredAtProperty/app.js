const getElementsLessThan100AtProperty = (obj, key) => {
    arr = [];
    obj.key.map(n =>{
        if (n < 100){
            arr.push(n);
        }
    })
    return arr;
}