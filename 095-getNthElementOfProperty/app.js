const getNthElementOfProperty = (obj, key, i) =>{
    const arr = obj[key];
    return arr[i];
}