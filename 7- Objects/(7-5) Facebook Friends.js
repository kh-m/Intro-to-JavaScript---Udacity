/*
 * An object called facebookProfile with the following methods:
 * 
 * postMessage(message) - adds a new message string to the array
 * deleteMessage(index) - removes the message corresponding to the index provided
 * addFriend() - increases the friend count by 1
 * removeFriend() - decreases the friend count by 1
 * 
 */

var facebookProfile = {
    name: "Khaled",
    friends: 100000000,
    messages: [
        "What's up dudes?",
        "You guys wanna kick it?",
        "You dawgs going to the hookah lounge?",
        "Ahhhh, that's brutal, dude!"
        ],
    
    postMessage: function post(message) {
        facebookProfile.messages.push(message);
    },
    
    deleteMessage: function erase(index) {
        facebookProfile.messages.splice((index),1);
    },
    
    addFriend: function addOneFriend() {
        facebookProfile.friends += 1;
    },
        
    removeFriend: function removeOneFriend() {
        facebookProfile.friends -=1;
    }
    
};

facebookProfile.deleteMessage(0);
console.log(facebookProfile.messages);
"\n";

facebookProfile.addFriend();
console.log(facebookProfile.friends);