const select = (arr,obj) => {
    for (const p in obj){
        if(arr.find(n => n === p)){
            continue;
        }else{
            delete obj[p];
        }
    }
    return obj;
}
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }