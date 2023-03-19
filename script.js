// nav 메뉴 누르면 해당 페이지로 이동
var nav = $('nav ul li')
var cont = $('section')
nav.click(function (e) {
    event.preventDefault();
    var target = $(this)
    var index = target.index()
    // alert(index);
    // 순번을 제대로 기억하는지 확인해본것
    var page = cont.eq(index)
    var pageTop = page.offset().top
    $('html,body').animate({
        scrollTop: pageTop
    })
})

// 스크롤시 li css 변화
$(window).scroll(function () {
    var Cscroll = $(this).scrollTop() + 45
    if (Cscroll >= cont.eq(0).offset().top) {
        nav.removeClass('active')
        nav.eq(0).addClass('active')
        $('#about').removeClass('show')
    }
    if (Cscroll >= cont.eq(1).offset().top) {
        nav.removeClass('active')
        nav.eq(1).addClass('active')
        $('#portfolio').removeClass('show')
        $('#about').addClass('show')
    }
    if (Cscroll >= cont.eq(2).offset().top) {
        nav.removeClass('active')
        nav.eq(2).addClass('active')
        $('#portfolio').addClass('show')
        $('#about').removeClass('show')
    }
    if (Cscroll >= cont.eq(3).offset().top) {
        nav.removeClass('active')
        nav.eq(3).addClass('active')
        $('.contact_div').addClass('show')
        $('#portfolio').removeClass('show')
        $('#about').removeClass('show')
    }
})

//HOME TypeIt
new TypeIt(".simpleUsage_01", {
    strings: "Progress for the goal",
    cursor: true,
    startDelay: 4000,
    speed: 100,
    waitUntilVisible: true
}).go();
new TypeIt(".simpleUsage_02", {
    strings: ": Front Engineer",
    cursor: true,
    startDelay: 7000,
    speed: 100,
    waitUntilVisible: true,
    loop: true,
    loopDelay: 5000
}).go();