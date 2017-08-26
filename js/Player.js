class Player {

	constructor(w, h, x) {
		this.y 		= (canvas.height / 2) - (h / 2);
		this.w 		= w;
		this.h 		= h;
		this.x 		= x;
		this.score  = 0;
	}

	draw() {
		context.fillStyle = 'white';
	 	context.fillRect(this.x, this.y, this.w, this.h);
	}

}