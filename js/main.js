// Parallax effect
var touch = Modernizr.touch;
$('.img-holder').imageScroll({
    coverRatio: 0.9,
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

// Carousel handler
$('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    fade: true
});