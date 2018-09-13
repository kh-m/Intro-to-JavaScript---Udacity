/*
 * Loops from 1 to 10:
 * If the number is divisible by 3, print "Julia"
 * If the number is divisible by 5, print "James"
 * If the number is divisible by 3 and 5, print "JuliaJames"
 */

var x = 1;

while (x<=20) { 
  if((x%5===0)&&(x%3===0)){
      console.log("JuliaJames");
  } else if(x%3===0){
      console.log("Julia");
    } else if(x%5===0){
      console.log("James");
    } else{
      console.log(x);
    }
  
  x=x+1;
}
