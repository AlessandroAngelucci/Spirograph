// Spirograph
// Details available at https://en.wikipedia.org/wiki/Spirograph

var r_o  // Outer circle radius
var r_i  // Inner circle radius
var rho  // Distance between inner circle "penhole" point and center of inner circle
var t  // Counter clockwise angle by which the tangent point of the inner and outer circles rotates on the outer circle
var t_inc  // Increment rate of t
var speed  // Number of loops per frame

var x1  // Current x coordinate
var y1  // Current y coordinate
var x0  // Previous x coordinate
var y0  // Previous y coordinate

var red  // Red colour channel
var green  // Green colour channel
var blue  // Blue colour channel

function setup() {  // Set up canvas and initialise variables
	createCanvas(650, 650);  // Define canvas size
    	angleMode(DEGREES)  // Set angle mode to degrees
    	background(50)  // Set background colour

    	textAlign(LEFT, CENTER);  // Set text alignment
    	textSize(10);  // Set text size

    	r_o = floor(random(250, 350))  // Randomise r_o
    	r_i = floor(random(0, 1)*r_o)  // Randomise r_i
    	rho = floor(random(0, 1.2)*r_i)  // Randomise rho
    	t = floor(random(0, 360))  // Randomise t
    	t_inc = floor(random(1, 7))  // Randomise t_inc
    	speed = floor(random(3, 8))  // Randomise speed

    	fill(255)  // Set text colour
    	text("r_o = "+r_o, 10, 10);  // Print r_o to canvas
    	text("r_i = "+r_i, 10, 21);  // Print r_i to canvas
    	text("rho = "+rho, 10, 32);  // Print rho to canvas
    	text("t = "+t, 10, 43);  // Print t to canvas
    	text("t_inc = "+t_inc, 10, 54);  // Print t_inc to canvas
    	text("speed = "+speed, 10, 65);  // Print speed to canvas
}

function draw() {  // Execute calculations and drawings until program is stopped
	translate(width/2, height/2)  // Displace objects to canvas center

    	for (var i = 0; i < speed; i++){  // Perform calculations and drawings multiple times per frame
        	x1 = ((r_o - r_i)*cos(t)) + (rho*cos(((r_o - r_i)/r_i)*t))  // Calculate current x coordinnate
        	y1 = ((r_o - r_i)*sin(t)) - (rho*sin(((r_o - r_i)/r_i)*t))  // Calculate current y coordinate
    
        	red = map(cos(frameCount), -1, 1, 100, 200)  // Store red colour channel
        	green = map(sin(frameCount), -1, 1, 100, 200)  // Store green colour channel
        	blue = map(cos(frameCount) + sin(frameCount), -1.5, 1.5, 100, 200)  // Store blue colour channel

        	stroke(red, green, blue)  // Set line stroke colour
        	line(x0, y0, x1, y1)  // Draw line from previous x & y to current x & y

        	x0 = x1  // Set previous x coordinate to current x coordinate
        	y0 = y1  // Set previous y coordinate to current y coordinate

        	t += t_inc  // Increment t by t_inc
	}
}
