//Task 2

function concatArray(array1, array2){
    var newArray = [];
    newArray = array1.concat(array2);
    return newArray;
}
console.log(concatArray([1,3],[3,5]));