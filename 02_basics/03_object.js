//singleton
//object.create[this is called contructor method]

// object literal

let mysym=Symbol("key1")


const myclass={
    name:"shivani",
    "full name":"shivani Sharma",  //[behind the seen the name is track as a string]
    age:21,
    [mysym]:"key1",
    email:"shivani@example.com",
    location:"punjab",
    isLoggedIn:true,
    lastLoggedIn:["Monday","Wednesday"]
}
console.log(myclass.age);  //[acccessing the objct value]]
console.log(myclass["age"]);
console.log(myclass["full name"]);  //[we cant use . notation in this case bcz it already define as string so we use as an array]
console.log(myclass[mysym]);
console.log(typeof (mysym));


myclass.email="shivani234@gmial.com"//[email will be change bcz .email is property]
//Object.freeze(myclass)
myclass.email="shivani346@gmail.com"
console.log(myclass);

myclass.greeting=function(){
    console.log("hello shivani");
}
myclass.greeting2=function(){
    console.log(`hello shivani ,${this.name}`);  //{this is used for specially any value or key]}
}


console.log(myclass.greeting());
console.log(myclass.greeting2());

//[we use sqaure bracket with qoutes in console when there is a spce or "-" in key]
//[we use dot notation in console when the key have no space only one name]
