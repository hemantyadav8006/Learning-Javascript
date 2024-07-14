// --------------------------------- Objects ---------------------------------------------

// there are 2 ways to declare objects (Literals and constructor)

// singleton: when you declare a object as constructor(like unique object)
// Object.create (constructor)

// object literals

// declareing a symbol
// const mySym = Symbol("mykey1");

// const jsUser = {
//     // keys: value
//     name: "Hemant",
//     "last name": "Yadav",
//     [mySym]: "key1",  // way of showing symbol
//     age: 18,
//     location: "Delhi",
//     Email: "hemant@google.com",
//     isLoggedIn: false,
//     lastLoggedIn: ["Monday", "Wednesday"]
// };

// console.log(jsUser.Email)

// console.log(jsUser["Email"]);
// console.log(jsUser["last name"]);
// console.log(jsUser);

// performing the operation
// jsUser.Email = "HemantKumarYadav@google.com";
// console.log(jsUser);

// to avoid changes in the object we can use frezze
// Object.freeze(jsUser);
// jsUser.name = "Hemant Kumar Yadav";
// console.log(jsUser);


// jsUser.greeting = function () {
//     console.log("hello guys!");
// };



// console.log(jsUser.greeting());

// jsUser.greeting = function () {
//     return ("Hello guys!");
// };
// console.log(jsUser.greeting());


// jsUser.greetingtwo = function () {
//     console.log(`Hello Js User, ${this.name}`);  // `` => this is string interpolation
// }; // this => if you want to reference same object then use this

// console.log(jsUser.greetingtwo());



// constructor (or singleton)

const userNick = new Object(); // it is a singleton object
// const userNi = {} // it is not a singleton object

userNick.id = "1";
userNick.name = "Hemant";
userNick.isLoggedIn = true;

// console.log(userNick);

const regularUser = {
    Email: "email@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Hemant",
            MiddleName: "Kumar",
            LastName: "Yadav"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.LastName);


const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "c",
    4: "d"
};

// const obj3 = { obj1, obj2 };
// console.log(obj3);


// const obje3 = Object.assign({}, obj1, obj2); // object.assign(target(here we are giving a empty object{} that will store all the other sources),source)
// console.log(obje3); // printing the target

// const obj3 = { ...obj1, ...obj2 }; // spread operator
// console.log(obj3);


// console.log(userNick);

// console.log(Object.keys(userNick));
// console.log(Object.values(userNick));
// console.log(Object.entries(userNick));
// console.log(Object.hasOwnProperty('name'));


// ------------------- object de-structure and json API ------------------------

const course = {
    courseName: "JS Hindi",
    coursePrice: "$99",
    courseInstructor: "Hemant"
}

// console.log(course.courseInstructor); // this is a method to access the value of a key

// now by de-structure method
// const { courseInstructor } = course;
// console.log(courseInstructor);


// we can rename the key while de-structuring
// const { courseInstructor: teacher } = course;
// console.log(teacher);



