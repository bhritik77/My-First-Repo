Array.prototype.includes = function(val){
    for(let i = 0; i < this.length; i++ ){
        if ( this[i] == val) return true;
    }
    return false;
};

let arr1 = [1,2,3,4,5];

console.log(arr1.includes(5));