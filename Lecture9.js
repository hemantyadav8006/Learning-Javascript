// control flow in js

// if
// for condition check >, <, >=, <=, ==, ===, !=

// const isUserLoggedIn = true;

// if (isUserLoggedIn) { // only runs when the condition is true

// }

// if (2 == "2") {
//     console.log("True");
// }
// if (2 === "2") { // strict equal
//     console.log("True");
// }


// const temp = 44;
// if (temp === 44) {
//     console.log("Less than 50");
// } else {
//     console.log("negative");
// }


// const score = 200;

// if (score > 100) {
//     // var power = "fly"; // it's completly global
//     const power = "fly";
//     console.log(`Users power is ${power}`);
// }
// console.log(`Users power is ${power}`);


// shorthand notation

// const userBalance = 500;
// if (userBalance > 500) console.log("test"), console.log("test2"); // not a good practice


// Nesting
// if (userBalance <= 500) {
//     console.log("Less than or equal to 500");
// } else if (userBalance <= 750) {
//     console.log("Less than 750");
// } else if (userBalance <= 900) {
//     console.log("Less than 900");
// } else {
//     console.log("more than 900");
// }


// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;

// if (userLoggedIn && debitCard) {
//     console.log("User can buy course!");
// }

// if (loggedInFromEmail || loggedInFromGoogle) {
//     console.log("User Logged In!");
// }


// ------------ Switch ---------------------


// const Month = 3;
// switch (Month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Febrary");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("Apirl");
//         break;

//     default:
//         console.log("Invalid Month Number!");
//         break;
// }

// const Month1 = "Feb";
// switch (Month1) {
//     case "Jan":
//         console.log("January");
//         break;
//     case "Feb":
//         console.log("Febrary");
//         break;
//     case "Mar":
//         console.log("March");
//         break;
//     case "Apr":
//         console.log("Apirl");
//         break;

//     default:
//         console.log("Invalid Month Number!");
//         break;
// }


// --------------------------- truthy and falsy -----------------------

// const userEmail = "hemant@google.com";
// const userEmail = ""; // falsy
// const userEmail = []; // truthy
// const userEmail = {}; // truthy
// const userEmail = 0;
// const userEmail = -0;
// const userEmail = "0"; // truthy
// const userEmail = "false"; // truthy


// if (userEmail) {
//     console.log("Got user email!");
// } else {
//     console.log("Don't have any Email!");
// }


// falsy value : false, 0, -0, BigInt(0n), empty string, null, undefined, NaN

// truthy value: "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Email is Empty");
// }

// const emptyObj = {};

// if (Object.keys(userEmail).length === 0) {
//     console.log("Object is empty");
// }



// Nullish Coalescing Operator (??): null, undefined

// let val1;
// val1 = 5 ?? 10; // 5
// val1 = 10 ?? null; // 10
// val1 = undefined ?? 15; // 15
// val1 = null ?? 10 ?? 15;  // jo value pehle milegi vahi assign ho jayegi variable ko

// console.log(val1);


// Terniary Operator

// condition ? True : False;

// const iceTeaPrice = 100;
// iceTeaPrice <= 80 ? console.log("Less Than 80") : console.log("More Than 80");

