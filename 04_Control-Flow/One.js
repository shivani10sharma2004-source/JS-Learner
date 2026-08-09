// If Statement
const isuserloggedin=true   //[the single equals to is of assignment operator]
const temprature=35

if(isuserloggedin){
  //  console.log(true);
}

if(temprature<38){
    console.log("temprature less than 38");
}
else{
    console.log("temprature greater than 38");
}

console.log("Executed");

//Operators(>,<,==,===,<=,=>,!=,!==)

const age=21
if(age>18){
    var write="Eligible"
    console.log(`Youe are :${write}`);//[if we use let or const instead var it doesnit print bcz of scope ]
}
console.log(`Youe are :${write}`);

const balance=1000
//if(balance>500) console.log("balance is greater than 500");//[It is implicit scope mean we are imagined thet there are scope after if statement and we also use another console by using (,)]

if(balance<500){
    console.log("Balance is greater than 500");
}
else if(balance<700){
    console.log("Balance is greater than 700");
}
else if(balance<900){
    console.log("Balance is greater than 900");
}
else{
    console.log("Balance is greater than 1100");  //[Multiple else-if conditional statement]
}

const userLoggedin=true
const address=true
const Phonenumber=false

//if(userLoggedin && address && Phonenumber && 4<4){   //[Logical AND operator]
    //console.log("You can buy Everything you want");
//}

if(address||Phonenumber||guestuser){  //[when guest user is not declare as variable but if true cndtn are are came first it will not provide error i.e called Short-Circuit Evaluation]
     console.log("You can logged in");   //[Logical OR Operator]
}


