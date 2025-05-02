//singleton -->  not created during object literals;
//objectss.create (for singletop)



//* object literals , 
//^ create a symbol ans pass it as a key in object

const sym1 = Symbol("key1");  //& syntax for object , new keyword isnt used;

const user = {                 // * arr=["a","b","c"]  for reference, key = 0,value = a;
    name: "ankit",             //* key=> name , is stored as  a string.  
    age: 22,
    [sym1]:"my key1",
    "fullname":"Anki Kumar Pandey",
    email:"ankit@gmail.com",
    lastloggedd:["monday","satuday"]
}
// console.log(user);
// console.log(user.name);
// console.log(user["name"]);  //*better approach    //* use key (name) as a string ,(refer line 5) 
// //console.log(user."fullname") //&not possible to access using .
// console.log((user["fullname"]));
// console.log(typeof([sym1]));

// //* change value 
// user.email = "ankit@google.com";
// console.log(user["email"]);
// Object.freeze(user);             //* no further changes are reflected after freezing the object
// user.email = "ankit@jpm.com";
// console.log(user["email"]);
// console.log(user);

//+++++++++++FUNCTION+++++++++++
user.greetings = function(){
    console.log(`HELLO!!,${this.name}`);
}

console.log(user.greetings);// * returns a function reference , it is not executed
console.log(user.greetings());


