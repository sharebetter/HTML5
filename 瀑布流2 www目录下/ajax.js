function ajax( method , url , data , success ){
	var xhr = null;	
	try{
		xhr = new XMLHttpRequest();
	}catch (e){
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	if( method == 'get' && data ) // get发送数据
	{
		url += '?'+data;
	}
	xhr.open(method,url,true); 
	if ( method == 'get' )  // get
	{
		xhr.send();
	}else{  // post
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		xhr.send(data);
	}
	xhr.onreadystatechange = function(){
		if( xhr.readyState ==4 )
		{
			if ( xhr.status == 200 )
			{
				success && success( xhr.responseText );
			}else{
				alert( '出错了，ERR:'+ xhr.status );
			}
		}
	};
};