"use strict";
// defining a number
let newnum =33
console.log(newnum);

const num = new Number(33)  //object
console.log(num);

console.log(newnum.toFixed(3));  //* 33.000
let num2 = 123.8795
console.log(num2.toPrecision(3));
console.log(num2.toPrecision(5));
console.log(num2.toPrecision(2));


let price=100000000
console.log(price.toLocaleString('en-US'));  //*  us standard
console.log(price.toLocaleString('en-IN')); //* indian , default


// ++++++++++++++++++++++++++++++maths++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-3)); //* absolute value (+ve)
console.log(Math.round(3.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(2,3,6,1,8));
console.log(Math.max(2,3,6,1,8));
console.log(Math.random());    //* always between o and 1
max =20
min = 10;                     
console.log(Math.floor(Math.random()*(max-min+1)+min))    //^ try to remember



