$(function(){
	$('.sxt-wrapper').mousedown(function(){
//     var x = ev.clientX;
//     var y = ev.clientY;
       $(this).bind('mousemove',function(ev){
       	  var x_ = ev.clientX;
       	  var y_ = ev.clientY;
       	  
       	 $('.sxt-wrapper').css({
       	 	'transform':'perspective(800px) rotateX('+y_+'deg) rotateY('+x_+'deg)'});
       })
       .mouseup(function(){
		$(this).unbind('mousemove');
		$(this).mousedown=null;
	 })
   })
	return false;
})
