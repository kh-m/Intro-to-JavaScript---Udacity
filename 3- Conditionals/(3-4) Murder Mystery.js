/*
 * Solving a mystery
 * 
 * four rooms: the ballroom, gallery, billiards room, and dining room.
 * four weapons: poison, a trophy, a pool stick, and a knife.
 * four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
 * 
 * facts:
 * - the poison belongs to the ballroom
 * - the trophy belongs to the gallery
 * - the pool stick belongs to the billiards room
 * - the knife belongs to the dining room
 * 
 * - Mr. Parkes was located in the dining room
 * - Ms. Van Cleve was located in the gallery
 * - Mrs. Sparr was located in the billiards room
 * - Mr. Kalehoff was located in the ballroom
 * 
 */

var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

if (room === "dining room") {
    weapon = "knife";
    } else if (room === "gallery") {
    weapon = "trophy";
    } else if (room === "billiards room") {
    weapon = "pool stick";
    } else {
    weapon = "poison";
}

if (suspect === "Mr. Parkes" && weapon === "knife") {
    solved = true;
    } else if (suspect === "Ms. Van Cleve" && weapon === "trophy") {
    solved = true;
    } else if (suspect === "Mrs. Sparr" && weapon === "pool stick") {
    solved = true;
    } else if (suspect === "Mr. Kalehoff" && weapon === "poison") {
    solved = true;
}

if (solved === true) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
