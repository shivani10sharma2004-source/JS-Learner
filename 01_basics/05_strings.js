//let name="shivani"
//let myage=22

//console.log(name+myage+"boolean");


//console.log(`my name is ${name} and my age is ${myage}`);//(Template literals)

let myname=new String("shiva.n.i")
//console.log(typeof myname);

//console.log(myname[0]);
//console.log(myname.__proto__);
//console.log(myname.length);
//console.log(myname.toUpperCase());
//console.log(myname.toString());
//console.log(myname.charAt(5));
//console.log(myname.indexOf("i"));
//console.log(myname.lastIndexOf("."));

let anotherName=myname.substring(0,4)
//console.log(anotherName);
//console.log(myname.slice(-3,7));

//let newname="     shivani   "
//console.log(myname);
//console.log(newname.trim());
//console.log(myname.replace('.','n'));
//console.log(myname.includes('shiva.ni'));
//console.log(myname.split('.'));
//console.log(myname.at(8));
//console.log(myname.charCodeAt(7));


//let emoji="😊"
//console.log(emoji.codePointAt(0));
console.log(myname.localeCompare(anotherName));

let myname1="café"
let myname2="cafe\u0301"
console.log(myname1===myname2);
console.log(myname1.normalize()===myname2.normalize());
console.log(myname.padEnd(10,"+"));
console.log(myname.padStart(12,"*"));
let password="123456"
console.log("*".repeat(password.length));
console.log(myname.replaceAll(".",""));
let mainpassword="RODT5637"
console.log(mainpassword.search(/\d/));//[It works like same index of but also find regex value(/\./,(/[a-z]/)
 console.log(mainpassword.startsWith("ROD"));
console.log(myname.substring(5,0)); 
let classgirlname="deepti"
for(let ch of classgirlname){
    console.log(ch);//internally
}//let iterator=arr[Symbol.iterator]();
///console.lob(iterator.next());//manually











