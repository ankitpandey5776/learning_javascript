// ^ datatypes are of two types primitive(pass by value)  and non primitive(pass by reference)  

//&    primitive  ... mainly 7 types 
//*  string,number,boolean,null,undefined,symbol(to make a value unique),BigInt

//&   non primitive ..... refernce in memeory can be allocated directly
// *  arrray,object,functions

const id = Symbol("123")
const name = Symbol("123")
console.log(id===name) //* output==> false
const BigNum = 345787898099098540n    //* if greator than 2^53... it becomes BigInt as n is inserted at last 
console.log(BigNum);

const CompanyName=["Ankit","Dev","Swagat","Paavan"];  //^  array 
console.log(CompanyName)

const MyObj={
    name: "Ankit",              //^OBJECTS   
    age: 22                     //*PRESENT IN KEY VALUE PAIR . here  (age ==>key and 22==>value)
}

console.log(MyObj);

const MyFunction =function(){
   console.log("HELLO WORLD");
                                    //^FUNCTIONS
}
MyFunction();