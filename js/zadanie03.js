//Task 3

var bigestSumOfTwoElements = (arr) =>{
    if (arr.length === 0){
        return false;
    } else
        return arr.sort( (a, b) =>{
            return b-a;
        } ).slice(0, 2).reduce((a, b) =>{
            return a+b;
        }, 0);
    };
    console.log(bigestSumOfTwoElements([1,2,3,4]));
    console.log(bigestSumOfTwoElements([]));
    console.log(bigestSumOfTwoElements([76]));
    console.log(bigestSumOfTwoElements([23,45,17,12]));
    console.log(bigestSumOfTwoElements([101,-5,]));