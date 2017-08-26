class Ball {

	constructor(w, h)
	{
		this.pos  = new Vec(canvas.width / 2, canvas.height / 2);
		this.size = new Vec(w, h);
		this.w    = w;
		this.h    = h;

		this.vel  = new Vec;
	}

	draw() {
		context.fillStyle = 'white';
	 	context.fillRect(this.pos.x, this.pos.y, this.w, this.h);
	}

}