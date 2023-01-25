// Spirograph
// Details available at https://en.wikipedia.org/wiki/Spirograph

var r  // Outer circle radius
var k  // Ratio of inner circle radius to outer circle radius
var l  // Distance between inner circle "penhole" point and center of inner circle
var t  // Counter clockwise angle by which the tangent point of the inner and outer circles rotates on the outer circle
var t_inc  // Increment rate of t
var speed  // Number of loops per frame

var x0  // Previous x value
var y0  // Previous y value

function setup() {  // Set up canvas and initialise variables
	createCanvas(650, 650);  // Define canvas size
    	angleMode(DEGREES)  // Set angle mode to degrees
    	background(50)  // Set background colour

    	textAlign(LEFT, CENTER);  // Set text alignment
    	textSize(10);  // Set text size

    	r = floor(random(250, 400))  // Randomise r
    	k = round(random(0, 1), 2)  // Randomise k
    	l = round(random(0, 1), 2)  // Randomise l
   	t = floor(random(0, 360))  // Randomise t
    	t_inc = floor(random(1, 7))  // Randomise t_inc
    	speed = floor(random(3, 8))  // Randomise speed

    	fill(255)  // Set text colour
    	text("r = "+r, 10, 10);  // Print r to canvas
	text("k = "+k, 10, 21);  // Print k to canvas
	text("l = "+l, 10, 32);  // Print l to canvas
    	text("t = "+t, 10, 43);  // Print t to canvas
    	text("t_inc = "+t_inc, 10, 54);  // Print t_inc to canvas
    	text("speed = "+speed, 10, 65);  // Print speed to canvas
}

function draw() {  // Execute calculations and drawings until program is stopped
	translate(width/2, height/2)  // Displace objects to canvas center

    	for (var i = 0; i < speed; i++){  // Perform calculations and drawings multiple times per frame
        	var x1 = r*(((1-k)*cos(t)) + ((l*k)*cos(((1-k)/k)*t)))  // Calculate x1
        	var y1 = r*(((1-k)*sin(t)) - ((l*k)*cos(((1-k)/k)*t)))  // Calculate x2

        	var red = map(cos(frameCount), -1, 1, 100, 200)  // Store red colour channel
        	var green = map(sin(frameCount), -1, 1, 100, 200)  // Store green colour channel
        	var blue = map(cos(frameCount) + sin(frameCount), -1.5, 1.5, 100, 200)  // Store blue colour channel

        	stroke(red, green, blue)  // Set line stroke colour
        	line(x0, y0, x1, y1)  // Draw line from previous x & y to current x & y

        	x0 = x1  // Set previous x coordinate to current x coordinate
       		y0 = y1  // Set previous y coordinate to current y coordinate

        	t += t_inc  // Increment t by t_inc
  }
}
