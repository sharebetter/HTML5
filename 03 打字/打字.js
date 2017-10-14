//JavaScript中分为全局作用域和局部作用域，全局作用域中的变量和方法在任何地方都可以调用，但是在局部作用域中的方法只能在局部作用域中使用
var correctCount = 0;
var errorCount = 0;

function showWord() {
	var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	//Math是JavaScript定义好的一个全局对象，random()是它的一个方法，生成一个[0, 1)
	//取整之后范围在0-25
	//parseInt这是一个保留整数的方法
	//Math.floor向下取整，Math.ceil向上取整
	var n = Math.floor(Math.random() * 26);
	//字符串默认带有一些方法，charAt方法取到所赋予的参数位置的字符
	var word = char.charAt(n);

	document.getElementsByClassName('word')[0].innerText = word;
}
showWord();

function check(event){
	//event参数是当触发事件时默认传入的参数，它里面包含了一些事件的基本信息
	//调用它里面的key获取到按得是什么键，然后使用toUpperCase将它变为大写字母
	//console.log(event.key.toUpperCase());
	var key = event.key.toUpperCase();
	var wordBox = document.getElementsByClassName('word')[0];
	var word = wordBox.innerText;
	
	if(key == word){
//		document.getElementsByClassName('word')[0].className = 'word';
		showWord();
		wordBox.className = 'word animated fadeIn';
		//setTimeout设置一个延时触发器，当设置的毫秒数之后，触发第一个参数设置的方法
		setTimeout(clearAnimate, 700);
		correctCount++;
		document.getElementsByClassName('correct')[0].innerText = '正确次数：' + correctCount;
	}else{
		wordBox.className = 'word animated shake red';
		setTimeout(clearAnimate, 700);
		errorCount++;
		document.getElementsByClassName('error')[0].innerText = '错误次数：' + errorCount;
	}
	document.getElementsByClassName('rate')[0].innerText = '正确率：' + (correctCount / (correctCount + errorCount) * 100).toFixed(2) + '%';
	
	function clearAnimate(){
		wordBox.className = 'word';
	}
}
