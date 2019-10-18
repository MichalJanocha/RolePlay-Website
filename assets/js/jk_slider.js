$(document).ready(function () {
    var sliderID = "#jk-slider-1";
    var startSlider = 0;
    var time = 7; //Seconds
    var imgs = [
        { title: "Fallout 1 server", descr: "Join this nuked world!", src: "assets/img/slider_1.jpg" },
        { title: "Donator status", descr: "Get special features!", src: "assets/img/news_bg.jpg" },
        { title: "Test slide", descr: "Test description", src: "assets/img/logo_fallout.png" }
    ];

    // $(sliderID + " img").each(function (index) {
    //     var title = $(this).attr("title");
    //     var descr = $(this).attr("alt");
    //     var src = $(this).attr("src");
    //     $(this).addClass("d-none").css("left", "-100%");

    //     if (index == startSlider) {
    //         $(this).removeClass("d-none").css("left", "0");
    //         $(sliderID).append("<div class='slider-wrap'><h4 class='slider-h4'>" + title + "</h4><p class='slider-p'>" + descr + "</p></div>");
    //     }

    //     imgs[index] = {
    //         title: title,
    //         descr: descr,
    //         src: src
    //     }
    // })
    $.each(imgs, function (i, v) {
        $(sliderID).append('<div class="slider-wrap"><img id="slide_' + i + '" src="' + v.src + '" class="img-fluid slide_' + i + '" style="top: -100%;" title="' + v.title + '" alt="' + v.descr + '" /><div id="slide_' + i + '" class="text-wrap slide_' + i + '" style="top: -100%;"><h4 class="slider-h4">' + v.title + '</h4><p class="slider-p">' + v.descr + '</p></div></div>');
        if (i == startSlider) {
            $(".slide_" + startSlider).css("top", "50%");
        }
    })
    setInterval(function () {
        var max_count = imgs.length;
        $(".slide_" + startSlider).css("top", "-100%");
        startSlider += 1;

        if (startSlider >= max_count) {
            startSlider = 0;
        }
        $(".slide_" + startSlider).css("top", "50%");

    }, time * 1000);

})