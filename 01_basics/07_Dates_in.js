//************************************Dates*************************************//
let currentdate=new Date()
console.log(currentdate.toString());
console.log(currentdate.toDateString());
console.log(currentdate.toLocaleString());
console.log(currentdate.toISOString());
console.log(currentdate.toJSON());
console.log(typeof currentdate);

//let mydate=new Date(2026,6,26)
let anotherdate=new Date(2026,6,26,2,30)
//let mydate=new Date("2026-07-26")
let mydate=new Date("07-26-2026")
console.log(mydate.toDateString());
console.log(anotherdate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(mydate.getTime());
console.log(Math.floor(Date.now()/1000));//[To convert a milliseconds into seconds]

let newdate=new Date()
console.log(newdate);
console.log(newdate.getDay());
console.log(newdate.getDate());
console.log(newdate.getMonth()+1);
console.log(newdate.toLocaleString("default",{
    weekday:"long",
    weekday:"short"
    
}

));


