var i = 0;
var oWord = document.getElementById('w').innerHTML;

function type(){
    i++;
    if(i>=200){
      i=0;
    }
    document.getElementById('aa').innerHTML = oWord.substring(0,i);
}
setInterval(type,200);
var oItem = document.getElementById('item');
function item(){
	var data = '2016/03/11 12:00:01';
	var data2 = new Date();
	var data3 = data2.getTime()- new Date(data).getTime();
    var leave1 = data3%(24*3600*1000); 
    var days = Math.floor(data3/(24*3600*1000));
    var hours = Math.floor(leave1/(3600*1000));
    var leave2 = leave1%(3600*1000);
    var minute = Math.floor(leave2 / (60*1000));
    var leave3 = leave2%(60*1000);
    var seconds = Math.round(leave3 / 1000);
    oItem.innerHTML = ('一路陪伴至今我们相识至今已经'+days+'天'+hours+'小时'+minute+'分'+seconds+'秒');
}
setInterval(item,1000);
