$(function() {
'use strict';
// Adjust the slider height
var winH = $(window).height(),
    upperH = $('.upper-bar').innerHeight(),
    navH = $('.navbar').innerHeight();

    $('.slider, .slider .carousel-one, .slider .carousel-two, .slider .carousel-three', ).height(winH - (upperH + navH));
    // End slider height


    // Featured Work Shuffle

    $('.featured-work ul li').on('click', function (){
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class')==='all'){
            $('.featured-work .shuffle-images .col-md').css('opacity', 1);
        } else {
            $('.featured-work .shuffle-images .col-md').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
    // End Featured Work Shuffle
})