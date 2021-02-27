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
        var $primaryNavbarEl = $('#primaryNavbar'),
            $headerEl = $('#header'),
            $topHeight = $primaryNavbarEl.outerHeight() + $headerEl.outerHeight(),
            $topNavStickyEl = $('#topNavSticky'),
            $topNavEl = $('#topNav'),
            $totalTopHeight = $topNavEl.outerHeight() + $topHeight,
            topNavToggle = function () {
                if ( wn.scrollTop() > $topHeight ) {
                    $topNavEl.addClass('sticky');
                } else {
                    $topNavEl.removeClass('sticky');
                }
            };
            
        topNavToggle();
        
        // STICKY NAV HEIGHT
        $topNavStickyEl.css('height', $topNavEl.outerHeight());

        /* ------------------------------------------------------------------------- *
         * BACK TO TOP BUTTON
         * ------------------------------------------------------------------------- */
        var backToTop = $('#backToTop')
        ,   backToTopBtn = $('#backToTop button')
        ,   backToTopShow = function () {
                if ( wn.scrollTop() > 1 ) {
                    backToTop.addClass('show');
                } else {
                    backToTop.removeClass('show');
                }
            };
        
        backToTopBtn.on('click', function() {
            $("html, body").animate({scrollTop: 0}, 500);
        });
        
        /* ------------------------------------------------------------------------- *
         * EXECUTE FUNCTIONS ON SCROLL
         * ------------------------------------------------------------------------- */
        wn.on('scroll', function () {
            topNavToggle();
            
            /* BACK TO TOP BUTTON */
            backToTopShow();
        });
        
        /* -------------------------------------------------------------------------*
         * RESPONSIVE PRICING DETAILS
         * -------------------------------------------------------------------------*/
        if ( wn.width() < 992 ) {
            var $domainLabel = $('#domainPricing tbody td');
            $domainLabel.each(function () {
                var $t = $(this);

                $t.prepend('<span class="labelText">'+ $t.data('label') +'</span>');
            });
        }
        
        /* ------------------------------------------------------------------------- *
         * FORM VALIDATION
         * ------------------------------------------------------------------------- */
        if ( $('#subscribeForm').length ) {
            $('#subscribeForm').validate({
                rules: {
                    EMAIL: {
                        required: true,
                        email: true
                    }
                },
                errorPlacement: function (error, element) {
                    return true;
                }
            });
        }
        
        var postCommentForm = $('#postCommentForm');
        if ( postCommentForm.length ) {
            postCommentForm.validate({
                rules: {
                    commenterName: "required",
                    commenterComments: "required",
                    commenterEmail: {
                        required: true,
                        email: true
                    }
                },
                errorPlacement: function (error, element) {
                    return true;
                }
            });
        }
        
        var $loginForm = $('.reg--login form');
        if ( $loginForm.length ) {
            $loginForm.validate({
                rules: {
                    loginPass: "required",
                    loginEmail: {
                        required: true,
                        email: true
                    }
                },
                errorPlacement: function (error, element) {
                    return true;
                }
            });
        }
    
        /* ------------------------------------------------------------------------- *
         * MAP
         * ------------------------------------------------------------------------- */
        var map, marker, myLatLng, locations, styleArray, i;

        function initMap() {
            locations = [
                ['Wano', 39.806685, -101.825307, 4],
                ['Douglas County', 47.277594, -120.062612, 5],
                ['New York', 42.7380041, -76.0523802, 3],
                ['NEVADA', 39.7892033, -116.9182608, 2],
                ['Chicago', 41.8972259, -87.5948675, 4]
            ];
            
            styleArray = [
                {
                    featureType: "all",
                    stylers: [
                        { saturation: -80 }
                    ]
                }, {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [
                        { hue: "#00ffee" },
                        { saturation: 50 }
                    ]
                }, {
                    featureType: "poi.business",
                    elementType: "labels",
                    stylers: [
                        { visibility: "off" }
                    ]
                }
            ];
            
            map = new google.maps.Map(document.getElementById('map'), {
                center: new google.maps.LatLng(44.17766, -100.594838),
                zoom: 5,
                styles: styleArray,
                scrollwheel: false,
                disableDefaultUI: true,
                zoomControl: true
            });

            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map
                });
            }
            
            if ( wn.width() < 767 ) {
                map.setOptions({draggable: false});
            }
        }

        if ( $("#map").length ) {
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

        if ( $footerTwitter.length ) {
            twttr.widgets.createTimeline({
                sourceType: "profile",
                screenName: $footerTwitter.data('user-name')
            }, document.getElementById('footerTwitter'));
        }
        
        /* ------------------------------------------------------------------------- *
         * LIVE CHAT WIDGET
         * ------------------------------------------------------------------------- */
        var Tawk_API = Tawk_API || {},
            Tawk_LoadStart = new Date(),
            $tawk = document.createElement("script");
            
        $tawk.async=true;
        $tawk.src='https://embed.tawk.to/57dfd4b85dc7a25e92808cf6/default';
        $tawk.charset='UTF-8';
        $tawk.setAttribute('crossorigin','*');
        
        $($tawk).appendTo('body');
        
        /* ------------------------------------------------------------------------- *
         * COUNTER
         * ------------------------------------------------------------------------- */
        if ( $('.facts-number').length ) {
            $('.facts-number').counterUp({
                delay: 10,
                time: 1000
            });
        }
		
        /* -------------------------------------------------------------------------*
         * MAIN BODY
         * -------------------------------------------------------------------------*/
		var $mainBody = $('#main-body'),
			$mainBodySidebar = $mainBody.find('.sidebar');
		
		$mainBodySidebar.on('click', '.panel-heading', function () {
			$(this).toggleClass('active').siblings().slideToggle('slow');
		});
    });
    
    $(window).on('load', function () {
        /* ------------------------------------------------------------------------- *
         * OWL CARSOUSEL
         * ------------------------------------------------------------------------- */
        var teamSlider = $('.team-items')
        ,   feedbackSlider = $('.feedback-items');

        if ( teamSlider.length ) {
            teamSlider.owlCarousel({
                itemsSelector: '.team-item',
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                autoPlay: true,
                pagination : true
            });
        }

        if ( feedbackSlider.length ) {
            feedbackSlider.owlCarousel({
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                autoPlay: true,
                pagination : true
            });
        }
        
        /* -------------------------------------------------------------------------*
         * FLICKER
         * -------------------------------------------------------------------------*/
        var flickerId = '64801217';
        
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id="+ flickerId +"@N07&lang=en-us&format=json&jsoncallback=?", function (data) {
            $.each(data.items, function (i, item) {
                if (i <= 9) { // <— change this number to display more or less images
                    $("<img/>").attr("src", item.media.m.replace('_m', '_s')).appendTo(".FlickrImages ul").wrap("<li><a href='" + item.link + "'target='_blank' title='" + item.title + "' alt='" + item.alt + "'></a></li>");
                }
            });
        });
        
        /* ------------------------------------------------------------------------- *
         * PRE-LOADER
         * ------------------------------------------------------------------------- */
        $("#preloader").fadeOut('slow');
    });
})(jQuery);
