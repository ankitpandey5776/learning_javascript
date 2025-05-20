const user = {
    username: "Ankit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        console.log(typeof(this));  //^ object
    }

}

//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

// console.log(this);  //* return an empty object

// function chai(){
//     let username = "Ankit"
//     console.log(this.username);
// }

// chai()



const chai =  () => {
    let username = "ankit"
    console.log(this);
}


 chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  //* implicit declaration

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})   //* use of () is must to work


//console.log(addTwo(3, 4))