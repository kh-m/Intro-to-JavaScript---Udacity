/*
 * Laugh (5-4)
 */

var laugh = function (lols) {
    var says = "";

    for (var i=0; i<lols; i++) {
        says += "ha";
    }
    
    says +="!";
    return says;
};

console.log(laugh(10));

