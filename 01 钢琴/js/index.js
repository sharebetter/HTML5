//使用getElementsByTagName获取到的节点集合是动态的
//使用querySelectorAll获取到的集合是一个静态的集合
var audios = document.querySelectorAll('audio');
var divs = document.querySelectorAll('div');
//console.dir(audios);
var code = 0;
function play(n){
	var audio = audios[n - 1];
	//首先加载音频
	audio.load();
	//然后播放音频
	audio.play();
}

window.onkeydown = function(event){
	
	if(event.keyCode >= 49 && event.keyCode <= 57){
		//取到当前对应的audio标签
		if(code != event.keyCode){
			code = event.keyCode;
			var audio = audios[event.keyCode - 49];
			audio.load();
			audio.play();
			//classList.add()向标签添加某个类
			divs[event.keyCode - 49].classList.add('active');
		}
	}
}
window.onkeyup = function(event){
	code = 0;
	if(event.keyCode >= 49 && event.keyCode <= 57){
		//remove移除某个类
		divs[event.keyCode - 49].classList.remove('active');
	}
}
