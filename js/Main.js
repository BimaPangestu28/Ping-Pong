window.onload = function() {
	game   = new Game();

	startGame();
}

function startGame() {
	function anim() {
		requestAnimationFrame(anim);
		game.update();
		game.drawBall();
	}

	anim();

}

canvas.addEventListener('mousemove', function(event){
	if ((event.y - 50) < canvas.height - 100 && (event.y - 50) > 0) {
		game.players[0].y = event.y - 50;
	}
});

document.addEventListener('click', function(){
	game.game 			 = true;
	result.style.display = 'none';
})

//startGame();