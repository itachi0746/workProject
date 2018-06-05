
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
    panelItem = $('.classify-panel-item');
    panelHead = $('.jdl-header-panel');
    classifyPanel = $('.classify-panel');

panelHead.hover(
    function () {  
        classifyPanel.css('display','block');
    },
    function () {  
        classifyPanel.css('display','none');
    }
)
    
for(var i=0;i<panelItem.length;i++) {
    panelItem[i].index = i;
    $(panelItem[i]).on('click',function () { 
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