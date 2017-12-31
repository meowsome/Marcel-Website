// Adapted from https://codepen.io/MarcelSchulz/pen/lCvwq
$(document).ready(function () {
    var scrolled = $(window).scrollTop();
    var half = $('.parallax').height() * -0.05;
    $('.parallax').css('background-position', 'center ' + (half - (scrolled * .25)) + 'px');
});
$(window).on('scroll', function () {
    var scrolled = $(window).scrollTop();
    var half = $('.parallax').height() * -0.05;
    $('.parallax').css('background-position', 'center ' + (half - (scrolled * .25)) + 'px');
});
