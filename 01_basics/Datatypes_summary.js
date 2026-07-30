//------------------------------Primitive Data types----------------------------------//
//String,Number,Boolean,Big Int,Sample,Null,Undefined//

let name="Shivani"
let age=45
let todayRaining=true
let Weatherupdates=null
let Cityname;
let bigNumber=56789432789097654n
let id=Symbol("123")
let myid=Symbol("123")
console.log((name),(age),(todayRaining),(Weatherupdates),(Cityname),(bigNumber),id===myid,typeof (bigNumber));

//---------------------------Non-Primitive Datatypes/Refernce--------------------------//
//Array,Objects,Functions//
let somename=["Kirti","Sejal","Shrishthi"]
let myobj={
    name:"Shivani",
    age:21,
}

const myFunction=function(){
    console.log("Hello World");
}
console.log(typeof(somename));


// Stack Memory used in (Primitive Data types)

let mystate="Punjab"
let Anotherstate=mystate
Anotherstate="kashmir"
console.log((mystate));
console.log((Anotherstate));

//Heap memory used in (Non-Primtive Data types)

let userid={
    name:"Shivani",
    age:89
}
let anotheruserid=userid
anotheruserid.age=78
console.log((anotheruserid),(userid));


