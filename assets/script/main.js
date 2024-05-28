
$(document).ready(function () {
    $('#bannerSlider').owlCarousel({
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
        autoplay: true,
        autoplayTimeout: 4000,
    });
    $('#trendingSlider').owlCarousel({
        items: 4,
        margin: 20,
        nav: true,
        dots: false,
        stagePadding: 0,
        smartSpeed: 450,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 576 up
            576: {
                items: 2,
            },
            // breakpoint from 768 up
            768: {
                items: 2,
            },
            // breakpoint from 992 up
            992: {
                items: 3,
            },
            // breakpoint from 1200 up
            1200: {
                items: 4,
            }
        }
    });
    $('#menCollection').owlCarousel({
        items: 4,
        margin: 20,
        nav: true,
        dots: false,
        stagePadding: 0,
        smartSpeed: 450,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 576 up
            576: {
                items: 2,
            },
            // breakpoint from 768 up
            768: {
                items: 2,
            },
            // breakpoint from 992 up
            992: {
                items: 3,
            },
            // breakpoint from 1200 up
            1200: {
                items: 4,
            }
        }
    });
    $('#feedbackSlider').owlCarousel({
        items: 2,
        margin: 20,
        nav: true,
        dots: true,
        stagePadding: 0,
        smartSpeed: 450,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 768 up
            768: {
                items: 2,
            },
            // breakpoint from 992 up
            992: {
                items: 2,
            },
            // breakpoint from 1200 up
            1200: {
                items: 2,
            }
        }
    });
    $('#trendingWomenCollectionSlider').owlCarousel({
        items: 4,
        margin: 18,
        nav: true,
        dots: false,
        stagePadding: 0,
        smartSpeed: 450,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 576 up
            576: {
                items: 2,
            },
            // breakpoint from 768 up
            768: {
                items: 2,
            },
            // breakpoint from 992 up
            992: {
                items: 3,
            },
            // breakpoint from 1200 up
            1200: {
                items: 4,
            },
            // breakpoint from 1400 up
            1400: {
                items: 5,
            },
        }
    });
    $('.cardSlider').owlCarousel({
        items: 1,
        margin: 2,
        nav: true,
        dots: false,
        smartSpeed: 450,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });
    $('.product-slider').owlCarousel({
        items: 1,
        margin: 2,
        nav: true,
        dots: false,
        smartSpeed: 450,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });
    $('.salesSlider').owlCarousel({
        items: 2,
        margin: 10,
        nav: false,
        dots: false,
        smartSpeed: 450,
        autoplay: true,
        autoplayTimeout: 2200,
        loop: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 576 up
            576: {
                items: 2,
            },
            // breakpoint from 768 up
            768: {
                items: 2,
            },
            // breakpoint from 992 up
            992: {
                items: 3,
            },
            // breakpoint from 1200 up
            1200: {
                items: 2,
            },

        }

    });
    // offer counter date 
    var CounterContainer = $('#EndingDate'),
        Display = {
            days: CounterContainer.find('.days'),
            hours: CounterContainer.find('.hours'),
            mins: CounterContainer.find('.mins'),
            secs: CounterContainer.find('.secs'),
        },
        EndingDate = CounterContainer.data('endingdate');

    setInterval(() => {
        DateCounter(EndingDate, Display)
    }, 1000);

    function DateCounter(date, display) {
        var endingDate = new Date(date),
            presentDate = new Date();
        if (endingDate > presentDate) {

            var diff = endingDate - presentDate,
                days = Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours = Math.floor(diff / (1000 * 60 * 60)),
                mins = Math.floor(diff / (1000 * 60)),
                secs = Math.floor(diff / 1000);

            var dy = days,
                hr = hours - days * 24,
                min = mins - hours * 60,
                sec = secs - mins * 60;

            display.days.text(dy);
            display.hours.text(hr);
            display.mins.text(min);
            display.secs.text(sec);
        }
        else {
            display.days.text('00');
            display.hours.text('00');
            display.mins.text("00");
            display.secs.text("00");
        }
    }

    // product gallery image 
    $('[data-fancybox="product-img"]').fancybox({
        buttons: [
            "slideShow",
            "thumbs",
            "zoom",
            "fullScreen",
            "close"
        ],
        loop: false,
        protect: true
    });


    // order quantity increament and decreament 

    // const displayValue = $('.counterDisplay').text();
    let currentValue;

    $('.incrementButton').on('click', function () {
        currentValue = $(this).siblings(".counterDisplay").text();
        currentValue <= 0 ? 0 : currentValue++;
        $(this).siblings(".counterDisplay").text(currentValue);
        console.log(currentValue);
    });

    $('.decrementButton').on('click', function () {
        currentValue = $(this).siblings(".counterDisplay").text();
        currentValue <= 0 ? 0 : currentValue--;
        $(this).siblings(".counterDisplay").text(currentValue);
        console.log(currentValue);
    });



    // selecting cloth sizes 
    var size = $(".size-boxes").children();
    // console.log(size);
    size.click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    // filter category icon onClick changing icon 
    $(".filter-category").click(function () {
        $(this).children().find(".fa-solid").toggleClass("fa-plus fa-minus");
    });

    // filte container toggle 

    // left dialog box 
    $("#filterBtnLeft").click(function () {
        $(this).addClass("active");
        $(".filter-container.left").addClass("show");
    });
    $("#btnClose1").click(function () {
        $("#filterBtnLeft").removeClass("active");
        $(".filter-container.left").removeClass("show");
    });
    // left dialog box 
    $("#filterBtnRight").click(function () {
        $(this).addClass("active");
        $(".filter-container.right").addClass("show");
    });
    $("#btnClose2").click(function () {
        $("#filterBtnRight").removeClass("active");
        $(".filter-container.right").removeClass("show");
    });

    // password field toggle 
    $(".password").siblings(".icon").click(function () {
        $(this).children().toggleClass("fa-eye fa-eye-slash");
        var currentType = $(this).siblings('input').attr('type');
        var newType = (currentType === 'password') ? "text" : "password"
        $(this).siblings('input').attr("type", newType);
    });


    // product details page color selector 
    var screen = $(".dress-colors-display").children("span");
    var colors = $(".color-boxes").children();
    screen.text(colors.data("value"));
    colors.click(function () {
        screen.text($(this).data("value"));
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });

    // add to cart button toggle 
    $(".btn-addCart").click(function () {
        $(this).children().toggleClass("fa-regular fa-solid");
    });

    // guide table toggle 
    $(".table-toggle").click(function () {
        $(".table-container").addClass("show");
    });
    $(".close").click(function () {
        $(".table-container").removeClass("show");
    });

    // stitching option enable dissable 
    var stichingCheckbox = $('.stitching-options input[type="checkbox"]');
    var contentBox = $('.content-box');
    stichingCheckbox.click(function () {
        // Uncheck all other checkboxes 
        stichingCheckbox.not(this).prop('checked', false);
    });
    // console.log(stichingCheckbox);
    stichingCheckbox.click(function () {
        if ($(this).prop("checked")) {
            var contentBoxName = $(this).val();
            contentBox.find("." + contentBoxName).siblings().removeClass("show");
            contentBox.find("." + contentBoxName).prop("checked", false);
            contentBox.find("." + contentBoxName).addClass("show");
            console.log(contentBox);

            // console.log(contentBox.find(contentBoxName).attr('class'));

        } else {
            var contentBoxName = $(this).val();
            contentBox.find("." + contentBoxName).removeClass("show");
        }
    });


    // custom fit check box 
    var customFitSelectBtn = $('.btn-select');
    customFitSelectBtn.click(function () {
        $(this).toggleClass("active");
        $(this).hasClass("active") && $(this).children().children(".form-check-input").prop('checked', true) ? $(this).siblings().removeClass("active") && $(this).siblings().children().children(".form-check-input").prop('checked', false) : null;

    });

    // navbar dropdown toggle
    const toggleBtn = $(".navbar-nav .nav-link");
    toggleBtn.click(function () {
        $(this).parents().siblings().children().siblings(".nav-dropdown").hasClass("show") ? $(this).parents().siblings().children().siblings(".nav-dropdown").removeClass("show") : null;
        $(this).siblings(".nav-dropdown").toggleClass("show");
    });


});
