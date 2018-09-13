/*
 * Inline Functions
 */

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function myFunc(num) {
    var lols = "";
    for(var i=1;i<=num;i++) {
        lols +="ha";
    }

    return (lols + "!");
}
)


