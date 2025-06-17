let myArray = new Array(1,2,3);

function crazyArray(myArray1, ...elements){
    myArray.push(...elements);
}
crazyArray(myArray,4,5,6,7,8);

console.log(myArray);