// background swapper 
$background02 = $('.background02');

function swapHeaderBackground() {
    $background02.toggleClass('visible');
}

var mq = window.matchMedia( "(max-device-width: 768px)" );

if (mq.matches) {
    console.log('MQ matched');
    setInterval(swapHeaderBackground, 3000);
}

// Owl carousel
$('.owl-carousel').owlCarousel({
    navigation: false,
    singleItem: true,
    itemScaleUp: true,
    autoPlay: 10000
});

// CookiesDirective
$.cookiesDirective({
    position: 'bottom',
    explicitConsent: false,
    linkColor: '#fff'
});

// Parallax effect
var touch = Modernizr.touch;

$('.img-holder').imageScroll({
    coverRatio: 1.0,
    speed: 0.3,
    imageAttribute: touch === true ? 'image-mobile' : 'image',
    touch: touch
});

// Sticky nav bar
$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('.header-container').addClass("sticky");
        $('.main-container').addClass("padded");
        $('.zilliSlogan').addClass("hidden");
      }
      else {
        $('.header-container').removeClass("sticky");
        $('.main-container').removeClass("padded");
        $('.zilliSlogan').removeClass("hidden");
      }
});

// Instafeed
var feed = new Instafeed({
    get: 'user',
    userId: 1576954181, // getzilli
    resolution: 'thumbnail',
    limit: 15,
    sortBy: 'most-recent',
    clientId: '3a53a32a371c466bb285d52e7efb8129',
    accessToken: '1576954181.3a53a32.3fca1a3c135e4363aa99f31553b6bb7a',
    template: '<a target="_blank" href="{{link}}"><img src="{{image}}" class="instaImg" /></a>'
});
feed.run();

// Scroll to top button
$('.topCircle').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 1500);
});

// GA events on lightbox
$('#lightbox').click(function() {
        console.log('lightbox clicked');
        ga('send', 'event', 'button', 'click', 'play film', '1');
});

// GA events on instagram
$('#instagramLogo').click(function() {
        console.log('instagram clicked');
        ga('send', 'event', 'button', 'click', 'instagram', '1');
});

// GA events on twitter
$('#twitterLogo').click(function() {
        console.log('twitter clicked');
        ga('send', 'event', 'button', 'click', 'twitter', '1');
});
