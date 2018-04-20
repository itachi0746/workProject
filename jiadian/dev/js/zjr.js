
var 
    prevBtn = $('#swiper-button-prev'),
    nextBtn = $('#swiper-button-next'),
    swiper = $('.swiper-container');

// swiper前进后退按钮动画
prevBtn.css({'opacity':'1','left':'20px'});
	swiper.mouseover(function() {
	nextBtn.css({'opacity':'1','right':'20px'});
})
swiper.mouseout(function() {
	prevBtn.css({'opacity':'0','left':'0px'});
	nextBtn.css({'opacity':'0','right':'0px'});
})


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqcy96anIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBcclxuICAgIHByZXZCdG4gPSAkKCcjc3dpcGVyLWJ1dHRvbi1wcmV2JyksXHJcbiAgICBuZXh0QnRuID0gJCgnI3N3aXBlci1idXR0b24tbmV4dCcpLFxyXG4gICAgc3dpcGVyID0gJCgnLnN3aXBlci1jb250YWluZXInKTtcclxuXHJcbi8vIHN3aXBlcuWJjei/m+WQjumAgOaMiemSruWKqOeUu1xyXG5wcmV2QnRuLmNzcyh7J29wYWNpdHknOicxJywnbGVmdCc6JzIwcHgnfSk7XHJcblx0c3dpcGVyLm1vdXNlb3ZlcihmdW5jdGlvbigpIHtcclxuXHRuZXh0QnRuLmNzcyh7J29wYWNpdHknOicxJywncmlnaHQnOicyMHB4J30pO1xyXG59KVxyXG5zd2lwZXIubW91c2VvdXQoZnVuY3Rpb24oKSB7XHJcblx0cHJldkJ0bi5jc3MoeydvcGFjaXR5JzonMCcsJ2xlZnQnOicwcHgnfSk7XHJcblx0bmV4dEJ0bi5jc3MoeydvcGFjaXR5JzonMCcsJ3JpZ2h0JzonMHB4J30pO1xyXG59KVxyXG5cclxuIl0sImZpbGUiOiJqcy96anIuanMifQ==
