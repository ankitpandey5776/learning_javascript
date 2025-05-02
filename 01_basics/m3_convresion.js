"use strict";
let name = "Ankit"
let x = Number(name) //* parsing a  integer to number 
console.log(x);
console.log(typeof x);
console.log(typeof name);
  
//* "33" => 33
//* "33abc" => NaN  (not a number)
//* true=1,false=0
 let IsTrue= ""
 let z=Boolean(IsTrue)
 console.log(z)
 console.log(typeof z)   //* everthng is true except 0 and "". even " " is true 

 // ###########################################OPERATIONS##################################

 console.log(3**2)  // 3 power 2
 console.log(5%2)

 console.log("1"+2+2)
 console.log(1+2+"3");
 console.log(1+2+"3"+2+2);   //* after 1st ""  every thing parsedd or converted to string.
 console.log(7+3*15/5);  //* operates left to right no precedence
 // ^prefer using cleaner syntax.

 console.log(+true) //* => 1 (bool)
 //console.log(true+);  //*error
 console.log(+"") //* =>0 i.e false in bool
 
 
 
 