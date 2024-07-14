/* Strings in JS */

// const name = "Hemant";
// const repoCount = "7";

// console.log(name + " " + repoCount);  old version

// console.log(`Hello, My name is ${name} and my repoCount is ${repoCount}.`); // new version

// declare a string

const gameName = new String("Hemant");
// console.log(gameName);
// console.log(typeof(gameName)); // object

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('m'));

// const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(0, 4);
console.log(anotherString);
console.log(gameName);


// const newString1 = "       Hemant               ";
// console.log(newString1);
// console.log(newString1.trim());


// const url = "https://hemantyadav8006/hemant20%yadav/";
// console.log(url.replace('20%', '-'));

// console.log(url.includes('kumar')); // checks the string is there or not!


// const newString = "Hemant-Kumar-Yadav";

// console.log(newString.split('-')); // to make a array 