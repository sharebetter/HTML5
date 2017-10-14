var audios = document.querySelectorAll('audio');
var divs = document.querySelectorAll('div');
var cnt = 0;
function play(n){
	var audio = audios[n-1];
	audio.load();
	audio.play();
}

window.ondown=function(){
	
}
