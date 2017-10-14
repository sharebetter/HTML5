# 第二个案例：散列画廊特效（原生JavaScript）
## 新的CSS效果：
* 3D视图位置设置、子元素3D支持。perspective、transform-style:preserve-3d
* 翻转时不可见。backface-visibility:hidden
* 使用CSS旋转位置缩放。transform:translate(0px,0px) rotateY(0deg) scale(.5)
* 切换动画。transition、transform-origin  

## 脚本技巧：
* 字符串替换的简易模板功能。
* 通用函数简化频繁操作。random([x,y])、get()
* 使用脚本切换、修改、删减元素的className。 

## JavaScript:
* template.replace('{{index}}',s).replace('{{caption}}',data[s].caption).replace(...,...)
* className.replace(/\s*front\s*/g,'back');
* className.replace(/\s*photo-center\s*/,' ');
* photos_left=photos.splice(0,Math.ceil(photos.length/2));
