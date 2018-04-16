
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIFxyXG4gICAgcHJldkJ0biA9ICQoJyNzd2lwZXItYnV0dG9uLXByZXYnKSxcclxuICAgIG5leHRCdG4gPSAkKCcjc3dpcGVyLWJ1dHRvbi1uZXh0JyksXHJcbiAgICBzd2lwZXIgPSAkKCcuc3dpcGVyLWNvbnRhaW5lcicpO1xyXG5cclxuLy8gc3dpcGVy5YmN6L+b5ZCO6YCA5oyJ6ZKu5Yqo55S7XHJcbnN3aXBlci5tb3VzZW92ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICBwcmV2QnRuLmNzcyh7J29wYWNpdHknOicxJywnbGVmdCc6JzIwcHgnfSk7XHJcbiAgICBuZXh0QnRuLmNzcyh7J29wYWNpdHknOicxJywncmlnaHQnOicyMHB4J30pO1xyXG59KVxyXG5zd2lwZXIubW91c2VvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICBwcmV2QnRuLmNzcyh7J29wYWNpdHknOicwJywnbGVmdCc6JzBweCd9KTtcclxuICAgIG5leHRCdG4uY3NzKHsnb3BhY2l0eSc6JzAnLCdyaWdodCc6JzBweCd9KTtcclxufSlcclxuXHJcbiJdLCJmaWxlIjoianMvaW5kZXguanMifQ==
