let mynumber=4568
console.log(mynumber);
let anothernumber=new Number(8749)
console.log(anothernumber);
console.log(typeof anothernumber);

console.log(anothernumber.toString().length);
console.log(typeof anothernumber.toString());
console.log(anothernumber.toFixed(5));

let secondnumber=234.767
console.log(secondnumber.toPrecision(2));//{It check the next digitis bigor small after the decimal }

let Hundreds=10000000
console.log(Hundreds.toLocaleString());//[It is accor.to US standards]
console.log(Hundreds.toLocaleString('en-IN'));

//**********************************Maths**********************************//


console.log(Math);
console.log(Math.abs(-8));//[It only convert a negative value in positive]
console.log(Math.round(5.6));
console.log(Math.ceil(4.9));
console.log(Math.floor(4.9))
console.log(Math.min(8,5,9,3));
console.log(Math.max(7,3,6,1));
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

let min=27
let max=65
console.log(Math.floor(Math.random()*(max-min+1))+min);
