"use strict"; // treat all JS code as newer version

// Datatypes and ECMA standards

// alert("Hello") // we are using nodejs not browser, it have a different syntax in node environment

// console.log("hoya"); console.log(44);   // priority code readability

// console.log(3
//     +
//     3
// ); // not a good practice

// documentation (ECMA is orignial documentation which writes js standards)  // https://tc39.es/ecma262

// but we will use mdn mostly :)

let name = "Hemant"; // string
let age = 22; // number
let isLoggedIn = true; // boolean(true(1) or false(0))

// Datatype
// number
// string
// boolean
// null = stand alone value (empty)
// undefined
// symbol => is used to find uniqueness 
// object


// console.log(typeof(null)); // object
// console.log(typeof(undefined)); // undefined


// converstion and operations

let score = "33";
let score1 = "33abc";
let score2 = null;
let score3 = undefined;

// console.log(typeof(score));

let convetToNumber = Number(score);
// console.log(typeof(convetToNumber));
// console.log(convetToNumber);  // string to number


let convetToNumber1 = Number(score1);
// console.log(typeof(convetToNumber1));
// console.log(convetToNumber1);  // it won't convert and gives NaN which is a type of number


let convetToNumber2 = Number(score2);
// console.log(typeof(convetToNumber2));
// console.log(convetToNumber2);  // it will convert null to 0


let convetToNumber3 = Number(score3);
// console.log(typeof(convetToNumber3));
// console.log(convetToNumber3);  // it will give NaN which is a type of number


let isBool = Boolean(score);
// console.log(isBool);


let isString = String(score);
// console.log(isString);
// console.log(typeof (isString));

// Operation

// +,-,*,/,**
// >, <, >=, <=, ==

// only try to write clean code


// datatypes are classified in two catagory on the basis of access the data or storing the data

// 1. Primitive Datatype (or call by value)  // it gives copy of the data instead of reference and changes made in copy only

// 7 types : String, Number, Boolean, null(empty), undefined(decleared but value is not assigned), Symbol(to make a value unique), BigInt(scientific value or a bigger value can cover in this datatype)


// 2. Non-Primitive Datatype(or reference datatypes)

// 3 types : Array, Objects, function

// is js is dynamic type or static type language?

// const coustomerId = Symbol('123');
// const anotherId = Symbol('123');

// console.log(coustomerId === anotherId);  // false coz symbol makes it unique

// const bigNumber = 51565165663216164n;


// Arrays

// const names = ["boss", "blah", "bone"]; // object

// // object
// let obj = {
//     name : "Hemant",
//     age : "22"
// }

// const myFunction = function () {
//     console.log("Hello World");
// } // object function
// myFunction();


// typeOf of datatypes
/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  => object function
       Object  =>  object
*/


// ----------------------- stack(use in primitive type) and heap(non-primitive) memory --------------------------

// let myName = "Hemant";
// let anotherName = myName; // here we created a copy of myName
// anotherName = "Hem"; // it changed the copy only not the reference(myName)

// console.log(myName);
// console.log(anotherName);


// let user1 = {
//     Email: "user@google.com",
//     UPIid: "user@ybl"
// }


// let user2 = user1; // here it is taking value from reference

// user2.Email = "user@gmail.com"; // it is changing directly in the reference memory

// console.log(user1);
// console.log(user2);

