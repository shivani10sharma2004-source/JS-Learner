//*******************************************Array*******************************************//

let mynumber=[1,3,6,8,5,6] //[ we can also add any data type in an array list]
let girlsName=["shrishti","Deepti","Kimsi","Tripti"];
console.log(mynumber[2],mynumber[5]);

let mynumber2=new Array(1,2,3,5); //[create new array are define is round brackets]
console.log(mynumber2[0]);

//***********Array Methods****************************//

mynumber.push(6) //[add elements in an array in the last]
mynumber.pop()   //[remove last elements from an array ]
//mynumber.unshift(5)  //[add element in front of the list]
mynumber.shift()  //[remove elments from the front]
  //[These are mutating methods bcz it chnange the array]

console.log(mynumber.includes(16));
console.log(mynumber.indexOf(5));//[if not in list the they give -1]
let mynumber1=mynumber.join()
console.log(mynumber1);
console.log(mynumber);
console.log(Array.isArray(mynumber));

//************Slice/Splice********************//

console.log("A" ,mynumber);

let myn1=mynumber.slice(3,5)
console.log(myn1);
console.log("B" ,mynumber); //[give original array list]
let mynum2=mynumber.splice(3,5)
console.log(mynum2);
console.log("C" ,mynumber); //[splice manipulate original aaray]