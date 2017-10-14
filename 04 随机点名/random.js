var names = ['肖超峰', '李永康', '刘高举', '陈文强', '庄景文', '叶伟远', '严麟辉', '杨煜彬', '陈林杰', '吴和旭', '陈宏亮', '陈泽滨', '陈振宁', '陈志航', '高铭', '何嘉丽', '黄景彪', '黄任翔', '李宁', '林潮烯', '林天宏', '林祥民', '林昕炜', '吕聪宇', '吕辉扬', '潘家彬', '汤婉瑜', '王均泽', '王宁', '王子杰', '肖衍', '徐启帆', '许楠', '曾芸莹', '邹文青'];
var start = document.querySelector('#start');
var end = document.querySelector('#end');
var result = document.querySelector('#result');
var times;

function random(){
	var number = parseInt(Math.random() * names.length);
	document.querySelector('#name').innerText = names[number];
}
start.onclick = function(){
	clearInterval(times);
	times = setInterval(random, 100);
}
end.onclick = function(){
	clearInterval(times);
	document.querySelector('#result').innerText = document.querySelector('#name').innerText;
}

