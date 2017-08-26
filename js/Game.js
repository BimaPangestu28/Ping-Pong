class Game {

	constructor() {
		this.ball    	= new Ball(10, 10);
		this.players  	= [
							  new Player(10, 100, 20),
							  new Player(10, 100, canvas.width - 30)
						  ];
		this.y 		 	= 4;
		this.x       	= 4;
		this.up         = 4;
		this.game       = true;
		this.tap        = 0;
	}

	draw() {
		context.fillStyle = 'black';
	  	context.fillRect(0, 0, canvas.width, canvas.height);

	  	this.players[0].draw();
	  	this.players[1].draw();
	}

	updateSpeed() {
		this.tap++;

		if (this.tap === 5) {
			this.up++;
			this.tap = 0;
		}
	}

	collidade() {

		if ((this.ball.pos.x + this.ball.w) > this.players[1].x &&
			(this.ball.pos.y + this.ball.w) > this.players[1].y) {
			this.x = -this.x;
			this.updateSpeed();
		}

		if ((this.ball.pos.x - this.ball.w) < this.players[0].x &&
			(this.ball.pos.y - this.ball.w) > this.players[0].y - 10 &&
			(this.ball.pos.y - this.ball.w) < this.players[0].y + 100) {
			this.x = this.up;
		}

		//console.log(this.players[0].y)


	}

	reset() {
		this.ball.pos.y = canvas.height / 2;
		this.ball.pos.x = canvas.width / 2;
		this.up 		= 4;
	}

	gameOver() {
		this.players[1].score += 1;
		this.game 			  = false;
		result.style.display  = 'flex';
		this.reset();
	}

	animation() {
		this.ball.pos.y += this.y;
		this.ball.pos.x += this.x;

		if ((this.ball.pos.y + this.ball.h) > 0 && (this.ball.pos.y + this.ball.h) > canvas.height) {
			this.y = -this.y;
		}

		if ((this.ball.pos.y) < 0 && (this.ball.pos.y) < canvas.height) {
			this.y = this.up;
		}

		if ((this.ball.pos.x + this.ball.w) > 0 && (this.ball.pos.x + this.ball.w) > canvas.width) {
			this.x = -this.x;
		}

		if ((this.ball.pos.x) < 0 && (this.ball.pos.x) < canvas.width) {
			this.x = this.up;
			this.gameOver();
			//console.log(this.game);
		}
	}

	drawScore() {
		context.font 	  = "24px Lato";
		context.fillStyle = "white";
		context.textAlign = "center";
		context.fillText(this.players[0].score + " - " + this.players[1].score, canvas.width / 2, 40);
	}

	update() {
		if (this.game === true) {
			this.animation();
		}
		this.ball.draw();
		this.draw();
		this.drawScore();
		this.collidade();
		
		if ((this.ball.pos.y - 50) < canvas.height - 100 && (this.ball.pos.y - 50) > 0) {
			this.players[1].y = this.ball.pos.y - 50;
		}
		//console.log(this.players[1].pos.y);
	}

	drawBall() {
		this.ball.draw();
	}

}