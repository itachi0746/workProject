
$('.carousel').carousel();

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

var W = document.documentElement.clientWidth;
$(function() {
    // 获取屏幕宽度,如果小屏, 证书部分删除两个

    var _ctf = $('#ctf-main>div');
    console.log(_ctf[0]);
    if(W<=768) {
        _ctf.filter(':first,:last').remove();


        for(var i=0;i<navLi.length;i++) {
            $(navLi[i]).on('click',function() {
                navList.toggleClass('db');
            })
        };
    }
})

function k_content() {
    var data = $("<p><img class='ewm_i1' src='../Content/Company2/img/ewm_4.png'><span>广州市天河区黄埔大道中277号203</span></p><br><p><img src='../Content/Company2/img/ewm_5.png'><span>手机: +86-13929914698</span></p><br><p><img src='../Content/Company2/img/ewm_6.png'><span>邮件: service@jierutek.com</span></p>")
    return data;
}
function k_content2() {
    var data = $("<img class='' src='../Content/Company2/img/lianxiwomenerweima.png'>")
    return data;
}


// 手机端点击按钮, 导航栏出现
var navBtn = $('.navbar-toggle');
var navList = $('.navbar-collapse');
navBtn.on('click',function () { 
    // console.log(111);
    navList.toggleClass('db');
 })
//  console.log(navList.children().children());
 var navLi = navList.children().children();



