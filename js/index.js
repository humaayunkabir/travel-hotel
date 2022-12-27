$('.slider').slick({
    centerMode: true,
    autoplay: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
});


$('.slider-t').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    centerPadding: '60px',
    centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



$('.about-slider').slick({
    centerMode: true,
    autoplay: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    dots: true,
});




$('.hotel-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    centerPadding: '60px',
    centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});