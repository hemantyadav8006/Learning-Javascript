// ------------------ Array ----------------------------------

// array is used to store the collection of multiple items under a single variable

// type is object

// const myArr = [
//   0,
//   "name",
//   function () {
//     return "Hemant";
//   },
//   [1, 2, 3, 4],
//   true,
//   false,
// ];

// console.log(myArr);
// console.log(myArr[1]);

// it creates a shallow(heap) copy rather than deep(stack) copy

const myHeros = new Array("name", "const", 1, 12, 3, 4, 5, 6, 7);

// console.log(myHeros);
// console.log(myHeros.length);

// Array methods

// myHeros.push("Hemant");
// console.log(myHeros);

// myHeros.pop();
// console.log(myHeros);

// myHeros.unshift(9); // to add item in the start, not used with large datas
// console.log(myHeros);
// myHeros.shift(); // to remove the first item
// console.log(myHeros);

// console.log(myHeros.includes(2));
// console.log(myHeros.indexOf(2));

// const newArr = myHeros.join();
// console.log(myHeros); // array
// console.log(newArr); // string

// slice and splice

// console.log("A ", myHeros);

// const myHeros1 = myHeros.slice(1, 3); // it changes the copy of the array
// console.log(myHeros1);
// console.log("B ", myHeros); // no change in the main array

// const myHeros2 = myHeros.splice(1, 3); // it changes the original array
// console.log(myHeros2); // it have removed the items from the original array
// console.log("C ", myHeros);

// const myMarvel = ["Ironman", "Thor", "spiderman"];
// const mydc = ["superman", "flash", "batman"];

// myMarvel.push(mydc);
// console.log(myMarvel);

// newArray = myMarvel.concat(mydc); // concat returns new array and use rarely
// console.log(newArray);

// spread operator
// const allNewHeros = [...myMarvel, ...mydc]; // use in industry very much

// console.log(allNewHeros);

// const newArray = [
//     1,
//     2,
//     3,
//     [2, 2, 2, 2, [3, 4, 56, 7, 0, [344, 4, 4, 4, 5, , 67, 3]]],
// ];

// const useable_anotherArry = newArray.flat(4);
// console.log(useable_anotherArry);

// to convert into an array
// console.log(Array.isArray("Hemant")); // false

// console.log(Array.from("Hemant")); // to make an array

// let s1 = 100;
// let s2 = 200;
// let s3 = 300;

// console.log(Array.of(s1, s2, s3));
