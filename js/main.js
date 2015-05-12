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
    coverRatio: 0.7,
    speed: 0.3,
    imageAttribute: touch === true ? 'image-mobile' : 'image',
    touch: touch
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
