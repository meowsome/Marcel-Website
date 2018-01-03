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



setTimeout(function () {                                   
    $.getJSON("https://discordapp.com/api/guilds/397862893539950602/widget.json", function (data) {
        $('#online').text(data.members[0].status);
        $('#guilds').text(data.channels[0].name.slice(0,data.channels[0].name.length-1));
        $('#members').text(data.channels[1].name.slice(0,data.channels[1].name.length-1));
    });
}, 100);
