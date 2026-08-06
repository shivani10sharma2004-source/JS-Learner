const StudentData={
       Name:"Shivani",
       Age:21,

       AddressVerify:function(){
        console.log(`${this.Name}, your address is Incorrect`);
        //console.log(this);
       }
}
//StudentData.AddressVerify();
//StudentData.Name="Sujal"
//StudentData.AddressVerify();
//console.log(this); // [But in browser there is many global windows object when we run this keyword]


function Name(){
    let marks=67;
    console.log(this);   //[Provide global values]
}
Name();

function Data(){
    let marks=67;
    console.log(this.marks); //[The output will be undefined]
}
Data();

function AnotherData(){
    this.marks=22;
    console.log(this.marks);
}
AnotherData();


//const myName=function(){
 //   let MyRollNo=18;
    //console.log(this.MyRollNo);
//}
//myName();

const myName=() =>{        //[This is arrow Function]
   let MyRollNo=18;
    console.log(this.MyRollNo);  //[when we run this.MyrollNo the output will be undefined and we only run this the output will be empty object ]

   }
myName();


const user = {
    name: "Shivani",

    getName: function () {

        const show = () => {
            console.log(this.name);
        };

        show();
    }
};

user.getName();

//*******************Basic Syntax of arrow function**************************//

()=>{}

//const userid=(num1,num2)=>{
  //  return num1+num2                    //[It is called explicit return]
//}
//console.log(userid(7,55));


//const userid=(num1,num2)=> num1+num2       //[It is called Implicit Return]
//const userid=(num1,num2)=>(num1+num2)    //[if we write in curly braces then we have  to write return statement]
const userid=(num1,num2)=>({username:'shivani'})//[if we return object we have to return like this]


console.log(userid(7,55));










