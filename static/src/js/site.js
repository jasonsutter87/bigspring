$(function () {
    var url = window.location.href;
    var url_arr = url.split('.net/')
    var url_mid = url_arr[1].split('?')[0]
    if (url_mid == "") {
        url_mid = 'home'
    }

    var url_replaced = url_mid.replace(/\//g, "-").concat('-page-active')
    $('body').addClass(url_replaced);


    let splitCookie = document.cookie.split(';');



    //iterate over the cookie array, check for the role of the user
    splitCookie.forEach(function (val, index) {
        var cookieKey = val.split('=')[0];
        var cookieValue = val.split('=')[1];

        //If the role is set
        if (cookieKey == "growFontSize" || cookieKey == " growFontSize") {
            $('html').css('font-size', parseInt(cookieValue))
            $('body').css('font-size', parseInt(cookieValue))
            $('.Normal').css('font-size', parseInt(cookieValue))
        }
    })


    //load fontsize
    $(window).on('load', function (e) {
        e.preventDefault();
        var initialFontSize = $('html').css('font-size').split('px')[0]; //16px

        var renderSize = initialFontSize - 16;
        $('#accessibility-fontsize').html(renderSize)
        $('#mobile-accessibility-fontsize').html(renderSize)
    })

    //load accessibility settings
    $(window).on('load', function (e) {
        e.preventDefault();


    })


    $('#normal-font-size').click(function (e) {
        e.preventDefault()

        let splitCookie = document.cookie.split(';');

        //iterate over the cookie array, check for the role of the user
        splitCookie.forEach(function (val, index) {
            var cookieKey = val.split('=')[0];
            var cookieValue = val.split('=')[1];

            //If the role is set
            if (cookieKey == "growFontSize" || cookieKey == " growFontSize") {
                document.cookie = "growFontSize=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                document.cookie = " growFontSize=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            } else {
                document.cookie = "growFontSize=16";
            }

        })


        if ($('body').hasClass('font-size-10') || $('body').hasClass('font-size-20')) {
            $('body').removeClass('font-size-10')
            $('body').removeClass('font-size-20')
            $('body').addClass('normal-font-size')
        } else {
            $('body').addClass('normal-font-size')
        }

        var fontSize = 16
        $('html').css('font-size', fontSize)
        $('body').css('font-size', fontSize)
        $('.Normal').css('font-size', fontSize)
    })


    $('#increase-font-size-10').click(function (e) {
        e.preventDefault()

        let splitCookie = document.cookie.split(';');

        //iterate over the cookie array, check for the role of the user
        splitCookie.forEach(function (val, index) {
            var cookieKey = val.split('=')[0];
            var cookieValue = val.split('=')[1];

            //If the role is set
            if (cookieKey == "growFontSize" || cookieKey == " growFontSize") {
                document.cookie = "growFontSize=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                document.cookie = " growFontSize=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            } else {
                document.cookie = "growFontSize=20";
            }

        })

        if ($('body').hasClass('normal-font-size') || $('body').hasClass('font-size-20')) {
            $('body').removeClass('font-size-20')
            $('body').removeClass('normal-font-size')
            $('body').addClass('font-size-10')
        } else {
            $('body').addClass('font-size-10')
        }

        var fontSize = 20

        $('html').css('font-size', fontSize)
        $('body').css('font-size', fontSize)
        $('.Normal').css('font-size', fontSize)
    })


    $('#increase-font-size-20').click(function (e) {
        e.preventDefault()

        let splitCookie = document.cookie.split(';');

        //iterate over the cookie array, check for the role of the user
        splitCookie.forEach(function (val, index) {
            var cookieKey = val.split('=')[0];
            var cookieValue = val.split('=')[1];

            //If the role is set
            if (cookieKey == "growFontSize" || cookieKey == " growFontSize") {
                document.cookie = "growFontSize=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                document.cookie = " growFontSize=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            } else {
                document.cookie = "growFontSize=24";
            }

        })


        if ($('body').hasClass('normal-font-size') || $('body').hasClass('font-size-10')) {
            $('body').removeClass('normal-font-size')
            $('body').removeClass('font-size-10')
            $('body').addClass('font-size-20')
        } else {
            $('body').addClass('font-size-20')
        }

        var fontSize = 24

        $('html').css('font-size', fontSize)
        $('body').css('font-size', fontSize)
        $('.Normal').css('font-size', fontSize)
    })

    //click handler for the desktop accessibily button
    $('.mobilenav-accessibility-toggle').click(function (e) {
        e.preventDefault()

        if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active')
        }


        $('body').toggleClass('mobilenav-accessibility-active')
    })




    //Toggle Navigation Menu
    $('body').on('click', '.nav-btn-open', function (e) {
        e.preventDefault();
        $('body').toggleClass('mobile-nav-active');
        if ($('body').hasClass('mobile-nav-active')) {
            $('body').css('overflow', 'hidden');
            $('html').css('overflow', 'hidden');

            $('body').css('-webkit-overflow-scrolling', 'touch');
        } else {
            $('body').css('overflow', 'unset');
            $('html').css('overflow', 'unset');
            $('body').css('-webkit-overflow-scrolling', 'auto');
        }
        $('.mobile-nav-open').toggleClass('d-none');
        $('.mobile-nav-close').toggleClass('d-none');
    });

    $('body').on('click', '.nav-btn-close', function (e) {
        e.preventDefault();
        $('body').attr('class', '');
        $('body').css('overflow', 'unset');
        $('html').css('overflow', 'unset');
        $('body').css('-webkit-overflow-scrolling', 'auto');
    })



    //Toggle Products Menu
    $('.mobile-nav-submenu-81-top-level').on('click', function () {
        $('body').addClass('products-nav-active')
    })

    //Remove Products Menu
    $('.remove-products-nav').on('click', function (e) {
        e.preventDefault();
        $('body').removeClass('products-nav-active')
    })








    //Toggle Navigation Menu
    $(window).on("scroll", function () {
        if (50 <= window.scrollY) {
            $("body").addClass("main-navigation-scroll")
        } else {
        $("body").removeClass("main-navigation-scroll")
        }



        let screenHeight = window.innerHeight
        let navbarSize = 65

        if (window.scrollY >= (screenHeight - navbarSize)) {
            $('#blog-nav').addClass('blog-nav-fixed')
            $('#blog-nav').find('.site-container-1512').css('padding-left', '30px')
            $('#blog-nav').find('.site-container-1512').css('padding-right', '30px')

        } else {
            if ($('#blog-nav').hasClass('blog-nav-fixed')) {
                $('#blog-nav').removeClass('blog-nav-fixed' )
                $('#blog-nav').find('.site-container-1512').css('padding-left', '0')
                $('#blog-nav').find('.site-container-1512').css('padding-right', '0')
            }
        }
    })




    if (window.location.href.split('/about/blog/').length > 1) {
        var relatedPosts = $('.blog-related-posts')
        $.each(relatedPosts, function (i, val) {
            if (i > 3) {
                $(this).remove();
            }
        })

    }











    if (window.location.href.split('/Gallery').length > 1) {
        $('#main-nav-gallery-btn').addClass('main-nav-btn-active')


        $('#dnn_ctr684_XModPro_ctl00_ctl01_pgrBottom_lnkPrev').prepend('<span class="primary-text pr-1"><i class="fal fa-arrow-left"></i></span>')
        $('#dnn_ctr684_XModPro_ctl00_ctl01_pgrBottom_lnkNext').append('<span class="primary-text pl-1"><i class="fal fa-arrow-right"></i></span>')

    }

    if (window.location.href.split('/downloads').length > 1) {
        $('#main-nav-downloads-btn').addClass('main-nav-btn-active')
    }


    //scroll to top
    function scrollToStart() {
        $("html, body").animate({ scrollTop: $("#start").offset().top }, $(document).height())
    }

    //lazy load images
    $.each($('img'), function (i, val) {
        $(val).addClass('b-lazy')
    })

    //Blog
    var twelthItem;
    if (window.location.href.split('/about/blog').length == 2 || window.location.href.split('/about/blog/').length == 1) {
        if (window.location.href.split('/about/blog')[1] == '') {

            $.each($('.post'), function (ind, val) {

                if (ind == 0) {
                    $('#full-featured-post').append($(this))
                    $(this).find('.post-button-div a').removeClass('primary-link')
                    $(this).find('.post-button-div a').addClass('btn-primary btn-size-lg')
                    $(this).find('.post-roll-title').addClass('h1-heading text-center white-text')
                    $(this).find('.post-roll-categories').addClass('h5-heading')

                    $('#full-featured-post .post-roll-title').removeClass('h5-heading')

                } else if (ind >= 3) {
                    $('#quarter-featured-post-row').append($(this))
                    $(this).addClass('col-12 col-md-6 col-lg-3 normal-blog-posts')
                    $(this).find('.post-roll-date').remove();
                    $(this).find('.post-roll-summary').remove();

                } else {
                    $('#half-featured-post-row').append($(this))
                    $(this).addClass('col-12 col-md-6 secondary-blog-posts')
                    $(this).find('.post-roll-date').remove();
                }
            })
            $('.blog-section-recentarticles').remove();

            $('.innerblog-container').css('width', '100%');
            $('.innerblog-container').css('max-width', '1512px');
            $('.innerblog-container').css('margin', '0 auto');

        } else {
            $('.blog-post-marquee-tags').find('a').addClass('btn-primary-bubble btn-size-sm')

            $('#post-main').css('max-width', '1512px');
            $('#post-main').css('margin', '0 auto');
            $('#post-main').css('width', '100%');
        }




    }

    if(window.location.href.split('/about/blog/blogpage/').length == 2 || window.location.href.split('/about/blog/blogpage/').length == 2) {
        if (window.location.href.split('/about/blog')[1].split('/blogpage/').length == 2) {


            $.each($('.post'), function (ind, val) {
                $('#quarter-featured-post-row').append($(this))
                $(this).addClass('col-12 col-md-6 col-lg-3 normal-blog-posts')
                $(this).find('.post-roll-date').remove();
                $(this).find('.post-roll-summary').remove();
            })

        } else {

            $.each($('.post'), function (ind, val) {

                if (ind == 0) {
                    $('#full-featured-post').append($(this))
                    $(this).find('.post-button-div a').removeClass('primary-link')
                    $(this).find('.post-button-div a').addClass('btn-primary btn-size-lg')
                    $(this).find('.post-roll-title').addClass('h1-heading text-center white-text')
                } else if (ind >= 3) {
                    $('#quarter-featured-post-row').append($(this))
                    $(this).addClass('col-12 col-md-6 col-lg-3 normal-blog-posts')
                    $(this).find('.post-roll-date').remove();
                    $(this).find('.post-roll-summary').remove();

                } else {
                    $('#half-featured-post-row').append($(this))
                    $(this).addClass('col-12 col-md-6 secondary-blog-posts')
                    $(this).find('.post-roll-date').remove();
                }
            })

        }




        $('.blog-section-recentarticles').remove();
        $('.innerblog-container').css('width', '100%');
        $('.innerblog-container').css('max-width', '1512px');
        $('.innerblog-container').css('margin', '0 auto');
    }




    $('.down-to-next-section-link').on('click', function () {
        var page = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(page).offset().top - 65
        }, 1200);
    })



    $('.down-to-next-section-jadatruck-link').on('click', function () {
        var page = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(page).offset().top
        }, 1200);
    })



    $('.scroll-to-blog').on('click', function () {
        var page = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(page).offset().top - 65
        }, 1200);

        $('#blog-nav').addClass('blog-nav-fixed')
    })


    //lazy load script
    !function (e, n, A) { function o(e, n) { return typeof e === n } function t() { var e, n, A, t, a, i, l; for (var f in r) if (r.hasOwnProperty(f)) { if (e = [], n = r[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (A = 0; A < n.options.aliases.length; A++)e.push(n.options.aliases[A].toLowerCase()); for (t = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++)i = e[a], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = t : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = t), s.push((t ? "" : "no-") + l.join("-")) } } function a(e) { var n = u.className, A = Modernizr._config.classPrefix || ""; if (c && (n = n.baseVal), Modernizr._config.enableJSClass) { var o = new RegExp("(^|\\s)" + A + "no-js(\\s|$)"); n = n.replace(o, "$1" + A + "js$2") } Modernizr._config.enableClasses && (n += " " + A + e.join(" " + A), c ? u.className.baseVal = n : u.className = n) } function i(e, n) { if ("object" == typeof e) for (var A in e) f(e, A) && i(A, e[A]); else { e = e.toLowerCase(); var o = e.split("."), t = Modernizr[o[0]]; if (2 == o.length && (t = t[o[1]]), "undefined" != typeof t) return Modernizr; n = "function" == typeof n ? n() : n, 1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = n), a([(n && 0 != n ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, n) } return Modernizr } var s = [], r = [], l = { _version: "3.6.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, n) { var A = this; setTimeout(function () { n(A[e]) }, 0) }, addTest: function (e, n, A) { r.push({ name: e, fn: n, options: A }) }, addAsyncTest: function (e) { r.push({ name: null, fn: e }) } }, Modernizr = function () { }; Modernizr.prototype = l, Modernizr = new Modernizr; var f, u = n.documentElement, c = "svg" === u.nodeName.toLowerCase(); !function () { var e = {}.hasOwnProperty; f = o(e, "undefined") || o(e.call, "undefined") ? function (e, n) { return n in e && o(e.constructor.prototype[n], "undefined") } : function (n, A) { return e.call(n, A) } }(), l._l = {}, l.on = function (e, n) { this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function () { Modernizr._trigger(e, Modernizr[e]) }, 0) }, l._trigger = function (e, n) { if (this._l[e]) { var A = this._l[e]; setTimeout(function () { var e, o; for (e = 0; e < A.length; e++)(o = A[e])(n) }, 0), delete this._l[e] } }, Modernizr._q.push(function () { l.addTest = i }), Modernizr.addAsyncTest(function () { function e(e, n, A) { function o(n) { var o = n && "load" === n.type ? 1 == t.width : !1, a = "webp" === e; i(e, a && o ? new Boolean(o) : o), A && A(n) } var t = new Image; t.onerror = o, t.onload = o, t.src = n } var n = [{ uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=", name: "webp" }, { uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", name: "webp.alpha" }, { uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA", name: "webp.animation" }, { uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=", name: "webp.lossless" }], A = n.shift(); e(A.name, A.uri, function (A) { if (A && "load" === A.type) for (var o = 0; o < n.length; o++)e(n[o].name, n[o].uri) }) }), t(), a(s), delete l.addTest, delete l.addAsyncTest; for (var p = 0; p < Modernizr._q.length; p++)Modernizr._q[p](); e.Modernizr = Modernizr }(window, document);
})
