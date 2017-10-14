$('.add').click(function(obj){
	var src = $(this).parent().find('img').attr('src');
	var title = $(this).prev().prev().html();
	$('.c_ul').append(
		"<li onclick='clearLi(this);'><a href='#'><img src='"+src+"'width='75px';'height='50px'/></a>"+
		"<span class='c_span'>"+title+"</span>"+"</li>"
	);
	add(obj);
});
function add(obj){
	var offset = $('#end').offset();
	var _this = $(obj.target);
	var src = _this.parent().find('img').attr('src');
	var fly = $("<img src='"+src+"' class='fly'/>");
	fly.fly({
		start:{
			left:obj.clientX,
			top:obj.clientY
		},
		end:{
			left:offset.left,
			top:offset.top,
			width:20,
			height:20
		},
		onEnd:function(){
			fly.fadeOut('slow',function(){
				$(this).remove();
			})
		}
	});
}
var close = true;
$('.cart .c_tool').click(function(){
	if(close){
		$('.cart').animate({'right':'-185px'},800);
		close = false;
	}else{
		$('.cart').animate({'right':'0px'},800);
		close = true;
	}
})
function clearLi(obj){
	$(obj).remove();
}
