// ++++++++++++++++++MEMEORY+++++++++++++++++++
//! two types stack and heap 
//& in stack primitivr data is store 
//* in stack memory copy is created , if we change the value the original value remains unchanged . for e.g.
let name1="Ankit"
let newname=name1
console.log(newname)
name1="Shubham"
console.log(newname);
console.log(name1);


//& in heap non primitive is stored

let MyObj={
    name2: "Ankit",
    age:22
}
let Obj2=MyObj
console.log(Obj2);
MyObj={
    name2:"Dev",
    age:23
}
console.log(Obj2)
console.log(MyObj);