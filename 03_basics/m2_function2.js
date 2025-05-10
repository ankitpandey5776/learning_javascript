// function calculateCartPrice(...num1){  //* ... rest , also spread depends on how we use it
//     return num1;
// }
// console.log(calculateCartPrice(100,200,300,500));


function calculateCartPrice(val1,val2,...num1){  //* ... rest , also spread depends on how we use it
    return num1;
}
console.log(calculateCartPrice(100,200,300,500)); //* 100 in vl1,200 in val2, rest in num1


const user = {
    username: "Ankit",
    prices: 199            
}
                                     //* prices written instead price so we need to check before passing 
                                     //* usinf if else , todo later
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//  handleObject(user)

handleObject({
    username: "sam",   //* can pass object here too
    price: 399
})



//  array

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));
