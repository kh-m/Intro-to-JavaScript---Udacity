/*
 * Prints the appropriate message depending on balance, checkBalance, and isActive
 */

var balance = -325.00;
var checkBalance = true;
var isActive = true;

if (checkBalance === false) {console.log("Thank you. Have a nice day!");}

else if (checkBalance === true) {
    if ((isActive === true) && balance > 0) {
        console.log("Your account is active and your balance is $"+balance+".");}
    else if (isActive === false) {
        console.log("Your account is no longer active.");}
    else{
        console.log("Your balance is negative. Please contact bank.");}
}