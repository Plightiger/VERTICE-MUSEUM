// 정렬순
$(".option_1").hide();
$(".select_lang,.option_1").mouseenter(function(){
    $(".option_1").toggle();
    $(".select_lang span").toggleClass("turn");
});
$(".select_lang,.option_1").mouseleave(function(){
    $(".option_1").hide();
    $(".select_lang span").toggleClass("turn");
});
$(".select_lang,.option_1").click(function(){
    $(".select_lang span").toggleClass("turn");
});


function option1_1(){
    document.getElementById("lang_by").innerHTML = 'English'
    $(".option_1").hide();
    $(".select_lang span").toggleClass("turn");
}
function option1_2(){
    document.getElementById("lang_by").innerHTML = 'Korean'
    $(".option_1").hide();
    $(".select_lang span").toggleClass("turn");
}
function option1_3(){
    document.getElementById("lang_by").innerHTML = 'Japanese'
    $(".option_1").hide();
    $(".select_lang span").toggleClass("turn");
}

// 메뉴버튼
$(".open_mmenu img").click(function(){
    $(".m_menu").css({
        'margin-top':'0vh',
        'transition':'margin-top 0.3s'
    })
});
$(".m_gnb li a").click(function(){
    $(".m_menu").css({
        'margin-top':'100vh',
        'transition':'margin-top 0.3s'
    })
});

$(".close_mmenu").click(function(){
    $(".m_menu").css({
        'margin-top':'100vh',
        'transition':'margin-top 0.3s'
    })
});

// popup
$(".popup").hide();
$(".lang_popup a").click(function(){
    $(".popup").fadeIn(0)
});
$(".popup_close").click(function(){
    $(".popup").fadeOut(0)
});

//top_btn 적용하기
$('.top_button').hide();
$(window).scroll(function(){
    var height = $(window).scrollTop();
    if(height >300){
        $('.top_button').fadeIn(0)
    }
    else{
        $('.top_button').fadeOut(0);
    }
});
$('.top_button').click(function(){
    $(window).scrollTop(0) ;
});