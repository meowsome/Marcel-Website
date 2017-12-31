$(document).ready(function () {
    if (!window.location.hash) {
        window.location.hash = "home";
        $('html,body').scrollTop(0);
    }
    setTimeout(function () {
        var pageTitle = window.location.hash.charAt(1).toUpperCase() + window.location.hash.slice(2);
        document.title = pageTitle + " | Marcel";
    }, 1);
});

setTimeout(function () {
    $("html, body").animate({
        scrollTop: 0
    });
}, 50);



$(document).ready(function () {
    var url = window.location.href;
    $(".navigation-item").each(function () {
        if (url == (this.href)) {
            $(".navigation-item").removeClass("navigation-item-active");
            $(this).delay(100).addClass("navigation-item-active");
        }
    });
});

$(window).on('hashchange', function () {
    var url = window.location.href;
    $(".navigation-item").each(function () {
        if (url == (this.href)) {
            $(".navigation-item").removeClass("navigation-item-active");
            $(this).delay(100).addClass("navigation-item-active");
        }
    });
    $('html,body').scrollTop(0);
});