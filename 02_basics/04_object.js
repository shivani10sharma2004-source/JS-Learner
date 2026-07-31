//***********Singleton******************//

//const AppUser=new Object();

//****************Literal*****************//

const AppUser={}
AppUser.id="abd243"
AppUser.name="shivani"
AppUser.isLoggedIn=true
//console.log(AppUser);   //[first we create a ocject then we add the key and value in it]

const AppUser2={
    Name:"shivani",
    Email:"shivani@gmail.com",
    age:20,
    address:{
        city:{
            pincode:144001,
            city:"MGG"

        }

    } 

}
//console.log(AppUser2.address.city);

const myuser1={a:1,b:2,c:3}
const myuser2={d:1,e:2,f:3}
const myuser4={g:1,h:2,i:3}
//const myuser3=Object.assign({},myuser1,myuser2,myuser4)//[{} are target,amd myuser1.2.4 are sources]
const myuser3={...myuser1,...myuser2,...myuser4} //[this is called spread operator]
console.log(myuser3);  //[This is used to merge the two object]


//[when value come from database it will come as array of object]
const users=[
    {
        id:1,
        email:"shivani123@gmail.com"
    },
    {
        id:1,
        email:"shivani123@gmail.com"
    },
    {
        id:1,
        email:"shivani123@gmail.com"
    },
    {
        id:1,
        email:"shivani123@gmail.com"
    },
]
//users[1].email

console.log(Object.keys(AppUser)); //[this will give the key of the object  and the data type will be array]
console.log(Object.values(AppUser));
console.log(Object.entries(AppUser));  //[the data type will be array in array]
console.log(AppUser.hasOwnProperty("loggedIn"));  //[it will check the the key is present in object or not]
console.log(AppUser.isPrototypeOf(AppUser2));

//Practice on object method in browser console//
