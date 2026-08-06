//let a=169
//const b=200
//var c =500
//if(true){
   // let a=10
    //const b=20
    //var c =50
//}

//console.log(a);
//console.log(b);
//console.log(c);




let a=2345
var c=6543
const b=8965

if(true){
    let a=10
    const b=20
    let c =50 
    console.log("INNER: ",a);   //[If we do not use var in block but they give a  different value] 
}

console.log(a);
console.log(b);
console.log(c);


//***************************Function Scope***************************//

function greet(){
    let name="Shivani";
    console.log(name);
}
greet();   //[In function it first go on a outside the function where greet() is called and then go inside a function block]


function greet(){
    let name="Shivani";
}
greet();
//console.log(name);


let city="Delhi";
function show(){
    let city="punjab";
    //console.log(city);
}
show();
//console.log(city);  


function one(){
    const username="shivani";
    function two(){
        const website="youtube";
      //  console.log(username);
    }
    //console.log(website);
    two();
}
one();


if(true){
    const username="shivani"
    if(username=="shivani"){    //(== compare only value but ===compare both value and type)
        const Lastname=" sharma"
        //console.log(username+Lastname);  //[In this case it check first if block if it is true than check second block is true if it is true then execote secon block bcz of console.log]

    }
    //console.log(website);
}
//console.log(username);


//***************************Interesting**************************************/



function addOne(num){
    return num+1;
}
console.log(addOne(4));


console.log(addtwo(4));;

const addtwo=function(num){    //[Another way to write a function is to use function expression]
    return num+2;
}
addtwo(4);  //[ we dont call function before it is declare  and this is called hoisting
