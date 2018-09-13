/*
 * Inserting elements in array using splice
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

rainbow.splice(2,1, "Yellow", "Green");
rainbow.splice(5,0,"Purple");

console.log(rainbow);
