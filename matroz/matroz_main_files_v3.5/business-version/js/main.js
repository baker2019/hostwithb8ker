/*

[MatRoz Core Stylesheet]

Project: MatRoz - Material Design Agency and Business Template
Version: 2.9
Author : themelooks.com

*/

(function ($) {
    "use strict"; // this function is executed in strict mode

    $(function () {
        /* ------------------------------------------------------------------------- *
         * SCOPE VARIABLES
         * ------------------------------------------------------------------------- */
        var wn = $(window);

        /* ------------------------------------------------------------------------- *
         * CUSTOM BACKGROUND IMAGE
         * ------------------------------------------------------------------------- */
        $('[data-bg-path]').each(function () {
            var imgValue = $(this).data('bg-path');
            $(this).css('background-image', 'url(' + imgValue + ')');
        });

        /* ------------------------------------------------------------------------- *
         * ADJUST TOP NAV HEIGHT
         * ------------------------------------------------------------------------- */
        var topNav = $('#topNav, .openNav');

        var topNavToggle = function () {
            if (wn.scrollTop() > 1) {
                topNav.addClass('sticky');
            } else {
                topNav.removeClass('sticky');
            }
        };

        topNavToggle();

        /* ------------------------------------------------------------------------- *
         * BACK TO TOP BUTTON
         * ------------------------------------------------------------------------- */
        var backToTop = $('#backToTop')
            , backToTopBtn = $('#backToTop button')
            , backToTopShow = function () {
                if (wn.scrollTop() > 1) {
                    backToTop.addClass('show');
                } else {
                    backToTop.removeClass('show');
                }
            };

        backToTopBtn.on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 500);
        });

        /* ------------------------------------------------------------------------- *
         * EXECUTE FUNCTIONS ON SCROLL
         * ------------------------------------------------------------------------- */
        wn.on('scroll', function () {
            topNavToggle();

            /* BACK TO TOP BUTTON */
            backToTopShow();
        });

        /* ------------------------------------------------------------------------- *
         * FORM VALIDATION
         * ------------------------------------------------------------------------- */
        var $formValidation = $('[data-form-validation]');

        $formValidation.each(function () {
            $(this).find('form').validate({
                errorPlacement: function () {
                    return true;
                }
            });
        });

        var $contactFormStatus = $('.contact-form-status'),
            $contactForm = $('#contactForm');

        if ($contactForm.length) {
            $contactForm.validate({
                rules: {
                    contactName: "required",
                    contactEmail: {
                        required: true,
                        email: true
                    },
                    contactMessage: "required"
                },
                errorPlacement: function (error, element) {
                    return true;
                },
                submitHandler: function () {
                    var $form = $(this.currentForm)
                        , contactFormData = $contactForm.serialize();

                    /* Submit the form using AJAX */
                    $.ajax({
                        type: 'POST',
                        url: $contactForm.attr('action'),
                        data: contactFormData
                    })
                        .done(function (response) {
                            $contactFormStatus.show().html(response).delay(3000).fadeOut("slow");

                            $form[0].reset();
                            $form.find('.mdl-textfield, .mdl-textfield__input').removeClass('is-dirty valid');
                        });
                }
            });
        }

        /* ------------------------------------------------------------------------- *
         * MAP
         * ------------------------------------------------------------------------- */
        var map, marker, myLatLng;

        function initMap() {
            myLatLng = { lat: 23.790546, lng: 90.375583 };

            map = new google.maps.Map(document.getElementById('map'), {
                center: myLatLng,
                zoom: 16,
                scrollwheel: false,
                disableDefaultUI: true,
                zoomControl: true
            });

            marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                animation: google.maps.Animation.DROP,
                draggable: true
            });
        }

        if ($("#map").length) {
            initMap();
        }

        $('.map-toggle-btn').on('click', function () {
            var $this = $(this);

            $this.toggleClass('opened');
        });

        /* ------------------------------------------------------------------------- *
         * TWITTER WIDGET
         * ------------------------------------------------------------------------- */
        var $footerTwitter = $('#footerTwitter');

        if ($footerTwitter.length) {
            twttr.widgets.createTimeline({
                sourceType: "profile",
                screenName: $footerTwitter.data('user-name')
            }, document.getElementById('footerTwitter'));
        }

        var $sidebarTwitter = $('#sidebarTwitter');

        if ($sidebarTwitter.length) {
            twttr.widgets.createTimeline({
                sourceType: "profile",
                screenName: $sidebarTwitter.data('user-name')
            }, document.getElementById('sidebarTwitter'));
        }

        /* ------------------------------------------------------------------------- *
         * LIVE CHAT WIDGET
         * ------------------------------------------------------------------------- */
        var Tawk_API = Tawk_API || {},
            Tawk_LoadStart = new Date(),
            $tawk = document.createElement("script");

        $tawk.async = true;
        $tawk.src = 'https://embed.tawk.to/57dfd4b85dc7a25e92808cf6/default';
        $tawk.charset = 'UTF-8';
        $tawk.setAttribute('crossorigin', '*');

        $($tawk).appendTo('body');

        /* ------------------------------------------------------------------------- *
         * MAGNIFIC POPUP
         * ------------------------------------------------------------------------- */
        var $videoPlayBtnEl = $('#bgVideo .play-button');

        if ($videoPlayBtnEl.length) {
            $videoPlayBtnEl.magnificPopup({
                delegate: 'a',
                type: 'iframe',
                mainClass: 'my-mfp-zoom-in'
            });
        }

        if ($('.portfolio-items').length) {
            $('.portfolio-img-link').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                },
                mainClass: 'my-mfp-zoom-in'

            });

            $('.portfolio-details-link').magnificPopup({
                type: 'ajax',
                mainClass: 'my-mfp-zoom-in',
                callbacks: {
                    ajaxContentAdded: function () {
                        componentHandler.upgradeAllRegistered();
                    }
                }
            });
        }

        /* ------------------------------------------------------------------------- *
         * COUNTER
         * ------------------------------------------------------------------------- */
        if ($('.facts-number').length) {
            $('.facts-number').counterUp({
                delay: 10,
                time: 1000
            });
        }

        /* ------------------------------------------------------------------------- *
         * ANIMATESCROLL
         * ------------------------------------------------------------------------- */
        $('.animatescroll > li > a').on('click', function (e) {
            e.preventDefault();
            var attr = $(this).attr('href');

            $(attr).animatescroll({
                padding: 70,
                easing: 'easeInOutExpo', //swing, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart, easeInQuint, easeOutQuint, easeInOutQuint, easeInSine, easeOutSine, easeInOutSine, easeInExpo, easeOutExpo, easeInOutExpo, easeInCirc, easeOutCirc, easeInOutCirc, easeInElastic, easeOutElastic, easeInOutElastic, easeInBack, easeOutBack, easeInOutBack, easeInBounce, easeOutBounce, easeInOutBounce
                scrollSpeed: 1000
            });
        });

        /* ------------------------------------------------------------------------- *
         * COLOR SWITCHER
         * ------------------------------------------------------------------------- */
        var colorSwitcher = $('.color-switcher');

        if (colorSwitcher.length) {
            $('#open-switcher').on('click', function () {
                $('#open-switcher').css("display", "none");
                $('#demo-colors').animate({ 'right': '0px' }, 200, 'linear', function () {
                    $('#close-switcher').fadeIn(200);
                });
            });

            $('#close-switcher').on('click', function () {
                $('#close-switcher').css("display", "none");
                $('#demo-colors').animate({ 'right': '-202px' }, 200, 'linear', function () {
                    $('#open-switcher').fadeIn(200);
                });
            });

            $('#buttonColors li').on('click', function () {
                $('#buttonColorScheme').attr('href', $(this).attr('data-path'));
                $(this).addClass('active').siblings().removeClass('active');
            });

            $('#mainColors li').on('click', function () {
                $('#mainColorScheme').attr('href', $(this).attr('data-path'));
                $(this).addClass('active').siblings().removeClass('active');
            });
        }


        /* ------------------------------------------------------------------------- *
         * SLIDER BACKGROUND VIDEO
         * ------------------------------------------------------------------------- */
        var $sliderBgVideoEl = $('.SliderBgVideo');

        if ($sliderBgVideoEl.length) {
            $sliderBgVideoEl.tubular({ videoId: $sliderBgVideoEl.data('bg-video'), mute: true, repeat: true });
        }
    });

    $(window).on('load', function () {
        /* ------------------------------------------------------------------------- *
         * OWL CARSOUSEL
         * ------------------------------------------------------------------------- */
        var homeSlider = $('.header-items')
            , teamSlider = $('.team-items-slider')
            , feedbackSlider = $('.feedback-items');

        if (homeSlider.length) {
            homeSlider.owlCarousel({
                itemsSelector: '.header-item',
                slideSpeed: 1200,
                singleItem: true,
                autoPlay: true,
                addClassActive: true
            });
        }

        if (teamSlider.length) {
            teamSlider.owlCarousel({
                items: 2,
                itemsDesktop: [1199, 2],
                itemsDesktopSmall: [991, 3],
                itemsTablet: [768, 2],
                itemsMobile: [479, 1],
                itemsSelector: '.team-item',
                slideSpeed: 1200,
                autoPlay: true,
                pagination: true
            });
        }

        if (feedbackSlider.length) {
            feedbackSlider.owlCarousel({
                slideSpeed: 1200,
                singleItem: true,
                autoPlay: true,
                pagination: true
            });
        }

        /* -------------------------------------------------------------------------*
         * FLICKER
         * -------------------------------------------------------------------------*/
        var flickerId = '64801217',
            $flickerImagesUL = $('.FlickrImages ul');

        if ($flickerImagesUL.length) {
            $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?id=' + flickerId + '@N07&lang=en-us&format=json&jsoncallback=?', function (res) {
                $.each(res.items, function (i, item) {
                    if (i <= 9) { // <— change this number to display more or less images
                        $('<img/>').attr({ 'src': item.media.m.replace('_m', '_s'), 'alt': '' }).appendTo($flickerImagesUL).wrap('<li><a href="' + item.link + '" title="' + item.title + '" target="_blank"></a></li>');
                    }
                });
            });
        }

        /* -------------------------------------------------------------------------*
         * ISOTOPE
         * -------------------------------------------------------------------------*/
        var portfolioItems = $('.portfolio-items')
            , portfolioFilterMenu = $('.portfolio-filter-menu ul');

        if (portfolioItems.length) {
            portfolioItems.isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'packery'
            });

            portfolioFilterMenu.on('click', function (e) {
                if ($(e.target).is('li')) {
                    var selector = $(e.target).data('filter');
                    var sel_it;

                    if (selector !== '*') {
                        sel_it = '.' + selector;
                    } else {
                        sel_it = selector;
                    }
                    portfolioItems.isotope({
                        filter: sel_it
                    });

                    /* Add An Active Class */
                    $(e.target).siblings().removeClass('active');
                    $(e.target).addClass('active');
                }
            });
        }

        /* ------------------------------------------------------------------------- *
         * PRE-LOADER
         * ------------------------------------------------------------------------- */
        $("#preloader").fadeOut('slow');
    });
})(jQuery);
