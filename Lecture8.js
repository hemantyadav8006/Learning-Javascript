// ----------------------- Functions -----------------------------------------------

// function nameoffunction(perameter){defination};
// calling a function : nameoffunction(arguments)

// function name() {
//     console.log("Hemant");
//     console.log("Kumar");
//     console.log("Yadav");
// }

// name // reference
// name(); // execute


// function addtwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// addtwoNumbers(2, 3);
// addtwoNumbers(2, "3");
// addtwoNumbers(2, null);


// const result = addtwoNumbers(2, 3);
// console.log(result); // function not returning anything that's why it's undefined


// function addTwoNumbers(num1, num2) {
// let result = num1 + num2;
// return result;
// return num1 + num2;
// }

// const ans = addTwoNumbers(2, 3);
// console.log(ans);

// function loginUserMessage(username) {
//     return `${username} just logged in.`;
// }

// // console.log(loginUserMessage("Hemant"));
// console.log(loginUserMessage()); // undefined just logged in


// function loginUserMessage(username = "Sam") {
//     if (username === undefined) {
//         console.log("Please Enter a Name");
//     }
//     return `${username} just logged in.`;
// }


// console.log(loginUserMessage());
// console.log(loginUserMessage("Hemant"));



// function calculateCartPrice(num1) {
//     return num1;
// }

// console.log(calculateCartPrice(200, 400, 500, 200, 500)); // only first is executed to avoid this we have rest operator.


// function calculateCartPrice(...num1) { // right now ... is rest operator, it will wrap up the items in a array
//     return num1;
// }

// console.log(calculateCartPrice(200, 400, 500, 200, 500)); // it will give a array


// const user = {
//     userName: "Hemant",
//     age: 23
// }

// function name(params) {
//     console.log(`Username is ${params.userName} and the age is ${params.age}`);
// }

// name(user);
// name({
//     userName: "Hemant",
//     age: 23
// })

// const myNewArray = [200, 400, 500, 600];

// function returnSecondValue(getArray) {
//     return getArray[1];
// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 600]));


// console.log(addTwo(3)); // we can't use this before declaretion
// const addTwo = function (num) {  // this is a expression also called mini hoisting
//     return num + 2;
// }

// console.log(addTwo(3));


// -------------------------------- arrow function and This -----------------------------------------


// const user = {
//     userName: "Hemant",
//     age: 23,
//     Greeting: function () {
//         console.log(`${this.userName}, Welcome`);
//         console.log(this); // prints full context object(user)
//     }
// }

// user.Greeting()

// console.log(this); // prints global context of node environment which is empty

// but when we do this in a browsers console then it will print the global context which is window


// function Hemant() {
//     let userName = "hemant"
//     console.log(this.userName); // we can't use "this" in function (out is undefined)
// }

// Hemant();


// another way of declaring function

// const hem = () => {
//     let name = "Hemant";
//     console.log(this.name); // undefined
// }

// hem()


// const hem = (num1, num2) => {
//     return num1 + num2; // this is explicit return
// }

// console.log(hem(1, 2));

// const hem2 = (num1, num2) => (num1 + num2); // (this is implicit)return is not must to use here and syntax is used much in reactjs
// console.log(hem2(4, 5));




// --------------------------------------------------------------------------------------------------
// Immediately  Invoked Function Expressions (IIFE)


//normal function
// function name() {
//     console.log("DB CONNECTED");
// }
// name();

// IIFE (function defination)(execution)

// (function name() { // named IIFE
//     console.log("DB CONNECTED");
// })();

// why use IIFE? : those function which are immediately executed and we are using IIFE to avoid/prevent the problem due to pollution of global scope  of declared variables.
