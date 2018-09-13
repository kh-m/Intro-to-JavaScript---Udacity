/*
 * A function that takes an array with team as an argument
 * and returns 'true' if it has at least 7 players.
 */

function hasEnoughPlayers(team){
    if (team.length >= 7){
        return true;
    }
    else{
        return false;
    }
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));
