//1 歌曲列表
var str='';
var n=0;
var len=data.length
for(var i=0;i<data.length;i++){
  str+='<p><span>'+data[i].name+'</span>'+data[i].singer+'<span></span></p>'
}
m_list.innerHTML=str;
//2 点击播放列表
var aP=m_list.getElementsByTagName('p');
for(var i=0;i<aP.length;i++){
  aP[i].index=i;
  aP[i].love='love1';//灰色的红心
  aP[i].mark='circle0';//灰色的小圆点
  aP[i].icon=false
  aP[i].onclick=function(){
   n=this.index
   playing()
   picChange();   
  }
}
//3.点击收藏
collect.onclick = function(){
  if( !aP[n].icon )  // 添加红心 收藏
  {
    aP[n].love = 'love0'; //红心
    aP[n].mark = 'circle1';
  }else{
    aP[n].love = 'love1'; //灰色的红心
    aP[n].mark = 'circle0';
  };
  love( aP[n].love ,aP[n].mark )
  aP[n].icon = !aP[n].icon;
};

//4、点击播放按钮
var onOff=true
var singerImg=singer.getElementsByTagName('img')[0]
play.onclick=function(){
  if(onOff){
    audio.play()
    this.style.backgroundImage='url(images/pause.png)'
    singerImg.className='rotate'
    aP[n].style.color='#fff'
    aP[n].style.backgroundColor='rgb(139,143,135)'
  }else{
    audio.pause()
    this.style.backgroundImage='url(images/play.png)'
    singerImg.className='';
    aP[n].style.color='';
    aP[n].style.backgroundColor='';
  }
  allTime.innerHTML=time(audio.duration);
  picChange();  
  onOff=!onOff
}

//5、左右按钮
prev.onclick=function(){
  n--
  if(n<0){
    n=len-1
  }
  playing()
  picChange();
}
next.onclick=function(){
  n++
  if(n==len){
    n=0
  }
   playing()
  picChange();   
}


//6、开始播放时间

audio.addEventListener(
'timeupdate',
 function(){
    nowTime()
 }
);

//7、设置总时间
function load(){
  audio.addEventListener(
    'canplay',
    function(){
      allTime.innerHTML=time(audio.duration)
    }
  )
}

//8、歌词同步
var txt=data[0].lrc
console.log(txt)
currentLrc()
function currentLrc(){
  var LrcArr=txt.split('[');
  var str=''
  for(var i=0;i<LrcArr.length;i++){
    var arr=LrcArr[i].split(']')
    //console.log(arr)
    var time=arr[0].split('.')
    var timer=time[0].split(':')
    var ms=timer[0]*60+timer[1]*1
    var text=arr[1]
    if(text){
      //把歌词放到歌词列表里面
      str+='<p id="gc'+ms+'">'+text+'</p>'
    }
  }
  //console.log(arr)
  
  lrcCon.innerHTML=str;
  
  var curTime=0;
  var sum=0
  var p=lrcCon.getElementsByTagName('p')
  
  audio.addEventListener(
    'timeupdate',//在音频 播放位置发生改变的时候触发
    function(){
      curTime=parseInt(this.currentTime)
      if(document.getElementById('gc'+curTime)){
        for(var i=0;i<p.length;i++){
          p[i].style.cssText='color: #fff; font-size: 14px;'
        }
        document.getElementById('gc'+curTime).style.cssText='color: green; font-size: 16px;font-weight: 600;'
        if(p[sum+8]&&p[sum+8].id=='gc'+curTime){
          lrcCon.style.marginTop=-25*sum+'px'
          sum++
        }
       
      }
    }
  )
}


//获取当前的时间
function nowTime(){
  curTime.innerHTML=time(audio.currentTime);
  var scale=audio.currentTime/audio.duration//当前时间除以总时间
  processBar.style.width=scale*(proBar.offsetWidth)+'px'  //宽度=比例值*总宽度
}

//时间格式转换
function time(changeTime){//
  changeTime=parseInt(changeTime)
  var m=zero(Math.floor(changeTime%3600/60)) //分
  var s=zero(Math.floor(changeTime%60)) //秒
  return m+':'+s
}
//个位数补0
function zero(num){
  if(num<10){
    return '0'+num
  }else{
    return ''+num
  }
}
function playing(){
  audio.src=data[n].src
  audio.play()
  nowTime()
  load()
  txt=data[n].lrc
  currentLrc()
  onOff=false
  play.style.backgroundImage='url(images/pause.png)'
  //根据P标签自身的自定义属性是否添加收藏
  love(aP[n].love,aP[n].mark)
  for(var i=0;i<len;i++){
    aP[i].style.color=''
    aP[i].style.backgroundColor=''
  }
  aP[n].style.color='#fff'
  aP[n].style.backgroundColor='rgb(139,143,135)'
}

function love(s1,s2){
  collect.style.backgroundImage='url(images/'+s1+'.png)'
  aP[n].style.backgroundImage='url(images/'+s2+'.png)'
}
//音量控制
var dis=0;
mutePro.onmousedown=function(e){
	var x1=e.clientX;
	muteBtn.onmousemove=function(e){
		var x2=e.clientX;
	  dis=x2-x1;
		if(dis>0 && muteBar.offsetWidth<40){
			var wid=muteBar.offsetWidth+1;			
			audio.volume=audio.volume+0.04>=1?1:audio.volume+0.04;
		}else if(dis<0 && muteBar.offsetWidth>0){
			var wid=muteBar.offsetWidth-1;
			audio.volume=audio.volume-0.04<=0?0:audio.volume-0.04;			
		}
		muteBar.style.width=wid+'px';
	}
	console.log(audio.volume)
}
mutePro.onmouseup=function(){
//	muteBtn.onmousedown=null;
 dis=0;
	muteBtn.onmousemove=null;
}
muteBtn.onmouseleave=function(){
	muteBtn.onmousemove=null;
	
}
m_mute.onclick=function(){
	audio.volume=0;
		muteBar.style.width=0+'px';
}
//进度控制
proBar.onmousedown=function(e){
	e = e || window.event;
	var x1=e.clientX;	
	processBtn.onmousemove=function(e){
		e = e || window.event;
		var x2=e.clientX;
	  dis=x2-x1;
		if(dis>0 && processBar.offsetWidth<200){
			var wid= processBar.offsetWidth+1;						
		}else if(dis<0 && processBar.offsetWidth>0){
			var wid= processBar.offsetWidth-1;										
		}
		processBar.style.width=wid+'px';
		var scale2=parseFloat(processBar.offsetWidth/proBar.offsetWidth);
		audio.currentTime=audio.duration*scale2;
	}
}
//进度跳转
proBar.onmouseup=function(){
//	muteBtn.onmousedown=null;
  dis=0;
	processBtn.onmousemove=null;
}
processBtn.onmouseleave=function(){
	processBtn.onmousemove=null;
	
}
proBar.onclick=function(e){
    e=e||window.event;
    var dis=e.clientX-music.offsetLeft-proBar.offsetLeft;
    processBar.style.width=dis+'px';
    var scale2=parseFloat(processBar.offsetWidth/proBar.offsetWidth);
		audio.currentTime=audio.duration*scale2;
}
//内容更换
function picChange(){
	m_gm.innerHTML=data[n].name;
	m_singer.innerText=data[n].singer;
	album.innerText=data[n].album;
	singerImg.src=data[n].star
}
