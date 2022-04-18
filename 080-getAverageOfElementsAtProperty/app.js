const getAverageOfElementsAtProperty = (obj,key) => {
    let retorno = 0;
    if (obj[key].length === 0){
        return 0;
    } else if(typeof(obj[key]) !== 'object'){
        return 0;
    } else if(obj[key] === undefined){
        return 0;
    } else {
        obj[key].map(e => { if(typeof(e) === 'number'){
            retorno = retorno + e;
        }
        })
        return retorno / obj[key].length;
    }
}