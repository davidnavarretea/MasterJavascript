function detectOutlierValue(string) {
    let total = 0;
    let resultado = 0;
    const arr = string.split(' ');
    arr.map(n => {
        if(n % 2 === 0){
            total = total + 1;
        }else{
            total = total - 1;
        }
    })
    if (total > 0){
        resultado = arr.findIndex(e => e % 2 !== 0);
    }else{
        resultado = arr.findIndex(e => e % 2 === 0);
    }
    return resultado + 1;
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2