$(document).ready(function () {
    $("#jk-menu").click(function () {
        $(".jk-mobile-menu").toggleClass("jk-fade");
    })
    $(window).resize(function () {
        $(".jk-mobile-menu").removeClass("jk-fade");
    })
    $(".jk-mobile-menu .navbar-nav .nav-item .nav-link").click(function () {
        $(".jk-mobile-menu .navbar-nav .nav-item .nav-link").removeClass("jk-green").removeClass("jk-active-text").addClass("jk-gray");
        $(this).addClass("jk-active-text").addClass("jk-green").removeClass("jk-gray");
        // $(this + " i").addClass("jk-green").removeClass("jk-gray");
    })
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var element_height = $(".jk-trailer").height();
        if (scrollTop >= element_height) {
            $("#lg-nav").addClass("nav-bg");
        } else {
            $("#lg-nav").removeClass("nav-bg");
        }
    })
})