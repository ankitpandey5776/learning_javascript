"use strict";
 let newDate = new Date();
// console.log(newDate.toString());
// console.log(newDate.toJSON());
// console.log(newDate.toDateString());

// let mydate = new Date(2025,0,9); //* months start from 0 in js
// console.log(mydate.toDateString());
let mydate2 = new Date("2025-01-3"); //* in yyyy-mm-dd format 01 is jan as usedd in normal calender
// console.log(mydate2.toDateString());


let timestamp = Date.now()
console.log(timestamp);   // * in ms from 1 jan 1970
//^ CONVERSION TO SECONDS
console.log(Math.floor(timestamp/100));
console.log(mydate2.getTime());
console.log((newDate.getMonth()+1)); //* +1 as months start from 0 . end user shouldnot get confused














