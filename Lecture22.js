// oops

// object literals

const obj = {
    userName: "Hemant",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        return "Got user Details!"
    }
};
console.log(obj.getUserDetails());

console.log(obj.userName);


// new is a constructor function (it gives new instance)

// first when we write new keyword then it will create a empty object
// second - contructor function call hota h due to new keyword and it will pack all the arguments in it and send it to object
// third - all the arguments injected to this keyword
// fourth - then we can access it in the function

const Promise1 = new Promise();
const date = new Date();

function user(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        return `Welcome ${this.userName}`;
    }
    // return this; // i think here "return" is default when we use "new" keyword, normally it was logging undefined 
}

// const user1 = user("Hemant", 8, true);
// const user2 = user("Sam", 4, false);
// console.log(user1);  // we need return in the function to log this value
// user2 overwrite the user data that's why we use new keyword to create seperate instances

const user1 = new user("Hemant", 8, true);
const user2 = new user("Sam", 4, false);

console.log(user1); // new keyword only gives the necessary details and a new instance 
console.log(user2);


console.log(user1.constructor); // gives reference 
