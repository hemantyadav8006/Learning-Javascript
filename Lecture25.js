// running in ES6

//Classes

class User0 {
    constructor(userName, Email, Password) {
        this.userName = userName;
        this.Email = Email;
        this.Password = Password;
    }
    encryptPassword() {
        return `${this.Password}abc`;
    }

    toUpper() {
        return `${this.userName.toUpperCase()}`
    }
}

const username1 = new User0("Hemant", "hemant@gmail.com", "123");
console.log(username1.encryptPassword());
console.log(username1);
console.log(username1.toUpper());




// normal method
function User(userName, Email, Password) {
    this.userName = userName;
    this.Email = Email;
    this.Password = Password;
}

User.prototype.encryptPassword = function () {
    return `${this.Password}abc`;
}


User.prototype.toUpper = function () {
    return `${this.userName.toUpperCase()}`
}


const username2 = new User("HemantYadav", "hemantyadav8006@gmail.com", "123");
console.log(username2);
console.log(username2.encryptPassword());
console.log(username2.toUpper());




// inheritance

class userDetails {
    constructor(userName) {
        this.userName = userName;
    }

    logMe() {
        console.log(`Username is ${this.userName}`);
    }
}


class Teacher extends userDetails {
    constructor(userName, email, Password) {
        super(userName);
        this.email = email;
        this.Password = Password;

    }

    addCourse() {
        console.log(`A new course was added by ${this.userName}`);
    }
}


const username3 = new Teacher("Hemant", "hemant@google.com", "123");
username3.addCourse();
username3.logMe(); // inherit

const username4 = new userDetails("Yadav")
username4.logMe()
// username4.addCourse() // it can't use that function


console.log(username3 instanceof Teacher);
console.log(username3 instanceof userDetails);



// static properties

class discordUser {
    constructor(userName) {
        this.userName = userName;
    }

    logIn() {
        console.log(`Username is ${this.userName}`);
    }

    static createId() { // it stops the access of this function
        return '123';
    }
}

const Hemant = new discordUser("Hemant");
// console.log(Hemant.createId());
// console.log(Hemant.createId()); // TypeError: Hemant.createId is not a function


class admin extends discordUser {
    constructor(userName, email) {
        super(userName);
        this.email = email;
    }
}


const iphone = new admin("Kumar", "kumar@google.com");
console.log(iphone);

iphone.logIn();
// console.log(iphone.createId()); // TypeError: iphone.createId is not a function
