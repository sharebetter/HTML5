(function(){
  var $tab=$('#banner .b-tab ul li'),
      $part=$('#banner .b-part .part'),
      $banner=$('#banner')
      length=$tab.length
      index=0
      timer=null
  //初始化
  $tab.eq(0).addClass('on')
  $part.eq(0).show()
  
  //点击切换图片
  $tab.click(function(){
    change(function(){
      index=$(this).index()
    }.bind(this))
  })
  
  auto()
  $banner.hover(function(){
    clearInterval(timer)
  },auto)
  function auto(){
    timer=setInterval(function(){
      change(function(){
        index++;
        index%=length
      })
    },3000)
  }
  
  function change(fn){
    $part.eq(index).fadeOut()
    $tab.eq(index).removeClass('on')
    fn&&fn()
    $part.eq(index).fadeIn()
    $tab.eq(index).addClass('on')
  }
})();

//经典案例
(function(){
  var $ul=$('#classic .c-main ul'),
      $li=$ul.children(),
      $btn=$('#classic .btn div'),
      width=$ul.children().eq(0).width(),
      length=$li.length,
      midIndex=Math.floor(length/2),
      clickTimer=0,
      sumWidth=0
      changeClassName()
      setTimeout(function(){
        $li.each(function(){
          sumWidth+=$(this).width()
          console.log(sumWidth)
        })        
        $ul.css('marginLeft',-sumWidth/2+'px').css('opacity',1)
      },300)
      $(window).resize(function(){	       	
	       	    clearTimeout(timer);
	       	    timer=setTimeout(function(){
	       	    	sumWidth=0;
	       	        width=$li.eq(0).width(); 
		       		$li.each(function(i){
			       		sumWidth+=$li.eq(i).width();
		       	   })	
		       	    $ul.css({'margin-left':-(sumWidth/2)+'px'})	       					       	    
	       	    },300)
      })
      $btn.click(function(){
        if(new Date()-clickTimer>350){
          if($(this).index()){
            midIndex++
            midIndex%=length
            $ul.stop().animate({
              'marginLeft':-sumWidth/2-width+'px'
            },10,function(){
              $(this).css('marginLeft',-sumWidth/2+'px').append($(this).children().first())
            })
          }else{
             midIndex--;
            if(midIndex<0)midIndex=length-1;
            $ul.stop().animate({
              'marginLeft':-sumWidth/2-width+'px'
            },10,function(){
              $(this).css('marginLeft',-sumWidth/2+'px').prepend($(this).children().last())
            })
          }
          changeClassName()
          clickTimer=new Date()
        }
      })
  function changeClassName(){
    var a=midIndex,
        b=midIndex+1,
        c=midIndex-1;
    if(b>=length)b=0;
    if(c<0)c=length-1;
    $li.removeClass('mid slide')
    $li.eq(a).addClass('mid')
    $li.eq(b).addClass('slide')
    $li.eq(c).addClass('slide')
  }
})()
