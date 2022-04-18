var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    for(const o in obj2){
        if(obj1[o] === undefined){
            obj1[o] = obj2[o];
        }
    }
}