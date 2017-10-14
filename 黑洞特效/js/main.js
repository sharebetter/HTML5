$(function(){
	$('.bottom input').click(function(){
		 blackHole();
	});
	$(window).keyup(function(e){
		if(e.keyCode==13){
			blackHole();
		}
	})
	
	
	function blackHole(){
		var oBlack = $('.input input').val();
	    if('黑洞'!== oBlack)return false;
	    var Black = $('#black');
	    Black.addClass('inhala');
	    window.setTimeout(function(){
	    	Black.removeClass('inhala')
	    },5000)
	    var oImg = $('img').not('#black,.img');
	    oImg.each(function(){
			var oFfset = $(this).offset();
			console.log(oFfset)
			$(this).addClass('fixed').css(oFfset).animate({
				left:'50%',
				top:'50%',
				width:0,
				height:0,
			},5000)
		    
	    })
	    setTimeout('location.reload()',5100)
	}
	
})