//jquery中直接通过$符号调用选择器
var mouses = $('img');
var score = 0;

function show(){
	var n = parseInt(Math.random() * 16);
	//在jQuery集合中获取到第n个元素
	var mouse = mouses.get(n);
	//再次通过$选中当前的标签，调用其中的方法
	//addClass给这个元素添加一个类，与之前的classList.add()
	//removeClass移除一个类名
	$(mouse).addClass('show').removeClass('hide');
	
	
	function hide(){
		//向元素添加隐藏的类
		$(mouse).addClass('hide').removeClass('show');
	}
	//延迟触发器，2秒之后执行hide方法
	setTimeout(hide, 2000);
}
//每次显示4个地鼠
function play(){
	show();
	show();
	show();
	show();
}
//每隔2秒执行一次
setInterval(play, 2000);

$('img').on('click', function(){
	//this指向当前被点击到的图片
	$(this).addClass('hide').removeClass('show');
	score++;
	$('#score').text('得分：' + score);
	$('audio').get(1).play();
});
//设置鼠标按下跟弹起的时候，鼠标样式发生改变
$('body').on('mousedown', function(){
	//.css设置选中元素的css样式，和.style类似
	$('body').css('cursor', 'url(image/cursor-down.png), auto');
}).on('mouseup', function(){
	$('body').css('cursor', 'url(image/cursor.png), auto');
});
