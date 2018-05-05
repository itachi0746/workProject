
$('.carousel').carousel();

$(function () { $(".ewm .b1").popover({
    html: true,
    content: function() {
        return k_content();
    }
}); });

function k_content() {
    var data = $("<p><img class='ewm_i1' src='../Content/Company2/img/ewm_4.png'><span>广州市天河区黄埔大道中277号203</span></p><br><p><img src='../Content/Company2/img/ewm_5.png'><span>手机: +86-13929914698</span></p><br><p><img src='../Content/Company2/img/ewm_6.png'><span>邮件: service@jierutek.com</span></p>")
    return data;
}