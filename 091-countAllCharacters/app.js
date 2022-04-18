const countAllCharacters = cadena => {
    const obj = {};
    let letra = '';
    for (let i = 0; i < cadena.length; i++){
        letra = cadena.charAt(i).toLowerCase();
        if (obj[letra] !== undefined){
            obj[letra] = obj[letra] + 1;
        }else{
            obj[letra] = 1;
        }
    }
    return obj;
}