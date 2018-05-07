// 轮播  开始
$('.carousel').carousel();
// 右侧菜单的hover事件
$(function () { 
    $(".ewm .b1").popover({
        html: true,
        content: function() {
            return k_content();
        }
    });
    $(".ewm .b2").popover({
        html: true,
        content: function() {
            return k_content2();
        }
    });
}
);
// 右侧菜单的hover要显示的内容
function k_content() {
    var data = $("<p><img class='ewm_i1' src='../Content/Company2/img/ewm_4.png'><span>广州市天河区黄埔大道中277号203</span></p><br><p><img src='../Content/Company2/img/ewm_5.png'><span>手机: +86-13929914698</span></p><br><p><img src='../Content/Company2/img/ewm_6.png'><span>邮件: service@jierutek.com</span></p>")
    return data;
}
function k_content2() {
    var data = $("<img class='' src='../Content/Company2/img/lianxiwomenerweima.png'>")
    return data;
}

var W = $(window).width();
var navLi = $('.nav-link');
var navItem = $('.nav-item');
console.log(W);
$(function() {
    // 获取屏幕宽度,如果小屏, 证书部分删除两个

    var _ctf = $('#ctf-main>div');
    // console.log(_ctf[0]);
    if(W<=768) {
        _ctf.filter(':first,:last').remove();

        // 手机端点击导航栏的事件
        for(var i=0;i<navLi.length;i++) {
            navLi[i].index = i;

            $(navLi[i]).on('click',function() {
                // console.log(navLi[i]);
                navItem.removeClass('activeItem-m');
                navList.toggleClass('db');
                for(var j=0;j<navLi.length;j++) {
                    $(navLi[j]).removeClass('activeItem-m');
                    $(navLi[this.index]).addClass('activeItem-m');
                }
            });
        };
        navItem.on('click',function() {
            navList.toggleClass('db');
            for (var k = 0; k < navLi.length; k++) {
                $(navLi[k]).removeClass('activeItem-m');
                navItem.addClass('activeItem-m');
            }
        })
    }
})



// 手机端点击按钮, 导航栏出现
var navBtn = $('.navbar-toggle');
var navList = $('.navbar-collapse');
navBtn.on('click',function () { 
    // console.log(111);
    navList.toggleClass('db');
 })



