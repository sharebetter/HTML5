var img = document.querySelector('#img');
var audio = document.querySelector('#audio');
//获取浏览器的宽高
var height = document.documentElement.clientHeight;
var width = document.documentElement.clientWidth;

function action(event){
	//获取到当前位置在图片的具体位置
	var x = event.pageX / width * 1000;
	var y = event.pageY / height * 1000;
	console.log(x+','+y);
	
	if(x > 680 && x < 770 && y > 180 && y < 300){
		play('angry', 25, 0);
	}
}

function play(name, count, start){
	//记录当前播放到第i张
	var i = 0;
	animate();
	//animate方法每次都会重新设置页面上的图片
	function animate(){
		//如果i小于10取第一个参数，i大于10取第二个参数
		i = i < 10 ? '0' + i : i;
		var src = 'imgs/' + name + '/' + name + '_' + i + '.jpg';
		var music = 'sounds/' + name + '.m4a';
		
		if(i == start){
			audio.src = music;
			audio.play();
		}
		img.src = src;
		
		if(i < count){
			setTimeout(animate, 100);
		}
		
		//让图片每次+1
		i++;
	}
}
