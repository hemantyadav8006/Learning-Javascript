// Variables and constants

// keywords = Let, const, var

const accountId = 144; // contants  // we can't change this value and it's unique
let accountEmail = "144@gmail.com"; // varibles
var accountPassword = "1234"; // varibles and var have scope problem
accountCity = "Jaipur"; // it can declare but it's not a good practice


let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// accountId = 12;  // TypeError: Assignment to constant variable.
// console.log(accountId);


accountEmail = "h@gmail.com";
accountPassword = "456";
accountCity = "Delhi";
accountState = "bhopal";

/* perfer not to use var coz of issue in block scope and functional scope */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
