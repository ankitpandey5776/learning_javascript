// const tinderUser = new Object()  //* singleton object
const tinderUser = {} //* non singleton
 tinderUser.name="Yugank";
 tinderUser.age="20";
 tinderUser.bodycount="9";

 console.log(tinderUser);

 const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ankit",
            lastname: "Pandey"
        }
    }
}

 console.log(regularUser.fullname?.userfullname.firstname);   /* ? functions when we want to chech if fullname is present or not,
                                                               it acts like kind of securit for out code  */

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)  //{}  use this as it combines,in all cases  (target => {},source)..

const obj3 = {...obj1, ...obj2} //*spread operator  , mostly well use this
// console.log(obj3);


const users = [     //* valuse coming from database
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email    //*[1] as array
console.log(tinderUser);

console.log(Object.keys(tinderUser));       //* return keys  ==> return type array
console.log(Object.values(tinderUser));     //*return values
console.log(Object.entries(tinderUser));    

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //* hasOwnProperty==> chechs if tinderuser has property islogged in ;
console.log(tinderUser.hasOwnProperty('name')); 

