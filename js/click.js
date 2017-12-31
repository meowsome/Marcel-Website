//Adapted from https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
$('a[href^="#"].link').on('click', function () {
    $("html, body").animate({
        scrollTop: 0
    });
    setTimeout(function () {
        var pageTitle = window.location.hash.charAt(1).toUpperCase() + window.location.hash.slice(2);
        document.title = pageTitle + " | Marcel";
    }, 100);
});

$(".hamburger").click(function () {
    $(".mobile-navigation-wrapper").show(0);
    $(".mobile-navigation-wrapper").delay(100).addClass("mobile-navigation-wrapper-active");
    $(".mobile-navigation").delay(200).addClass("mobile-navigation-active");
});

$(".mobile-navigation-wrapper").click(function () {
    $(this).removeClass("mobile-navigation-wrapper-active");
    $(".mobile-navigation").delay(100).removeClass("mobile-navigation-active");
    $(".mobile-navigation-wrapper").delay(200).hide(0);
});
