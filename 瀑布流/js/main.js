window.onload=function(){
	waterfall('main','pin');
//	var dataInt = {"data":[{"src":'images/24.jpg'},{"src":'images/25.jpg'},{"src":'images/26.jpg'},{"src":'images/27.jpg'},{"src":'images/28.jpg'}]};
	window.onscroll=function(){
		if(checkscrollslide){
			var oParent = document.getElementById('main');
		  	for(var i=0;i<97;i++){
			     var oPin = document.createElement('div');
			     oPin.className = 'pin';
	             oParent.appendChild(oPin);
	             var oBox = document.createElement('div');
	             oBox.className = 'box';
	             oPin.appendChild(oBox);
	             var oImg = document.createElement('img');
	             oImg.src = 'images/'+i+'.jpg';
//	             oImg.src = dataInt.data[i].src;
	             oBox.appendChild(oImg); 
	         
		  	}
		  	waterfall('main','pin');
		}
         
	}

}
function waterfall(parent,pin){
	var oParent = document.getElementById(parent);
	var oBoxs = getByClass(oParent,pin);
//  console.log(oBoxs.length);
    var oBoxsW = oBoxs[0].offsetWidth;
    var width = document.documentElement.clientWidth;
    var count = Math.floor(width/oBoxsW);
//  console.log(oBoxs.length)
//  console.log(count);
    oParent.style.cssText='width:'+count*oBoxsW+'px;margin:0 auto';
    var harr=[];
    for(var i=0;i<oBoxs.length;i++){
    	if(i<count){
    	harr.push(oBoxs[i].offsetHeight);
        }
        else{
        	var minHeight=Math.min.apply(null,harr);
        	var num=getminHeight(harr,minHeight);
        	oBoxs[i].style.position='absolute';
        	oBoxs[i].style.top = minHeight+'px';
        	oBoxs[i].style.left = oBoxs[num].offsetLeft+'px';
        	harr[num]+=oBoxs[i].offsetHeight;
//      	console.log(harr[num])
//      	console.log(minHeight);
        }
    }
}
function getByClass(parent,pin){
	var pinArr=[];
    var list = parent.getElementsByTagName('*');
    for(var i = 0; i<list.length;i++)
    {
    	if(list[i].className == pin){
    		pinArr.push(list[i]);
    	}
    }
    return pinArr;
}
function getminHeight(harr,minHeight){
	for(var i=0;i<harr.length;i++){
		if(harr[i] == minHeight){
			return i;
		}
	}
}
function checkscrollslide(){
	var oparent = document.getElementById('main');
	var oBoxs = getByClass(oparent,'pin');
	var lastBoxs=oBoxs[oBoxs.length - 1].offsetTop + Math.floor(oBoxs[oBoxs.length -1].offsetHeight);
	var scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
	var height = document.body.clientHeight || document.documentElement.clientHeight;
	return (lastBoxs > scrollHeight + height)?true:false;
}
