/*
 * Builds A Triangle
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(widest) {
    var triangle = "";
    for (var j = 1; j <= widest;j++ ) {
        triangle += makeLine(j);
    }
    return (triangle);
}

console.log(buildTriangle(10));