let fruits=["Mango","Banana","Grapes"]
let vegetables=["Onion","Tomamto","Potato"]
// fruits.push(vegetables)
// console.log(fruits);  //* nested array
//* to resolve this nestng of array concat mehod can be used  

let mix=fruits.concat(vegetables)  // * new variable(array) needs to be taken 
console.log(mix);                   

//* bertter approach is spread function
let mix2=[...fruits,...vegetables]  //! spread method
console.log(mix2);


const arr1=[0,1,2,[3,4],5,6,[7,[8,9]]]  //* awful syntax 
//* to extract each element flat method is used
console.log(arr1.flat(Infinity))  //* inside flat depth need to be passed (2 here), but we can pass Infinity everywhere


console.log(Array.isArray("Ankit"))  //* is the passed parameter(here Ankit) is an array or not?

let name="ankit"                   
console.log(Array.from(name))         //*Array.from

score1=100
score2=200
score3=300                               //*Array.of
console.log(Array.of(score1,score2,score3))
