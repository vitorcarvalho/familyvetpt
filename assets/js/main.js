(function ($) {

    "use strict";

    $(window).on('load', function () {

        /*Page Loader active
        ========================================================*/
        $('#preloader').fadeOut();

        // Sticky Nav
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 50) {
                $('.scrolling-navbar').addClass('top-nav-collapse');
            } else {
                $('.scrolling-navbar').removeClass('top-nav-collapse');
            }
        });

        // one page navigation
        $('.navbar-nav').onePageNav({
            currentClass: 'active'
        });

        /* Auto Close Responsive Navbar on Click
        ========================================================*/
        function close_toggle() {
            if ($(window).width() <= 768) {
                $('.navbar-collapse a').on('click', function () {
                    $('.navbar-collapse').collapse('hide');
                });
            }
            else {
                $('.navbar .navbar-inverse a').off('click');
            }
        }
        close_toggle();
        $(window).resize(close_toggle);

        /* WOW Scroll Spy
        ========================================================*/
        var wow = new WOW({
            //disabled for mobile
            mobile: false
        });

        wow.init();

        /* Testimonials Carousel
       ========================================================*/
        var owl = $("#testimonials");
        owl.owlCarousel({
            nav: false,
            dots: true,
            center: true,
            margin: 15,
            slideSpeed: 1000,
            stopOnHover: true,
            autoPlay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsiveRefreshRate: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });
        owl.trigger('play.owl.autoplay', [5000])

        /* Back Top Link active
        ========================================================*/
        var offset = 200;
        var duration = 500;
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });

        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    });

}(jQuery));

function removeBySelector(selector, timeout, bySelector) {
    jqueryElement = $(selector)[0];
    if (jqueryElement == null) {
        setTimeout(function () {
            removeBySelector(selector, timeout, bySelector);
        }, timeout);
    } else {
        if (bySelector) {
            $(selector).remove();
        } else {
            jqueryElement.remove();
        }
    }
}
$(function () {
    removeBySelector("#eapps-instagram-feed-1 > a", 1000, true);
    removeBySelector("#eapps-instagram-feed-1 > a", 1000, false);
    removeBySelector("#eapps-facebook-reviews-9200bfdb-3c1f-4f21-a7fa-b1e98f2c15de > div > div:nth-child(4)", 1000, false);
});
