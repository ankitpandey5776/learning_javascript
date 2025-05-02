// "use strict";
// let name="Ankit"
// let age=22
// console.log("My name is "+name +" and my age is "+ age) //*string contacenation
// //* not preffered syntax ,use string interpolation
// console.log(`Hello my name is ${name} and my age is ${age}`)//*string interpolation

let name2=new String("Ankit")  
console.log(name2[0])
console.log(name2[1])
console.log(name2[2])           //* stored in key value pair(object) . e.g. key 0 stores value A 
console.log(name2[3])
console.log(name2[4])
console.log(name2.length)
console.log(name2.__proto__)    //* ==> {}  signifies an object.
console.log(name2.toUpperCase()) //* many more methods available such as charAt,indexOf etc
const newName = name2
console.log(newName.substring(0,3));  //* print 0,1,2 key that is a,n,k




const newString = "    Ankit   "
console.log(newString);
console.log(newString.trim()) //* use to remove unnecessary spaces that we need not to store in the database
 
let url="http://ankit%20.co.in"
console.log(url.replace("ankit","dev"));  //* reeplace

console.log(url.includes("ankit")) //* true as in stack original url remains unchnged the copy is changed.
console.log(url.includes("dev"))  //* false 

console.log(url.split('.')) //* splits jaha . dikhega