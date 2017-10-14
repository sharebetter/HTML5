var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

function Flake(){
	var flake = document.createElement('img');
	var left = width * Math.random();
	var top = height * Math.random();
	
	flake.src = 'flake.png';
	flake.style.transform = 'scale(' + (Math.random() * 0.2 + 0.2) + ')';
	flake.style.position = 'absolute';
	flake.style.left = left + 'px';
	flake.style.top = top + 'px';
	
	document.body.appendChild(flake);
	
	function down(){
		top = top > height? -100 : top + 6 * Math.random();
		left = left > width ? -100 : left + 3 * Math.random();
		flake.style.top = top + 'px';
		flake.style.left = left + 'px';
	}
	
	setInterval(down, 50);
}
for(var i = 0;i < 50;i++){
	new Flake();
}
