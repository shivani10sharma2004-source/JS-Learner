//*******************Normal Function***********************//

function greet(){
    console.log("hello")
}
greet();

//*******************IIFE(Immediately Invoked Function Expression)****************************//
(function(){     //[It is an function expression ]
    console.log(`hello`)
})();


(function(name){
    console.log(name);
})("shivani");


let result=(function(){
    return 10+40;
})();
console.log(result)

let message="Hello";   //[always add semicolon before IIfe if the previous statement end with let ,const.function call 

(function(){
    let message="Hi"
    console.log(message);
})();
console.log(message);   //[Named IIFE]



//**************Arrow function in IIFE*****************//


(()=>{
    console.log(`Hello`)
})()


((name)=>{
    console.log(`Hello ${name}`) //[Simple IIFE]
})("shivani") 

