// Object/Prototypes in js

// js behavior is prototyple inheritance

function MultipleBy5(num) {
    return num * 5;
};

MultipleBy5.power = 3;

console.log(MultipleBy5(5));
console.log(MultipleBy5.power);
console.log(MultipleBy5.prototype);



function createUser(userName, score) {
    this.userName = userName;
    this.score = score;
}

function multipleBy5(num) {

    return num * 5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/



// Prototype

let myName = "Hemant         ";

console.log(myName.length);
console.log(myName.trueLenght()); // we have to create this function which will remove all whitespaces from the string (and works for all strings)


let myHeros = ["thor", "spiderman"];

let obj = {
    thor: "hammer",
    spiderman: "sting",
    getSpidermanPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);

    }
}


// we can inject any function in array object function okay
// but if we inject a function it directly to object so everyother (array, string, function) can access that injected function
// error: but if we inject a function in array or string or function, they can't share/ can't access that function (siblings can't access each other's function) also not object too (object is father in this sence  :)  )

Object.prototype.hemant = function () {
    console.log(`Hemant is here`);

}

Array.prototype.heyHemant = function () {
    console.log("Hello Hemant");

}

obj.hemant()
obj.heyHemant(); // TypeError: obj.heyHemant is not a function
myHeros.heyHemant(); // array have access to that function
myHeros.hemant()


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()