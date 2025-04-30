
//animaciones
new WOW().init();
//hamburger Menu
$(document).ready(function () {
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
    if($(window).width()>=992){
        var scroll= new SmoothScroll('a[href*="#"]',{
            offset: 90,
            speed: 2000,
            speedAsDuration: true
        });
    } else if($(window).width()<992 && $(window).width()>=768){
        var scroll= new SmoothScroll('a[href*="#"]',{
            offset: 78,
            speed: 2000,
            speedAsDuration: true
        });
    } else if($(window).width()<768){
        var scroll= new SmoothScroll('a[href*="#"]',{
            offset: 70,
            speed: 2000,
            speedAsDuration: true
        });
        $("#slide-1").attr("src","assets/s1.png");
        $("#slide-2").attr("src","assets/s2.png");
        $("#slide-3").attr("src","assets/s3.png");
    }
    $('.mymenu').on('click','li', function () {
        $('.mymenu li.active').removeClass('active');
        $(this).addClass('active');
    });
});