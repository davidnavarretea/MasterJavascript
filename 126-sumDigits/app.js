function sumDigits(num) {
    const snum = num.toString();
    const anum = snum.split('');
    if(anum[0] === '-'){
        anum.shift();
        anum[0] = anum[0] * -1;
        const nnum = anum.map(Number);
        const allnum = nnum.reduce((p,c) => p + c);
        return allnum;
    }else{
        const nnum = anum.map(Number);
        const allnum = nnum.reduce((p,c) => p + c);
        return allnum;
    }
}
var output = sumDigits(-316);
console.log(output); // --> 4