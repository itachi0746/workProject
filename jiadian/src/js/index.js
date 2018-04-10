
var 
    prevBtn = $('#swiper-button-prev'),
    nextBtn = $('#swiper-button-next'),
    swiper = $('.swiper-container');

// swiper前进后退按钮动画
swiper.mouseover(function() {
    prevBtn.css({'opacity':'1','left':'20px'});
    nextBtn.css({'opacity':'1','right':'20px'});
})
swiper.mouseout(function() {
    prevBtn.css({'opacity':'0','left':'0px'});
    nextBtn.css({'opacity':'0','right':'0px'});
})

