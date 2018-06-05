
var 
    prevBtn = $('#swiper-button-prev'),
    nextBtn = $('#swiper-button-next'),
    swiper = $('.swiper-container');

// swiper前进后退按钮动画
swiper.mouseover(function() {
    prevBtn.css({'opacity':'1','left':'20px'});
    nextBtn.css({'opacity':'1','right':'20px'});
});
swiper.mouseout(function() {
    prevBtn.css({'opacity':'0','left':'0px'});
    nextBtn.css({'opacity':'0','right':'0px'});
});
// 数据中心左侧菜单的点击事件
// TODO
var menu1 = $('.data-center-menu1');
var menu2 = $('.data-center-menu2');
// console.log(te);

menu1.on('click',function() {
    menu2.css('display','block');
});


var
    item = $('.classify-panel-item');



for(var i=0;i<item.length;i++) {
    item[i].index = i;
    $(item[i]).on('click',function () { 
        if(this.index===0){
            window.location = 'productList.html';
        }
        if(this.index===1){
            window.location='productList.html';
        }
        if(this.index===2){
            window.location='serviceCenter.html';
        }
        if(this.index===3){
            window.location='zwl.html';
        }
        if(this.index===4){
            window.location='zjr.html';
        }
    });
}