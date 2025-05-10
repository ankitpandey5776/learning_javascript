function add(number1,number2){
    console.log(number1+number2);
}

add(2,3); 
add(4+"3"); //*43+undeefined =43undefined;
add("4"+3) //*43+undeefined =43undefined;
add("a","b"); // contaenation of string

const result1 = add(3,41)
console.log(typeof(result1));  //* undefined as we aren't returning any value, we are ljust logging it out;;
console.log(result1) // *undefined


function add2(number1,number2){
    // return numbwe1+number2;
   const result = number1+number2;
   return result;
}
const result=add2(7,8);     //& both the result (variable) are different . scope of function
console.log(typeof(result));  //* this results a number
 
// function loginUserMessage(username ){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())  // if part executed . even if ("")
 // console.log(loginUserMessage("hitesh"))

//                     OR

function loginUserMessage(username = "sam"){  // * default name sam is passed so it returns sam everythime nothing is paased
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())