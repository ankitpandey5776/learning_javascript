const myArray =[1,2,0,"ankit",true];
// console.log(myArray[4]);

const myarr = new Array(0,1,2,3,4,5)
// console.log(myarr[3]);

//^ Array Methods
// myarr.push(5);
// myarr.push(6)  //* push and pop
// myarr.pop()

myarr.unshift(9); //* 9 is inserted at 0th index  ( pushing at oth index )
myarr.shift(); //*pop 0th element

console.log(myArray[3]);

// console.log(myarr);

const newarr = myarr.join();  //*   copy all elements of newarr and stores it in  string formaat'.
// console.log(newarr); //*==> string
// console.log(typeof(newarr)); //*==> string


//&     slice and splice
console.log("A",myarr)

let mya1=myarr.slice(1,3)    //& index 1,2 is considered 
console.log(mya1);           //* in slice outer limit isnt considered. original array is unchanged
console.log("B",myarr);

let mya2=myarr.splice(1,3)
console.log(mya2);            //* in splice outer limit is consided. original array is altered
console.log("C",myarr);   //& index 1,2,3 is removed from original array


