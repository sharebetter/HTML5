var lis = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var itemBannerLis = document.querySelectorAll('.item-banner li');
var itemLis = document.querySelectorAll('.item-list span li');
var imgSrc = document.getElementById('imgSrc');
var length = itemBannerLis.length;
var item = 0, itemCount = 0, srcNum = 0;
var imgSrc = document.getElementById('imgSrc');
var wrap = document.getElementsByClassName('wrap')[0];

itemBannerLis[0].className ='active';
itemLis[0].className='active';
var t = setInterval(autoChange,2000)
 wrap.onmouseenter=function(){
 	clearInterval(t);
	for(var i=0;i<length;i++){
		itemBannerLis[i].i = i;
		itemLis[i].i = i;
		
		itemBannerLis[i].onmousemove=function(){
		    var item1 = this.i;
			change(item1,itemCount)
		}
		itemBannerLis[i].onmouseleave=function(){
			change(item,itemCount);
		}
		
		itemBannerLis[i].onclick=function(){
			item = this.i;
			change(item,itemCount);
			active(itemBannerLis,item);
	        active(itemLis,itemCount);
		}
		itemLis[i].onclick=function(){
			itemCount = this.i;
			change(item,itemCount)
	        active(itemLis,itemCount);
		}
		itemLis[i].onmousemove=function(){
			item2 = this.i;
			change(item,item2)
		}
		itemLis[i].onmouseleave=function(){
			change(item,itemCount)
		}
	}

 }

 wrap.onmouseleave=function(){
	 t = setInterval(autoChange,2000);
 }
 
	function change(Num1,Num2){
		      srcNum = Num1*4+ Num2;
	//			console.log(srcNum)
				imgSrc.src='img/'+lis[srcNum]+'.jpg'
	}
	function active(ev,num){
		for(var j=0;j<length;j++){
					if(j==num){
				       ev[j].className ='active';
					}else{
				       ev[j].className ='';		
					}
				}
	}
	function autoChange(){
		  itemCount++;
		  if(itemCount>3){
		  	itemCount=0;
		  	item++;
		  	if(item>3){
		  		item=0;
		  	}
		  }
		 change(item,itemCount);
		 active(itemLis,itemCount);
		 active(itemBannerLis,item);
	}

