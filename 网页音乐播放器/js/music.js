var index = 0;
var li = $(".nav ul li");
var img = $(".music .m-img img");
var prev = $(".music .m-btn .m-prev");
var text = $(".music .m-btn .m-text");
var play = $(".music .m-btn .m-play");
var next = $(".music .m-btn .m-next");
var flag = true;
var close = true;

li.click(function(){
		index = $(this).index();
		getPlay();
})
function getPlay(){
	changeBG();
	img.attr("src","img/"+(index+1)+".jpg");
	var title = li.eq(index).attr("title");
	text.text(title);
	var music = li.eq(index).attr("datasrc");
	$(".m-mp3").attr("src",music).get(0).play();
	li.eq(index).children().addClass("rotateM").parent().siblings().children().removeClass("rotateM");
	play.show().css("background-position","-296px -90px");
	flag = false;
}
function changeBG(){
	$("body").show().css("background","url(img/"+(index+1)+"_bg.jpg)");
    $("body").show().css("background-size","cover");
}
prev.click(function(){
	index--;
	if(index < 0){
	 index = 4 ;
	}
	getPlay();
})
next.click(function(){
	index++;
	if(index > 4){
	 index = 0 ;
	}
	getPlay();
})
play.click(function(){
	if(flag){
		$(".m-mp3").get(0).play();
		play.show().css("background-position","-296px -90px");
		li.eq(index).children().addClass("rotateM");
		flag = false;
	}else{
		$(".m-mp3").get(0).pause();
		play.show().css("background-position","-110px -3px")
		li.eq(index).children().removeClass("rotateM")
		flag = true;
	}
})
