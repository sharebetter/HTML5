$(function(){
	var l1 = 0,l2 = 0;
	var $menu = $(".menu");
	$(".menu_btn").click(function(){
		$menu.slideToggle();
		l1 = $menu.position().left;
		move($menu,l1);
	});
	$(".img img").click(function(){
		var url = $(this).attr("src");
		$("body").css("background-image","url("+url+")");
	});
	var mark = true;
	var $lrc = $(".lyric");
	$(".lrcBtn").click(function(){
		if(mark){
			$lrc.animate({"width":"4.73rem"},500,function(){
				l2 = $(this).position().left;
				move($lrc,l2);
			});
		}else{
			$lrc.animate({"width":"0px"},500);
		}
		mark = !mark;
		
	});
	var $face = $(".face");
	move($face);
	$('.face_btn')[0].ondragstart = function(){return false};
	$('.face_btn')[0].onselectstart = function(){return false};
	function move($a,w){
		$a.mousedown(function(e){
			var $this = $(this);
			var x1 = e.pageX,y1 = e.pageY;
			var l = $this.position().left,
				t = $this.position().top;
			var nowTime = new Date();
			$(document).mousemove(function(e){
				var x2 = e.pageX,y2 = e.pageY;
				var x = x2-x1+l;
				var y = y2-y1+t;
				Math.abs(x-w)<30?$this.css({"left":w+"px","top":0}):$this.css({"left":x,"top":y});
			});
			$(document).mouseup(function(){
				$(this).unbind("mousemove");
				$(this).unbind("mouseup");
			});
			$(".face").mouseup(function(){
				if ( new Date() - nowTime <= 200 )$(".bg").toggle();
			});
		});
	}
	$(window).resize(function(){
		auto();
		move($menu,l1);
		move($lrc,l2);
	});
	auto();
	function auto(){
		l1 = -$menu.outerWidth(true);
		l2 = $(".music").width();
		$menu.css("left",l1);
		$lrc.css("left",l2);
		$face.css({"left":"84%","top":"0.13rem"});
	}
})
