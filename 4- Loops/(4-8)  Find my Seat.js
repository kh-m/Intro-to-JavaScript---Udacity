/*
 * A nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

for (isle=0;isle<26;isle++) {
    for (row=0;row<100;row++) {
        console.log(isle+"-"+row);
    }
}