

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
    honerPage();
}
);

// 获取屏幕宽度
var W = $(window).width();
var navLi = $('.nav-link');
var navItem = $('.nav-item');
var _vw = $('.vw');
// console.log(W);
$(function() {
    // 如果小屏, 证书部分删除两个

    // 如果是手机
    if(W<=768) {
        // 删两个证书
        ctfGroup.children().filter(':first,:last').remove();
        ctfGroup2.children().filter(':first,:last').remove();
        // 导航的首页加个active类
        $(navLi[0]).addClass('activeItem-m');
        // 手机端点击导航栏的事件
        for(var i=0;i<navLi.length;i++) {
            navLi[i].index = i;

            $(navLi[i]).on('click',function() {
                // console.log(navLi[i]);
                // navItem.removeClass('activeItem-m');
                navList.toggleClass('db');
                for(var j=0;j<navLi.length;j++) {
                    $(navLi[j]).removeClass('activeItem-m');
                    $(navLi[this.index]).addClass('activeItem-m');
                }
            });
        }
        // navItem.on('click',function() {
        //     navList.toggleClass('db');
        //     for (var k = 0; k < navLi.length; k++) {
        //         $(navLi[k]).removeClass('activeItem-m');
        //         navItem.addClass('activeItem-m');
        //     }
        // })
    }
    // 如果是电脑
    else {
        // 导航的首页加个active类
        $(navLi[0]).addClass('activeItem');
    }
});
// 右侧菜单的hover要显示的内容
function k_content() {
    var data = $("<p><img class='ewm_i1' src='../Content/Company2/img/ewm_4.png'><span>广州市天河区黄埔大道中277号203</span></p><br><p><img src='../Content/Company2/img/ewm_5.png'><span>手机: +86-13929914698</span></p><br><p><img src='../Content/Company2/img/ewm_6.png'><span>邮件: service@jierutek.com</span></p>");
    return data;
}
function k_content2() {
    var data = $("<img class='' src='../Content/Company2/img/lianxiwomenerweima.png'>");
    return data;
}


// 手机端点击按钮, 导航栏出现
var navBtn = $('.navbar-toggle');
var navList = $('.navbar-collapse');
navBtn.on('click',function () { 
    // console.log(111);
    navList.toggleClass('db');
 });


var ctfBtn = $('.btn.icon-btn');
var ctfBtn2 = $('.btn.icon-btn2');
var ctfMain = $('.rowWp');
var ctfGroup = $('#row1');
var ctfGroup2 = $('#row2');
// ctfGroup2.html(ctfGroup.html());
// console.log(ctfBtn,ctfBtn2);
// 距离
var dis = 0;

// 点击移动证书
ctfBtn.on('click',function() {

    if(dis<= -ctfGroup.width()) {
        return;
    } else {
        ctfBtn2.removeClass('disabled');

        var itemW = $(ctfGroup.children()).width();
        var itemP = $(ctfGroup.children()).css('padding-left');
        dis -= (itemW + parseInt(itemP) * 2);
        // console.log(dis);
        
        ctfMain.css('left',dis);

        if(dis<= -ctfGroup.width()) {
            $(this).addClass('disabled');

        }
    }
});
ctfBtn2.on('click',function() {
    
    if(dis>= 0) {
        
        return;
    }else {
        ctfBtn.removeClass('disabled');
        var itemW = $(ctfGroup.children()).width();
        var itemP = $(ctfGroup.children()).css('padding-left');
        dis += (itemW + parseInt(itemP) * 2);
        console.log(dis);
        
        ctfMain.css('left',dis);
        if(dis>=0) {
            $(this).addClass('disabled');

        }
    }
});

// 证书的点击跳转
var ctfOne = ctfGroup.children();
var ctfTwo = ctfGroup2.children();
for(var i=0;i<ctfOne.length;i++) {

    $(ctfOne[i]).on('click',function() {
        window.location = './View/honer.html';
    });
    $(ctfTwo[i]).on('click',function() {
        window.location = './View/honer.html';
    });
}


// console.log(ctfList);

function honerPage() {
    var honerList = $('.ctf-list');
    var ctfBig = $('.row.ctf-big');
    var ctfList = honerList.children();
    console.log(ctfList);
    // 点击放大证书
    for(var i=0;i<ctfList.length;i++) {
        $(ctfList).on('click',function() {
            console.log(222222222);
            honerList.css('display','none');
            ctfBig.css('display','block');
        });
    };
    // ctfBig.on('click',function() {
    //     ctfBig.css('display','none');
    //     honerList.css('display','block');
    // });

    var honerBtn = $('.honer button');
    // console.log(honerList);
    for(var j=0;j<honerBtn.length;j++) {
        // 这个自定义属性不用转对象
        honerBtn[j].index = j;
        // console.log()
		$(honerBtn[j]).on('click', function() {
            
            for(var k=0;k<honerList.length;k++) {
                $(honerList[k]).css('display','none');
            }
            // console.log(this);
            $(honerList[this.index]).css('display','block');

		});
	}
}