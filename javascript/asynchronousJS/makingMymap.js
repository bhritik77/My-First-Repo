class myArray{
    arr;

    constructor(arr){
        this.arr = arr;
    }
    map(fn){
        var res = [];
        for( let i = 0; i < this.arr.length ; i++){
        res.push(fn(this.arr[i]));
    }
    return res;
}
}

let arr = new myArray([1,2,3,4,5]);

console.log(arr.map(function(ele){
    return ele**2;
}))