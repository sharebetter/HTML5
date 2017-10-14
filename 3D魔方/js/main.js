var inputs = document.getElementsByTagName('input');
var ul = document.getElementById('ul');
var x=0,y=0;
for(var i=0;i<inputs.length;i++){
	inputs[i].onclick=run;
}
function run(){
	ul.style.transition='transform 3s linear';
	if(inputs[0]==this){
		x+=90;
		console.log(2333)
	}
	if(inputs[1]==this){
		y+=90;
	}
	if(inputs[2]==this){
		x-=90;
	}
	if(inputs[3]==this){
		y-=90;
	}
	if(inputs[4]==this){
		x=0;
		y=0;
		ul.style.transition='transform .5s linear';
	}
//	console.log(x,y)
	ul.style.transform='rotateX('+x+'deg) rotateY('+y+'deg)';
}
//document.addEventListener('keydown',function(e){})
	window.onkeydown=function(e){
		ul.style.transition='transform 3s linear';
//		console.log(2333)
		switch(e.keyCode){
			case 37:
				y = y+90;
				break;
			case 38:
				x = x+90;
				break;
		    case 39:
				y = y-90;
				break;
			case 40:
				x = x+90;
				break;
			case 13:
				x=0;
				y=0;
			    ul.style.transition='transform .5s linear';	
				break;
		}
		ul.style.transform='rotateX('+x+'deg) rotateY('+y+'deg)';
	}
