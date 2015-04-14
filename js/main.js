// Parallax effect
var touch = Modernizr.touch;
$('.img-holder').imageScroll({
    coverRatio: 0.7,
    speed: 0.3,
    imageAttribute: touch === true ? 'image-mobile' : 'image',
    touch: touch
});

// background swapper 
$background02 = $('.background02');

function swapHeaderBackground() {
    $background02.toggleClass('visible');
}

setInterval(swapHeaderBackground, 3000);

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