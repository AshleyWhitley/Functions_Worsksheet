/* Ashley Whitley
 Functions Worksheet
 March 26, 2015
 SDI Section 01
 */

/*Circumference:

 Calculate the circumference of a circle.

 Parameter(s) for function:
 Radius of the circle
 Return:
 Circumference of the circle
 Result to print to the console:
 “The circumference of the circle is X”;
 */

//First need to know the formula for the circumference of a circle which is C = d * PI * r

//FIRST ATTEMPT

//calcCirc(3, 3.13, 2);

/*function calcCirc( d, PI, r ){
    var circ = d * PI * r;
    console.log(circ);
}*/

function circum() {
    	  var radius = prompt("Enter the radius of the circle"+".");
    	  var circle = Math.round(2 * Math.PI * radius);
    	  alert("The circumference is "+ circle)
    	}



/*Stung!

 It takes 8.666666667 bee stings per pound to kill an animal.
 Calculate how many bee stings are needed to kill an animal in a function

 Given:
 Victim’s weight (in pounds)
 Parameter(s) for function:
 Victim’s weight (in pounds)
 Return:
 Number of Bee stings
 Result to print to the console:
 “It takes X bee stings to kill this animal.
 */
