$(function(){
//	alert($)
	var oSize = $('.sxt-banner li').length;
	var oBannerMenuHtml='';
	for(var i = 0 ;i < oSize;i++){
		oBannerMenuHtml += '<li></li>';
	}
	$('.sxt-banner-menu').append(oBannerMenuHtml);
	$('.sxt-banner-menu li').eq(0).addClass('sxt-menu-active');
	$('.sxt-banner-menu li').mousemove(function(){
	  $(this).addClass('sxt-menu-active').siblings().removeClass('sxt-menu-active');
	  $('.sxt-banner').stop().animate({left:''+-$(this).index()*100+'%'},600)
   })
	var oClone = $('.sxt-banner li').eq(0).clone();
	$('.sxt-banner').append(oClone);
	var i = 0 ;
	$('.last').click(function(){
//		console.log(123);
		last();
	})
   function last(){
   	i--;
   	if(i == -1){
   		$('.sxt-banner').css({left:''+-oSize*100+'%'},600);
   		i=oSize-1;
   	}
    $('.sxt-banner').stop().animate({left:'-'+i*100+'%'});
    $('.sxt-banner-menu li').eq(i).addClass('sxt-menu-active').siblings().removeClass('sxt-menu-active');
   }
    $('.next').click(function(){
//		console.log(123);
		item();
	})
    function item(){
   	i++;
   	if(i == oSize+1){
   		$('.sxt-banner').css({left:0});
   		i = 1;
   	}
   $('.sxt-banner').stop().animate({left:'-'+i*100+'%'},600);
   if(i == oSize){
   	  $('.sxt-banner-menu li').eq(0).addClass('sxt-menu-active').siblings().removeClass('sxt-menu-active');
   }else{
   	 $('.sxt-banner-menu li').eq(i).addClass('sxt-menu-active').siblings().removeClass('sxt-menu-active');
   }
  }
    var t =setInterval(item,3000);
    $('.sxt-wrapper').hover(function(){
    	clearInterval(t);
    	$('.last').css({left:0});
//  	$('.last').css('left','0px');两种方法
    	$('.next').css({right:0});
    },function(){
    	t =setInterval(item,3000);
    	$('.last').css({left:-55});
    	$('.next').css({right:-55});
    })
})