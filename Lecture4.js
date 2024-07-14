// ------------- Numbers and Maths --------------- //


// const gameScore = new Number(443);

// console.log(gameScore);
// console.log(gameScore.toString());
// console.log(gameScore.toFixed(2));


// const otherNumber = 232.88;

// console.log(otherNumber.toPrecision(3));


// const variableNumber = 1000000000000;
// console.log(variableNumber.toLocaleString('en-IN'));

// console.log(variableNumber.toExponential());

// ------------------------ Maths -------------------------


// console.log(Math.abs(-34)); // make -ve value to +ve only
// console.log(Math.round(4.3));
// console.log(Math.trunc(2.5555));

// console.log(Math.round(Math.random()*10) + 1);


const min = 100;
const max = 200;

// Math.random() * (max - min + 1);  // creating random number with range b/w min and max
// Math.floor(Math.random() * (max - min + 1)); // removing dot
// Math.floor(Math.random() * (max - min + 1)) + min ; // avoiding 0 case


console.log(Math.floor(Math.random() * (max - min + 1)) + min);