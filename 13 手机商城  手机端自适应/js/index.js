window.onload=function(){
  //大轮播图
  var mySwiper1=new Swiper('.swiper-container1',{
    autoplay: 1000,//可选选项  自动滑动
    speed:500,//slide 运动速度
    autoplayDisableOnInteraction : false,//用户操作swiper之后，是否禁止autoplay。默认为true：停止。
    pagination : '.swiper-pagination',
    paginationElement : 'li',//设定分页器指示器（小点）的HTML标签。
    loop : true,
  })
  //头条
  var mySwiper2=new Swiper('.swiper-container2',{
    autoplay: 1000,
    direction : 'vertical',
    loop : true,
  })
}
