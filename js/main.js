// Parallax effect
var touch = Modernizr.touch;
$('.img-holder').imageScroll({
    coverRatio: 0.5,
    speed: 0.3,
    imageAttribute: touch === true ? 'image-mobile' : 'image',
    touch: touch
});

// Fader handler
$('.fade').slick({
    autoplay: true,
    infinite: true,
    speed: 1000,
    fade: true,
    slide: 'div',
    cssEase: 'linear',
    arrows: false
});


// Carousel handler
$('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1330,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1120,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 970,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 740,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});