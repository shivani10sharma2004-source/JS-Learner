console.log(9>7);//[when left side is bigger than right side]
console.log(9<7);//[when left side is smaller than right side]
console.log(9>=7);//[when left is bigger or equal to right side]
console.log(9<=7);//[when left side is smaller side or equal to right side]
console.log("5"==5);//[when ths js automatically convert a type as another type]
console.log("5"===5);//[when we check first the type or value when it is same the output will be true]
console.log("5"!=5);//[when thenjs automaticallu convert a type then the the value are same the outpt are false]
console.log("5"!==5);//[when data type or value in both have one difference]

console.log("3">2);
console.log("04"<2);
//[they convert a first value in  another value then compare a same type value]

console.log(null>0);
console.log(null<0);
console.log(null==0);
console.log(null===0);
console.log(null>=0);
console.log(null<=0);
//[In this it convert all null value into o but not in == and ===]

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==null);
console.log(undefined===null);
console.log(undefined>=0);
console.log(undefined<=0);
//[in this when undefined==null then the output will be true otherwise all are false]