window.addEventListener("load", function () {
    if (!window.location.hash) {
        window.location.hash = "home";
        $('html,body').scrollTop(0);
        $(".footer").css({"position": "absolute", "bottom": "0", "left": "0"});
    }
    if (window.location.hash === "#home") {
        $(".footer").css({"position": "absolute", "bottom": "0", "left": "0"});
    } else {
        $(".footer").css("position", "static");
    }
    setTimeout(function () {
        var pageTitle = window.location.hash.charAt(1).toUpperCase() + window.location.hash.slice(2);
        document.title = pageTitle + " | Marcel";
    }, 1);

    setTimeout(function () {
        $("html, body").animate({
            scrollTop: 0
        });
    }, 50);

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
    if (window.location.hash === "#home") {
        $(".footer").css({"position": "absolute", "bottom": "0", "left": "0"});
    } else {
        $(".footer").css("position", "static");
    }
});

setTimeout(function () {
    $.getJSON("https://discordapp.com/api/guilds/397862893539950602/widget.json", function (data) {
        $('#online').text(data.members[0].status);
        var data1 = parseInt(data.channels[0].name.slice(0, data.channels[0].name.length - 1));
        var data2 = parseInt(data.channels[1].name.slice(0, data.channels[1].name.length - 1));
        if (data1 > data2) {
            $('#channels').text(data1);
            $('#guilds').text(data2);
        } else {
            $('#channels').text(data2);
            $('#guilds').text(data1);
        }
    });
}, 100);

//click
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

// Parallax
var scrolled = $(window).scrollTop();
var half = $('.parallax').height() * -0.05;
$('.parallax').css('background-position', 'center ' + (half - (scrolled * .25)) + 'px');
$(window).on('scroll', function () {
    var scrolled = $(window).scrollTop();
    var half = $('.parallax').height() * -0.05;
    if (scrolled < 500) {
        $('.parallax').css('background-position', 'center ' + (half - (scrolled * .25)) + 'px');
    }
});

//Ripple
!(function (a) {
    a(".ripple-dark").mousedown(function (b) {
        var c = a(this);
        0 === c.find(".dark").length &&
            c.append("<span class='dark'></span>");
        var d = c.find(".dark");
        if ((d.removeClass("animate"), !d.height() && !d.width())) {
            var e = Math.max(c.outerWidth(), c.outerHeight());
            d.css({
                height: e,
                width: e
            });
        }
        var f = b.pageX - c.offset().left - d.width() / 2,
            g = b.pageY - c.offset().top - d.height() / 2;
        d.css({
            top: g + "px",
            left: f + "px"
        }).addClass("animate");
    });
})(jQuery);

!(function (a) {
    a(".ripple-light").mousedown(function (b) {
        var c = a(this);
        0 === c.find(".light").length &&
            c.append("<span class='light'></span>");
        var d = c.find(".light");
        if ((d.removeClass("animate"), !d.height() && !d.width())) {
            var e = Math.max(c.outerWidth(), c.outerHeight());
            d.css({
                height: e,
                width: e
            });
        }
        var f = b.pageX - c.offset().left - d.width() / 2,
            g = b.pageY - c.offset().top - d.height() / 2;
        d.css({
            top: g + "px",
            left: f + "px"
        }).addClass("animate");
    });
})(jQuery);