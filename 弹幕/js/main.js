$(function(){
	$('.b-close').click(function(){
		$('.barrage').toggle(400);
	})
	$('.btn').click(function(){
		$('.barrage').toggle(400);
	})
	sendMsg();
	
	$('.s-btn').click(function(){
		sendBarrage();
		sendMsg2();
	})
	$(document).keyup(
		function(ev){
			if(ev.keyCode == 13){
			   sendBarrage();
		       sendMsg2();	
			}
		})
		
	function sendMsg(){
		$('.b-show').find('div').show().each(function(){
		  	var left = $(window).width()-$(this).width();
//		  	console.log($(this).width());
		  	var height = $(window).height();
		  	var top = (Math.random()*520+10)+'px';
		  	top = (top>=height)?0:top;
		  	$(this).css({
		  		left:left,
		  		top:top,
		  		color:getRandomColor()
		  	});
		  	var time = (Math.random()*30000);
		  	time = (time<15000)?15000:time;
		  	$(this).animate({
		  		left:'-'+left+'px',
		  	},time,function(){
		  		$(this).remove();
		  	})
        })
	}

	function sendMsg2(){
		$('.b-show').find('div:last-child').show().each(function(){
		  	var left = $(window).width()-$(this).width();
//		  	console.log($(this).width());
		  	var height = $(window).height();
		  	var top = (Math.random()*520+10)+'px';
		  	top = (top>=height)?0:top;
		  	$(this).css({
		  		left:left,
		  		top:top,
		  		color:getRandomColor()
		  	});
		  	var time = (Math.random()*25000);
		  	time = (time<10000)?10000:time;
		  	$(this).animate({
		  		left:'-'+left+'px',
		  	},time,function(){
		  		$(this).remove();
		  	})
        })
	}
	function sendBarrage(){
//		console.log(2222)
		var txt = $('.s-text').val();
		var div = $("<div class='twisterInUp fadeIn'>"+txt+'</div>')
		$('.b-show').append(div);
		$('.s-text').val('');
	}
	function getRandomColor(){
		return '#'+(Math.random()*0x1000000<<0).toString(16);
	}
})
