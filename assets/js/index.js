$(document).ready(function () {

    new WOW().init();

    // on scroll to count function
    var a = 0;
    $(window).scroll(function () {
        var oTop = $('#whatWeAre').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.card-item').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({ countNum: $this.text() }).animate({
                    countNum: countTo
                },
                    {

                        duration: 7000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }
    });

    // owl-carousel
    $('.owl-carousel.work-with-us-images').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            },
            1400: {
                items: 7
            }
        }
    })

    $('.owl-carousel#customer-testimonial').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1400: {
                items: 1
            },
            1600: {
                items: 2
            }
        }
    })

    $('.owl-carousel#leadership').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            },
            1600: {
                items: 4
            }
        }
    })

    // making go to top functionality
    $('.goTop').on('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })

    // setTimeout(() => {
    //     $('#offer-modal-button').click();
    // }, 3000)

});