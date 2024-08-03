// MathPI

// console.log(Math.PI);
// Math.PI = 5; // trying to overwrite
// console.log(Math.PI); // but it is not changing



const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,

})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


// for (const [key, value] of chai) { // TypeError: chai is not iterable
//     console.log(`${key} : ${value}`);

// }


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {

        console.log(`${key} : ${value}`);
    }
}