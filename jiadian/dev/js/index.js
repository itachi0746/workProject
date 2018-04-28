
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
    })
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIFxyXG4gICAgcHJldkJ0biA9ICQoJyNzd2lwZXItYnV0dG9uLXByZXYnKSxcclxuICAgIG5leHRCdG4gPSAkKCcjc3dpcGVyLWJ1dHRvbi1uZXh0JyksXHJcbiAgICBzd2lwZXIgPSAkKCcuc3dpcGVyLWNvbnRhaW5lcicpO1xyXG5cclxuLy8gc3dpcGVy5YmN6L+b5ZCO6YCA5oyJ6ZKu5Yqo55S7XHJcbnN3aXBlci5tb3VzZW92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICBwcmV2QnRuLmNzcyh7J29wYWNpdHknOicxJywnbGVmdCc6JzIwcHgnfSk7XHJcbiAgICBuZXh0QnRuLmNzcyh7J29wYWNpdHknOicxJywncmlnaHQnOicyMHB4J30pO1xyXG59KVxyXG5zd2lwZXIubW91c2VvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICBwcmV2QnRuLmNzcyh7J29wYWNpdHknOicwJywnbGVmdCc6JzBweCd9KTtcclxuICAgIG5leHRCdG4uY3NzKHsnb3BhY2l0eSc6JzAnLCdyaWdodCc6JzBweCd9KTtcclxufSlcclxuXHJcbnZhclxyXG4gICAgaXRlbSA9ICQoJy5jbGFzc2lmeS1wYW5lbC1pdGVtJyk7XHJcblxyXG5cclxuXHJcbmZvcih2YXIgaT0wO2k8aXRlbS5sZW5ndGg7aSsrKSB7XHJcbiAgICBpdGVtW2ldLmluZGV4ID0gaTtcclxuICAgICQoaXRlbVtpXSkub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7IFxyXG4gICAgICAgIGlmKHRoaXMuaW5kZXg9PT0wKXtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJ3Byb2R1Y3RMaXN0Lmh0bWwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmluZGV4PT09MSl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbj0ncHJvZHVjdExpc3QuaHRtbCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuaW5kZXg9PT0yKXtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uPSdzZXJ2aWNlQ2VudGVyLmh0bWwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmluZGV4PT09Myl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbj0nendsLmh0bWwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmluZGV4PT09NCl7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbj0nempyLmh0bWwnO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iXSwiZmlsZSI6ImpzL2luZGV4LmpzIn0=
