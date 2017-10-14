var index;
$(function(){
	$('.bg-btn').click(function(e){
		$('.imgbox').show(1000);
		e.stopPropagation();	
	});
	$(this).click(function(){
	  $('.imgbox').hide(1000);
	});
	$('.imgbox div').bind('click',function(){
		$('#show-txt').html('');
		index = $(this).data('index');/*$(this).index()+1*/
		$('#show-img').attr('src','img/qw_cat_000'+index+'.gif')
		.show().css({
			width:'1000px',
			height:'1000px',
			opacity:'0',
			left:($(window).width()-400)/2-200
		}).animate({
			width:'400px',
			height:'400px',
			opacity:'1',
			left:'260px'
		},1000)
		$('.show-box').show();
		$('.bg-cont').css('opacity','0.3');
	});
	$('.b-btn').click(function(){
		sendMsg();
		$('.b-txt').val('');
	});
	function sendMsg(){
		$('#show-txt').html('');
		var txt = $('.b-txt').val();
		$('#show-img').attr('src','img/bg/qw_cat_000'+index+'.gif')
	    .show().css({
			width:'1000px',
			height:'1000px',
			opacity:'0',
			left:($(window).width()-400)/2-200
		}).animate({
			width:'400px',
			height:'400px',
			opacity:'1',
			left:'260px'
		},1000,function(){
			$('#show-txt').html(txt);
		})
	}
	$('#show-img').click(function(){
		$('.show-box,#show-img').hide(1000);
		$('#show-txt').html('');
		$('.bg-cont').css('opacity','inherit')
	});
	$(document).keydown(function(e){
		if(e.keyCode == 13){
			sendMsg();
		$('.b-txt').val('');
		}
	})
})
