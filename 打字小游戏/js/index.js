/**
 * Created by HM on 2017/5/12.
 */
var chart = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var flag = true;
var time = 1;
var score = 0;
var width = window.screen.width-80;
$(function(){
	$('#start').click(function(){
		if(time==1){
		 window.setInterval(rand,1000);
		 window.setInterval(drow,2000);
		 time=2;
		}
		flag = true;
		$(document).keyup(function(ev){
			var e = window.event || ev;
			keydown(e);
		});
		$('#flieOrSuccess').click(function(){
			location.reload();
		});
		$('#stop').click(function(){
			flag=false;
		});
		$('#increase').click(function(){
		 window.setInterval(rand,1000);
		 window.setInterval(drow,2000);
		})
	});
	
	function rand(){
		if(flag){
			var random = Math.floor(Math.random()*26);
			var left = Math.floor(Math.random()*width);
			var img = chart[random];
	        $('.game').append('<img src="" alt="A"/>');
	        $('.game img').eq($(this).index()).attr('src','img/'+img+'.png')
	        .show().css({
	        	width:'100px',
	        	height:'100px',
	        	left:left+'px',
	        	top:'-50px',
	        })
	        drow()
	    }
	}
	function drow(){
		if(flag){
			var imgs = $('#game img');
//			console.log(imgs.length)
            for(var i=0;i<imgs.length;i++){
            	var img = imgs[i];
            	if(img.nodeType == 1){
            		var top = parseInt(img.style.top);
            		if(top<600){
            			img.style.top = top+30+'px';
            		}else{
            			score-=10;
            			img.remove();
            			$('#score').html(score);
            			if(score<=-100){
            				$('#flieOrSuccess').fadeIn(1000);
            				flag =false;
            			}
            		}
            	}
            }
		}
	}
	function keydown(ev){
		var event = window.event || ev;
		var code = event.keyCode;
		var imgs = $('#game img');
		 for(var i=0;i<imgs.length;i++){
            	var img = imgs[i];
            	if(img.nodeType == 1){
                  var imgsrc = img.src.split('/');
                  var name = imgsrc[imgsrc.length -1].split('.')[0];
//                 console.log('aaa22')    
              	  if(name == chart[code-65]){
//            	  	console.log('aaaa')
              	  	img.remove();
              	  	score+=10;
              	  	$('#score').html(score);
              	  }
                }
           }
	}
})
