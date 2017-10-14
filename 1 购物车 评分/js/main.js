$(function(){
	var i = 0,
	    flag1 = 0,flag2=0,flag3=0,flag4=0;
	$('#btn1').click(function(){
	    i = $('#spend1').html();
	    if(i==0){i=0;flag1=0}
	    else{
	    	i--;
	    	flag1=1;
	    	if(i==0){flag1=0;}
			$('#con1 li').eq(3).html(i*99);
	    }
	   	$('#spend1').html(i);
	   	Count();
	})
	$('#btn2').click(function(){
		flag1=1;
	    i = $('#spend1').html();
			i++;
		$('#spend1').html(i);
	    $('#con1 li').eq(3).html(i*99);
	    Count();
	})
	$('#btn3').click(function(){
	    i = $('#spend2').html();
	    if(i==0){i=0;flag2=0;}
	    else{
	    	i--;
	    	flag2=1;
	    	if(i==0){flag2=0;}
			$('#con2 li').eq(3).html(i*45.5);
	    }
	   	$('#spend2').html(i);
	   	Count();
	})
	$('#btn4').click(function(){
		flag2=1;
	    i = $('#spend2').html();
			i++;
		$('#spend2').html(i);
	    $('#con2 li').eq(3).html(i*45.5);
	    Count();
	})
	$('#btn5').click(function(){
	    i = $('#spend3').html();
	    if(i==0){i=0;flag3=0}
	    else{
	    	i--;
	    	flag3=1;
	    	if(i==0){flag3=0;}
			$('#con3 li').eq(3).html(i*199);
	    }
	   	$('#spend3').html(i);
	   	Count();
	})
	$('#btn6').click(function(){
		flag3=1;
	    i = $('#spend3').html();
			i++;
		$('#spend3').html(i);
	    $('#con3 li').eq(3).html(i*199);
	    Count();
	})
	$('#btn7').click(function(){
	   i = $('#spend4').html();
	    if(i==0){flag4=0;i=0}
	    else{
	    	i--;
	    	flag4=1;
	    	if(i==0){flag4=0;}
			$('#con4 li').eq(3).html(i*199);
	    }
	   	$('#spend4').html(i);
	   	Count();
	})
	$('#btn8').click(function(){
		flag4=1;
	    i = $('#spend4').html();
			i++;
		$('#spend4').html(i);
	    $('#con4 li').eq(3).html(i*299);
	    Count();
	})
	
	function Count(){
		var a = parseFloat($('#con1 li').eq(3).html()),
		    b = parseFloat($('#con2 li').eq(3).html()), 
		    c = parseFloat($('#con3 li').eq(3).html()),
		    d = parseFloat($('#con4 li').eq(3).html());
//		    var number = flag1 + flag2 + flag3 + flag4;
		    var coun =a+b+c+d;
		    a = parseFloat($('#spend1').html());
		    b = parseFloat($('#spend2').html()); 
		    c = parseFloat($('#spend3').html());
		    d = parseFloat($('#spend4').html());
		    var number = a+b+c+d;
//		    console.log(coun,a,b,c,d)
		    $('#money a').html(coun);
		    $('#number a').html(number);
	}
	
//	评论
     var lis = $('.vealute ul li'),
         fl = 0,
         suggestion = ['差!！！','一般般','好。。','很好！','力荐！！！'];
　　　　     lis.mousemove(function(){
//	      console.log(23333)
　　　　　　  var num = $(this).index();
         if(fl<num){
            fl =num;
　　　　　　   for(i=0;i<num;i++){
　　　　　　　　  $('.vealute ul li').eq(i).children().addClass('img');
             $('.vealute .suggest').html(suggestion[i]);
　　　　　　   }
　　　　     }
        else if(num<fl){
	      for(i=num;i<fl;i++){
　　　　　　　　$('.vealute ul li').eq(i).children().removeClass('img');
           $('.vealute .suggest').html(suggestion[i-1]);
　　　　　　   }
	      fl=num;
        }
//      console.log(num)
      })
　　
})
