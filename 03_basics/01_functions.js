console.log("s");
console.log("h");
console.log("i");
console.log("v");
console.log("a");
console.log("n");
console.log("i");


function myname(){
console.log("s");
console.log("h");
console.log("i");
console.log("v");
console.log("a");
console.log("n");
console.log("i");
}
myname() //[it is basic how function create and execute]

function classmarks(number1, number2){
    console.log(number1+number2);
}
classmarks(5,10)


function usermarks(number1,number2){
    let result=number1+number2
    return result
}
let result=usermarks(5,10)
console.log(result);

function makePizza(){
    return"Paneer pizza"
}
let order=makePizza();
console.log(order);

function otherClass(myname){
    if(myname==undefined){
        console.log("Please enter youe name");
        return
    }
    return`${myname} wants to eat`  //[We can also use string interpolation in function]
}
//console.log(otherClass("shivani"));
//console .log(otherClass(""));
//console .log(otherClass());  //[How we use if statement in function just basic] 


function otherClass(myname="shivani"){  //[we can also use default parameter in function it means when we not pass any value in function then it will take dafault value]
    if(myname==undefined){
        console.log("Please enter youe name");
        return
    }
    return`${myname} wants to eat`  //[We can also use string interpolation in function]
}
//console.log(otherClass("shivani"));
//console .log(otherClass(""));
//console .log(otherClass());  //[How we use if statement in function just basic] 


function otherClass(myname){  //[we can also use default parameter in function it means when we not pass any value in function then it will take dafault value]
    if(!myname){
        console.log("Please enter youe name");
        return
    }
    return`${myname} wants to eat`  //[We can also use string interpolation in function]
}
console .log(otherClass());


function calculatecartprice(val1,val2,...num1){  //[It is called rest Operator in function it means the value that we receive in function will be stored in aaray] ]
    return[val1,val2,num1] //[we also return value as using object {}]
}
console .log(calculatecartprice(6765,4324,1234,5432,6754));

const user={
    name:"Shivani",
    age:21,
    userId:1234
}

function userdetails(usermain){
    console.log(`username is ${usermain.name} and userId is ${usermain.userId}`);
}
//userdetails(user)
userdetails({
    name:"shivani",
    userId:1234
})

const mynewarray=[1,2,3,4,5]

function ReturnFourthValue(myarray){
    return myarray[4]
}
//console.log(ReturnFourthValue(mynewarray));   //[how we can pass array in function and return value from function]
console.log(ReturnFourthValue([200,433,234,786,654])); 





 










