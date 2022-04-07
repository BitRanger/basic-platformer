let canvas = document.getElementById("game");
let context = canvas.getContext("2d");
let xPos = 0;
let xSpeed = 0;
let jump = 0;
let jumping = false;
let atJumpApex = false;
let leftArrow = false;
let rightArrow = false;
document.addEventListener("keydown", keyDownInputHandler);
document.addEventliste
setInterval(gameLoop,1000/60)
function gameLoop(){
	move();
	draw();
}

function draw(){
	context.fillStyle = "black";
	context.fillRect(0,0,canvas.width,canvas.height);
	context.fillStyle = "white";
	context.fillRect(0,canvas.height-10, canvas.width,10);
	context.fillStyle = "red";
	context.fillRect(xPos,canvas.height-20+jump,10,10);
}

function move(){
	
	//move
	if(leftArrow == true){
		xPos--;
		leftArrow = false;
	}
	if(rightArrow == true){
		xPos++;
		rightArrow = false;
	}
	
	
	//jump
	if(jumping == true){
		if(atJumpApex != true){
			jump--;
		}
		if(atJumpApex == true){
			jump++;
		}
		if(jump == -10){
			atJumpApex = true;
		}
		if(jump == 0){
			atJumpApex = false;
			jumping = false;
		}
		
	}
}

function keyDownInputHandler(event){
	if(event.key == "ArrowLeft"){
		leftArrow = true;
	}
	else{
		leftArrow = false;
	}
	if(event.key == "ArrowRight"){
		rightArrow = true;
	}	
	else{
		rightArrow = false;
	}
	
	
	
	if(event.key == "ArrowUp"){
		jumping = true;
	}
}
