$(function(){
	var oSize = $('.wrap img').length;
	var oRadius = 360 / oSize;
	var roX=-10,roY=0;
	var disX,disY,play = null;
    $('.wrap img').each(function(i){
    	$(this).css({
    		'transform':'rotateY('+oRadius*i+'deg) translateZ(350px)'
    	    
    	}).attr('ondragstart','return false')
    })
    $(document).mousedown(function(event){
    	clearInterval(play);
    	var x = event.clientX;
    	var y = event.clientY;
       $(this).bind('mousemove',function(event){
       	    var x_ = event.clientX;
       	  	var y_ = event.clientY;
       	  	disX = x_-x;
       	  	disy = y_-y;
       	  	
       	  	roX+=disY*0.2;
       	  	roY+=disX*0.07
       	  	$('.wrap').css({
       	  		'transform':'perspective rotateX('+roX+'deg) rotateY('+roY+'deg)'
       	  	})
       	  	x=event.clientX;
       	  	y=event.clientY;
       }).mouseup(function(){
       	  $(this).unbind('mousemove');
       	  play = setInterval(function(){
       	  	disX = disX*0.95;
       	  	disY = disY*0.95;
       	  })
       	  if(Math.abs(disX)<=0.5 && Math.abs(disY)<=0.5){
       	  	clearInterval(play);
       	  }
       	  roX+=disY*0.2;
       	  roY+=disX*0.07;
       	  $('.wrap').css({
       	  	'transform':'perspective(800px) rotate('+roX+'deg) rotateY('+roY+'deg)'
       	  })
       },30)
    })
})