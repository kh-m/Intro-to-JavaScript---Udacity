/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * A function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - final character is an exclamation mark ("!")
 *  - produces the correct results when it is called multiple times
 */

function laugh(num) {
    var haha = "";

    for (i = 1; i <= num; i++) {
        haha += "ha";
    }
    
    return haha + "!";
    }
    
    console.log(laugh(3));
    