var img = document.querySelector('#img');
var div = document.querySelector("#mystyle");
var div2 = document.querySelector("#mystyle2");
var wekday = document.querySelector("#wekday");
var buttomimg= document.querySelector("#bottomimg");
var weath = document.querySelector("#weath");
var deg = document.querySelector("#deg");
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
function action(n){
	div.style.display='none';
	img.style.display='block';
	if(n!=2){
	var src= 'img/' + n + '.jpg';
	img.src = src;
	div2.style.display='none';
     }
	else{
		div.style.display='block';
		div2.style.display='block';
		img.style.display='none';
	}
}
 function Flake(name){
	var flake = document.createElement('img');
	flake.className = 'a';
	var left = width * Math.random();
	var top = height * Math.random();
	flake.src = 'img/'+ name +'.png';
	console.log(flake.src);
//	flake.style.width='5px';
//	flake.style.height='5px';
	flake.style.transform = 'scale(' + (Math.random() * 0.2 + 0.2) + ')';
	flake.style.position = 'absolute';
	flake.style.height='4%';
	flake.style.width = '4%';
	flake.style.left = left + 'px';
	flake.style.top = top + 'px';
	
	document.body.appendChild(flake);
	
	function down(){
		top = top > height? 50 : top + 5 * Math.random();
		left = left > width ? -400 : left + 1 * Math.random();
		flake.style.top = top + 'px';
		flake.style.left = left + 'px';
	}
	
	setInterval(down, 40);
}
 function Flake1(name){
	var flake = document.createElement('img');
	flake.className = 'a';
	var left = width * Math.random();
	var top = height * Math.random();
	flake.src = 'img/'+ name +'.png';
	console.log(flake.src);
//	flake.style.width='5px';
//	flake.style.height='5px';
	flake.style.transform = 'scale(' + (Math.random() * 0.2 + 0.2) + ')';
	flake.style.position = 'absolute';
	flake.style.height='6%';
	flake.style.width = '6%';
	flake.style.left = left + 'px';
	flake.style.top = top + 'px';
	
	document.body.appendChild(flake);
	
	function down(){
		top = top > height? 50 : top + 5 * Math.random();
		left = left > width ? -500: left + 5 * Math.random();
		flake.style.top = top + 'px';
		flake.style.left = left + 'px';
	}
	
	setInterval(down, 40);
}
//for(var i = 0;i < 200;i++){
//	new Flake(name);
//}
function Flake2(name){
	var flake = document.createElement('img');
	flake.className = 'a';
	var left = width * Math.random();
	var top = height * Math.random()+140;
	flake.src = 'img/'+ name +'.png';
	console.log(flake.src);
//	flake.style.width='5px';
//	flake.style.height='5px';
	flake.style.transform = 'scale(' + (Math.random() * 0.2 + 0.3) + ')';
	flake.style.position = 'absolute';
	flake.style.height='7%';
	flake.style.width = '7%';
	flake.style.left = left + 'px';
	flake.style.top = top + 'px';
	
	document.body.appendChild(flake);
	
	function down(){
//		top = top > height? 50 : top + 6 * Math.random();
		left = left > width ? -400 : left + 3 * Math.random();
		flake.style.top = top + 'px';
		flake.style.left =left + 'px';
	}
	
	setInterval(down, 30);
}
function play(m){
	var name;
	
	if(m==1){
		var flakes = document.querySelectorAll('.a');
		for(var i = 0;i < 200;i++){
	    $(flakes[i]).remove();
       }
		
		wekday.innerHTML='星期四';
		buttomimg.src='img/qing.png';
		weath.innerHTML = '晴';
		deg.innerHTML = '25/16°C';
		name='sakura';
		Flake(name);
		for(var i = 0;i < 70;i++){
	      new Flake1(name);
         }

	}
	if(m==2){
		var flakes = document.querySelectorAll('.a');
		for(var i = 0;i < 200;i++){
	    $(flakes[i]).remove();
       }
		wekday.innerHTML='星期五';
		buttomimg.src='img/xiaoyu.png';
		weath.innerHTML = '小雨';
		deg.innerHTML = '18/12°C';
		name='rain';
		for(var i = 0;i < 60;i++){
	      new Flake(name);
        }
	}
	if(m==3){
		var flakes = document.querySelectorAll('.a');
		for(var i = 0;i < 200;i++){
	    $(flakes[i]).remove();
       }
		wekday.innerHTML='星期六';
		buttomimg.src='img/dayu.png';
		weath.innerHTML = '大雨';
		deg.innerHTML = '12/7°C';
		name = 'rain';
         for(var i = 0;i < 100;i++){
	      new Flake(name);
         }
	}
	if(m==4){
		var flakes = document.querySelectorAll('.a');
		for(var i = 0;i < 200;i++){
	    $(flakes[i]).remove();
       }

		wekday.innerHTML='星期日';
		buttomimg.src='img/yin.png';
		weath.innerHTML = '阴';
		deg.innerHTML = '8/2°C';
		name='yin';
         for(var i = 0;i < 20;i++){
	      new Flake2(name);
         }
	}
	if(m==5){
		var flakes = document.querySelectorAll('.a');
		for(var i = 0;i < 200;i++){
	    $(flakes[i]).remove();
       }
		wekday.innerHTML='星期一';
		buttomimg.src='img/daxue.png';
		weath.innerHTML = '大雪';
		deg.innerHTML = '-2/-10°C';
		name='snow';
         for(var i = 0;i < 100;i++){
	      new Flake(name);
         }
	}
  
}
