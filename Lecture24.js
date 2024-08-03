// call and this in js


function setUserName(username) {
    this.username = username;
    // console.log("Called");

}


function createUser(username, email, password) {
    setUserName.call(this, username); // setUserName passes it's current context to this function
    this.email = email;
    this.password = password;
}


const user = new createUser("Hemant", "hemant@gmail.com", "1234");

console.log(user);

