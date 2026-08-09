const rollno=[]
if(rollno){
    //console.log("My roll is Correct");
}
else{
    //console.log("My rollno is not correct");
}

//Falsy values(False,0,-0,0n,Null,Undefined,NAN,BigInt,"")
//Truthy values("0","False","(space)",[],{},fumction(){})

if(rollno.length===0){
    console.log("Array is Empty");
}
else{
    console.log("Array is not Empty"); //[This is how we detect the Array is empty]
}

const Lastname={}
if(Object.keys(Lastname.length===0)){
    console.log("Object is Empty");
}
else{
    console.log("Object is not Empty");  //[This is how we detect the Object is Empty]
}


//Nullish Coalescing Operatr(??):null defined
let val1;
val1=5??10
val2=2??null
val3=undefined??3??9
console.log(val3);

//[Terniary Operator]//
//condition ?true:false

const vegetablePrice=100
vegetablePrice<=20 ? console.log("Greater than 110"):console.log("Less than 110 ");




