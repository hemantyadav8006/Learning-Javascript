// array specific loops

// ------------------------- for of --------------------------------

// const myArray = ["Batman", "Flash", "Thor", "Ironman"];

// for (const iterator of object) {

// }
// for (const val of myArray) {
//     console.log(val);
// }

// const str = "Hello World!";

// for (const num of str) {
//     if (num == " ") {
//         continue;
//     }
//     console.log(`Each char is ${num}`);
// }



// ----------------------- Map ----------------------------
// map object holds key-value pairs and remembers the original insertion order of the keys. and don't have any duplicate value


// const map = new Map();
// map.set('IN', 'INIDA');
// map.set('USA', 'United State America');

// console.log(map);

// for (const key of map) { // wilol print normally
//     console.log(key);
// }


// for (const [key, value] of map) { // here it will print key value in the form of string
//     console.log(key, '-', value);
// }


// Object
// const myObj = {
//     name: "Hemant",
//     favtGame: "Valorant",
//     favtGame1: "MTA"
// }

// for (const num of myObj) { // TypeError: myObj is not iterable
//     console.log(num);
// }



// ---------------- forin loop -----------------

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }
// const progLanguages = {
//     js: "JavaScript",
//     cpp: "C++",
//     py: "Python",
//     rb: "Ruby",
//     swift: "Swift by apple"
// }

// for (const key in progLanguages) {
//     console.log(`${key} shortcut is for ${progLanguages[key]}`);
// }


// const myArray = ["js", "cpp", "py", "rb", "swift"];

// for (const key in myArray) {
//     console.log(myArray[key]);
//     console.log(key); // array have keys in numbers 0,1,2,3,4(baki loops direct values utha rahe the but yaha pr for-in loop ne sirf keys hi uthayi h jo objects m use krte h!)
// }

// const map = new Map();
// map.set("IN", "INDIA");
// map.set("USA", "United State Of America");

// for (const key in map) { // TypeError: map is not iterable
//     console.log(key);
// }


// --------------------------------- for each loop ----------------------------------------
// higher order function

// const myArray = ["JavaScript", "cpp", "Python", "ruby", "swift", "Java"];

// myArray.forEach(function (val) {
//     console.log(val);
// })

// myArray.forEach((item) => {
//     console.log(item);
// })


// function printMe(item) {
//     console.log(item);
// }

// myArray.forEach(printMe)


// myArray.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


// const myCoding = [
//     {
//         languageName: "JavaScript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "Python",
//         languageFileName: "py"
//     },
//     {
//         languageName: "Ruby",
//         languageFileName: "rb"
//     },
//     {
//         languageName: "Java",
//         languageFileName: "java"
//     }
// ]


// myCoding.forEach((item) => {
//     console.log(item.languageName);
// })



// const myArray = ["js", "cpp", "py", "rb", "swift"];


// const values = myArray.forEach((item) => { // foreach can't return any value
//     console.log(item);
// })

// console.log(values);

// ------------- filter ------------------------------------
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((item) => {
//     return item < 5;
// })

// console.log(newNums);


// map
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.map((item) => {
//     return item + 10;
// })
// console.log(newNums);

// ------------------ returning by for each --------------------------

// const myNums = [];

// myNums.forEach((num) => {
//     if (num > 4) {
//         myNums.push(num);
//     }
// })
// console.log(myNums); // PTA NHI KYA HUA YAHA!!!!!!!!!!!!!!!

