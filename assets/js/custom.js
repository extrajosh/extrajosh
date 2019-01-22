$(document).ready(function () {
    // Main Slider
    $('#mainSlider, #productSlider').slick({
        dots: true,
        arrows: true,
        infinite: false,
        speed: 2000,
        slidesToShow: 1
    });
    // Main Slider
    $('#reviewsSlider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 2000,
        slidesToShow: 1
    });

    $('#privacyModal').on('show.bs.modal', function (e) {
        var loadurl = $(e.relatedTarget).data('load-url');
        $(this).find('.modal-body').load(loadurl);
    });
    $('#termsModal').on('show.bs.modal', function (e) {
        var loadurl = $(e.relatedTarget).data('load-url');
        $(this).find('.modal-body').load(loadurl);
    });
});

(function ($) {
    "use strict"; // Start of use strict
    var headerHgt = $('header > .navbar').outerHeight() - 2;
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - headerHgt)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: headerHgt
    });

})(jQuery); // End of use strict