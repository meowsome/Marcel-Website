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
