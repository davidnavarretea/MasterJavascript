var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    const arr = obj[key];
    if (!Array.isArray(arr)){
        return 0;
    }else if(arr.length === 0){
        return 0;
    }else{
        const suma = arr.reduce((np, na) => np + na);
        return suma;
    }
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13