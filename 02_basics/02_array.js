let classA=["dipti","shrishti","kimsi","tripti"]
let classB=["sammy","gurjeet","gagan","daman"]
//classB.push(classA);
//console.log(classB);
//console.log(classB[4][0]);  //[push on a existing array]

let otherClassC=classA.concat(classB)
console.log(otherClassC);  //[create a new varible to concatinate]

let otherClassC2=[...classA, ...classB]
console.log(otherClassC2);  //[we can add multiple values not just classAandB]

let anotherArray=[1,5,4,[5,8,2],6,[5,9,[6,3]]]
let myArray=anotherArray.flat(Infinity)
console.log(myArray); //[flat method is used to remove the nested array and give a single array list]

console.log(Array.isArray("Shivani"));
console.log(Array.from("Shivani"));
console.log(Array.from({name:"shivani"}));   //[it doesn,t understand which one they have to convert in array name or value]

let firstvalue=100
let secondvalue=200
let thirdvalue=300
console.log(Array.of(firstvalue,secondvalue,thirdvalue));