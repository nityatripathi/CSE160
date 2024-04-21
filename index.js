// DrawRectangle.js
function main() {
	// Retrieve <canvas> element                                  <- (1)
	canvas = document.getElementById('example');
	if (!canvas) {
		console.log('Failed to retrieve the <canvas> element');
		return;
	}

// Get the rendering context for 2DCG                          <- (2)
ctx = canvas.getContext('2d');

// Draw a blue rectangle                                       <- (3)
ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a blue color
ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

//handleDrawEvent();
}


function drawVector(v, color) {
	ctx.strokeStyle = color; // Set color
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, canvas.height/2); // Move to origin
    ctx.lineTo(canvas.width/2 + v.elements[0] * 20, canvas.height/2 - v.elements[1] * 20); // Scale and draw vector
    ctx.stroke();
}

function handleDrawEvent() {
	//let v1 = document.getElementById("v1x").value;
	//console.log(v1);

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
	ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

	//let cx = (canvas.width)/2;
	//let cy = (canvas.height)/2;

	let dx = parseFloat(document.getElementById("v1x").value);
	//console.log(dx);
	let dy = parseFloat(document.getElementById("v1y").value);
	//console.log(dy);
	let ex = parseFloat(document.getElementById("v2x").value);
	//console.log(ex);
	let ey = parseFloat(document.getElementById("v2y").value);
	//console.log(ey);

	// Create vector v1
    var v1 = new Vector3([dx, dy, 0]);

    // Draw vector v1
    drawVector(v1, 'red');

	// Create vector v2
    var v2 = new Vector3([ex, ey, 0]);

    // Draw vector v2
    drawVector(v2, 'blue');
}

function handleDrawOperationEvent() {

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
	ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

	//let cx = (canvas.width)/2;
	//let cy = (canvas.height)/2;

	let dx = parseFloat(document.getElementById("v1x").value);
	//console.log(dx);
	let dy = parseFloat(document.getElementById("v1y").value);
	//console.log(dy);
	let ex = parseFloat(document.getElementById("v2x").value);
	//console.log(ex);
	let ey = parseFloat(document.getElementById("v2y").value);
	//console.log(ey);

	// Create vector v1
    var v1 = new Vector3([dx, dy, 0]);

    // Draw vector v1
    drawVector(v1, 'red');

	// Create vector v2
    var v2 = new Vector3([ex, ey, 0]);

    // Draw vector v2
    drawVector(v2, 'blue');




	var operation = document.getElementById("op-select").value;
	//console.log(operation);

	if (operation === "add") {
        // Addition operation
        var v3 = v1.add(v2);
        drawVector(v3, "green");
        console.log(v3);
    } 

    else if (operation === "sub") {
        // Subtraction operation
        var v3 = v1.sub(v2);
        drawVector(v3, "green");
    } 

    else if (operation === "mul") {
        // Multiplication operation
        var scalar = parseFloat(document.getElementById("scal").value);
        var v3 = v1.mul(scalar);
        var v4 = v2.mul(scalar);
        drawVector(v3, "green");
        drawVector(v4, "green");
    } 

    else if (operation === "div") {
        // Division operation
        var scalar = parseFloat(document.getElementById("scal").value);
        var v3 = v1.div(scalar);
        var v4 = v2.div(scalar);
        drawVector(v3, "green");
        drawVector(v4, "green");
    }

    else if (operation === "mag") {
    	console.log("Magnitude v1: ", v1.magnitude());
    	console.log("Magnitude v2: ", v2.magnitude());
    }

    else if (operation === "nor") {
    	var v3 = v1.normalize();
    	var v4 = v2.normalize();
    	drawVector(v3, "green");
        drawVector(v4, "green");
    }

    else if (operation === "ang") {
    	let dot = Vector3.dot(v1, v2);
    	let mag1 = v1.magnitude();
    	let mag2 = v2.magnitude();
    	let radians = Math.acos(dot / (mag1 * mag2));
    	let degrees = radians * (180 / Math.PI);
    	console.log("Angle: ", degrees);
    }

    else if (operation === "are") {
    	let crossp = Vector3.cross(v1, v2);
    	let area = crossp.magnitude()/2;
    	console.log("Area of the triangle: ", area);
    }
}

/*
// asg0.js

// DrawVector.js
function drawVector(v, color) {
    // Retrieve <canvas> element
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    // Get the rendering context for 2DCG
    var ctx = canvas.getContext('2d');

    // Set canvas size and origin to center
    canvas.width = 400;
    canvas.height = 400;
    ctx.translate(canvas.width / 2, canvas.height / 2); // Move origin to center

    // Set canvas background color to black
    ctx.fillStyle = 'black';
    ctx.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

    // Draw vector
    ctx.strokeStyle = color; // Set color
    ctx.beginPath();
    ctx.moveTo(0, 0); // Move to origin
    ctx.lineTo(v.elements[0] * 20, -v.elements[1] * 20); // Scale and draw vector
    ctx.stroke();
}

function main() {
    // Create vector v1
    var v1 = new Vector3(2.25, 2.25, 0);

    // Draw vector v1
    drawVector(v1, 'red');
}

// Vector3 class (assuming it's provided by cuon-matrix.js)
function Vector3(x, y, z) {
    this.elements = [x, y, z];
}
*/