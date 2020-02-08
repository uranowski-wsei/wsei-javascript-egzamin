//Task 4
//Punkt 1
const foo1 = document.getElementsByClassName("sample_class");

function getTagsofElements(tag){
    let arr1 = [];

    for(let i = 0; i< tag.length; i++)
        arr1.push(tag[i].tagName);
    return arr1;
}

console.log(getTagsofElements(foo1));

//Punkt 2

const foo2 = document.getElementById("sample_id");

function getClassesOfElement(sample) {
    let arr2 = [];
    arra2 = sample.className.split(" ");
    return arr2;
}

console.log(getClassesOfElement(foo2));

//Punkt 3

//Punkt 4
const foo4 = document.querySelectorAll("a");

function getAddressesOfElement(name){
    let arr4 = [];
    
    for(let i=0; i<name.length; i++)
    arr4.push(name[i].getAttribute("href"));

    arr4.forEach(name => {
        if(name == null)
        arr4.pop(name); 
    });
    return arr4;
}
console.log(getAddressesOfElement(foo4));

//Punkt 5

const foo5 = document.getElementsByClassName("sample_class_3")
const Parent = foo5[0];
const Parentchild = Parent.children;
    
console.log(getTagsofElements(Parentchild))