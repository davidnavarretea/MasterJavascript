function getElementOfArrayProperty(obj, key, index) {
    const arr = obj[key];
    if(Array.isArray(arr)){
        return arr[index];
    }else{
        return undefined;
    }
}







var obj = {
    key: ['Jamil', 'Albrey']
   };