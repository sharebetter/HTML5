var text = document.querySelector('#text');
var btn = document.querySelectorAll('.btn');
var text1 = document.querySelector('#input1');
var text2 = document.querySelector('#input2');
var cont = document.querySelector('.cont').innerHTML;
var content=cont,
    flage=0;
    var t=setInterval(setContent,40);
	btn[0].onclick=function(){
		text.innerHTML=content;
		var input = text1.value;
		if(input!=''){
		 change(input,input);
	    }
	}
    btn[1].onclick=function(){
		var input = text1.value;
		var input2 = text2.value;
	   if(input!='' && input2!=''){
          change(input,input2)
      }
	}
    
function change(input,input2){
	var arr=[];
	var contentChange ='';
	for(var j=0;j<content.length;){
	      flage=content.indexOf(input,j);
	      if(flage!=-1){
	      	arr.push(flage);
	      	j=flage+1;
	      }
	      else{
	     	j++;
	      }
	   }
	if(arr.length!=0){
      text.innerHTML='';
	  var a=0,b=arr[0];
	  for(var k=0;k<arr.length;k++){
        text.innerHTML=(text.innerHTML+content.substring(a,b));
        contentChange = (contentChange+content.substring(a,b));
        text.innerHTML=(text.innerHTML+'<a>'+input2+'</a>');
        contentChange=(contentChange+input2);
        a=b+input.length;
        b=arr[k+1];
	  }
	   contentChange = (contentChange+content.substring(a,content.length));
	   text.innerHTML=(text.innerHTML+content.substring(a,content.length));
	  if(input!=input2){
	   	content=contentChange;
	  }
	}
}
var k=0;
function setContent(){
	k++;
	text.innerHTML = cont.substring(0,k);
	if(k>cont.length){
		clearInterval(t)
	}
}
