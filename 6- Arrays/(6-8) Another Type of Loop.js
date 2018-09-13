/*
 * Using the forEach method to add 100 to any valud divisable by 3
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(currentValue, index, array) {
    if (currentValue % 3 === 0){
       array[index] += 100;
    }
});

console.log(test);
