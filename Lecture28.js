// getter and setter

class User0 {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}hemant`
    }

    set password(value) {
        this._password = value
    }
}

const hitesh = new User0("h@hemant.in", "abc")
console.log(hitesh.email);


// old syntax by using function

function User(email, password) {
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })

}

const chai = new User("y@yadav.com", "HKY")

console.log(chai.email);