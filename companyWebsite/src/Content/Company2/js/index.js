

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
    honerPart();
}
);

// 获取屏幕宽度
var W = $(window).width();
var navLi = $('.nav-link');
var navItem = $('.nav-item');
var _vw = $('.vw');

// 导航栏-资质荣誉
var linkH = $('[href="#honer"]');
// 不是资质荣誉的部分
var notHoner = $('section.box');
// 资质荣誉的部分
var isHoner = $('#honer');
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
                // 导航栏消失
                navList.toggleClass('db');
                for(var j=0;j<navLi.length;j++) {
                    $(navLi[j]).removeClass('activeItem-m');
                    $(navLi[this.index]).addClass('activeItem-m');
                };

                if(this.index===6) {
                    // 导航栏-资质荣誉的点击,其他消失,只显示资质荣誉部分
                    for(var k=0;k<notHoner.length;k++) {
                        $(notHoner[k]).css('display','none');
                    };
                    isHoner.css('display','block');
                } else {
                    // 其他的点击
                    for(var k=0;k<notHoner.length;k++) {
                        $(notHoner[k]).css('display','block');
                    };
                    isHoner.css('display','none');  
                }
            });
        }

    }
    // 如果是电脑
    else {
        // 导航的首页加个active类
        $(navLi[0]).addClass('activeItem');

        // for(var j=0;j<navLi.length;j++) {
        //     $(navLi[j]).hover(
        //         function () {  
        //             this.addClass('nav-link-hover');
        //         },
        //         function () {  
        //             this.removeClass('nav-link-hover');
        //         }
        //     )
        // };

        for(var i=0;i<navLi.length;i++) {
            navLi[i].index = i;

            // 导航的hover事件
            $(navLi[i]).hover(
                function () {  
                    $(this).addClass('nav-link-hover');
                },
                function () {  
                    $(this).removeClass('nav-link-hover');
                }
            )

            $(navLi[i]).on('click',function() {


                if(this.index===6) {
                    // 导航栏-资质荣誉的点击,其他消失,只显示资质荣誉部分
                    for(var k=0;k<notHoner.length;k++) {
                        $(notHoner[k]).css('display','none');
                    };
                    isHoner.css('display','block');
                } else {
                    // 其他的点击
                    for(var k=0;k<notHoner.length;k++) {
                        $(notHoner[k]).css('display','block');
                    };
                    isHoner.css('display','none');  
                }
            });
        };
    }


    // 导航栏-资质荣誉的点击
    linkH.on('click',function () {  
        
        for(var k=0;k<notHoner.length;k++) {
            $(notHoner[k]).css('display','none');
        };
        isHoner.css('display','block');
    })
});
// 右侧菜单的hover要显示的内容
function k_content() {
    var data = $("<p><img class='ewm_i1' src='../../Content/Company2/img/ewm_4.png'><span>广州市天河区黄埔大道中277号203</span></p><br><p><img src='../../Content/Company2/img/ewm_5.png'><span>手机: +86-13929914698</span></p><br><p><img src='../../Content/Company2/img/ewm_6.png'><span>邮件: service@jierutek.com</span></p>");
    return data;
}
function k_content2() {
    var data = $("<img class='' src='../../Content/Company2/img/lianxiwomenerweima.png'>");
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

// 证书的点击
var ctfOne = ctfGroup.children();
var ctfTwo = ctfGroup2.children();
// 证书特写
var ctfBig = $('.ctf-big');

for(var i=0;i<ctfOne.length;i++) {

    ctfOne[i].index = i;
    $(ctfOne[i]).on('click',function() {
        // 小图src
        var _targetSrc = $(ctfOne[this.index]).find('.img-responsive').get(0).src;
        // 大图src
        // var _targetBigSrc = ctfBig.find('.img-responsive').get(0).src;
        // 其他消失,只显示资质荣誉部分
        for(var k=0;k<notHoner.length;k++) {
            $(notHoner[k]).css('display','none');
        };
        isHoner.css('display','block');    
        // TODO 改变图片地址, 改为大图的地址..
        ctfBig.find('.img-responsive').get(0).src = _targetSrc;

        ctfBig.css('display','block');
    });

//     ctfTwo[i].index = i;
//     $(ctfTwo[i]).on('click',function() {
//         window.location = './View/honer.html';
//     });
}



function honerPart() {
    var ctfListWp =  $('.ctf-list-wp');
    var honerList = $('.ctf-list');
    var ctfBig = $('.row.ctf-big');
    var ctfList = honerList.children();
    console.log(ctfList);
    // 点击放大证书
    for(var i=0;i<ctfList.length;i++) {
        ctfList[i].index = i;
        console.log(ctfList.length);
        
        $(ctfList[i]).on('click',function() {

            honerList.css('display','none');
            // 小图src
            var _targetSrc = $(ctfList[this.index]).find('.img-responsive').get(0).src;
            // 大图src
            // var _targetBigSrc = ctfBig.find('.img-responsive').get(0).src;
            ctfBig.find('.img-responsive').get(0).src = _targetSrc;

            ctfBig.css('display','block');
            console.log(this.index);
            
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
            // 按钮颜色
            for(var z=0;z<notHoner.length;z++) {
                $(honerBtn[z]).css({'color':'#2f77d0','background':'#fff'})
            };
            $(this).css({'color':'#fff','background':'#2f77d0'});

            // 隐藏大图
            ctfBig.css('display','none');
            // 显示证书列表
            ctfListWp.css('display','block');

            for(var k=0;k<honerList.length;k++) {
                $(honerList[k]).css('display','none');
            }
            $(honerList[this.index]).css('display','block');
            // console.log(honerList[this.index]);

		});
	}
}