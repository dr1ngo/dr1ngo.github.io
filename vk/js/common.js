$(function() {

	$(".header__nav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(".footer__nav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".reason__tabs").on("click","a", function (event) {
        event.preventDefault();
        $('.reason__tabs .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.reason__wrapper').not(tab).css({'display': 'none'});
        $(tab).fadeIn(400);
    });

    $('.documentation__wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: ".documentation__wrapper",
        nextArrow: '<a class="fa fa-arrow-right">',
        prevArrow: '<a class="fa fa-arrow-left">',
        adaptiveHeight: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        infinity: true,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1,
            arrows: false
          }
        }
        ]
    });

    $('.quality__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: ".quality__slider",
        nextArrow: '<a class="fa fa-arrow-right">',
        prevArrow: '<a class="fa fa-arrow-left">',
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: false,
        infinity: true,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            arrows: false,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1
          }
        }
    ]
    });
}),

$(function Get() {
    var wrap = $('#wrapper'),
    btn = $('.open-modal-get'),
    modal = $('.cover, .modal--get, .content');

    btn.on('click', function() {
        modal.fadeIn();
    });

    $('.modal').click(function() {
        wrap.on('click', function(event) {
            var select = $('.content');
            if ($(event.target).closest(select).length)
            return;
            modal.fadeOut();
            wrap.unbind('click');
        });
    });
}),

$(function Phone() {
    var wrap = $('#wrapper'),
    btn = $('.open-modal-phone'),
    modal = $('.cover, .modal--phone, .content');

    btn.on('click', function() {
        modal.fadeIn();
    });

    $('.modal').click(function() {
        wrap.on('click', function(event) {
            var select = $('.content');
            if ($(event.target).closest(select).length)
            return;
            modal.fadeOut();
            wrap.unbind('click');
        });
    });
}),

$(function Price() {
    var wrap = $('#wrapper'),
    btn = $('.open-modal-price'),
    modal = $('.cover, .modal--price, .content');

    btn.on('click', function() {
        modal.fadeIn();
    });

    $('.modal').click(function() {
        wrap.on('click', function(event) {
            var select = $('.content');
            if ($(event.target).closest(select).length)
            return;
            modal.fadeOut();
            wrap.unbind('click');
        });
    });
}),

$(function Delivery() {
    var wrap = $('#wrapper'),
    btn = $('.open-modal-delivery'),
    modal = $('.cover, .modal--delivery, .content');

    btn.on('click', function() {
        modal.fadeIn();
    });

    $('.modal').click(function() {
        wrap.on('click', function(event) {
            var select = $('.content');
            if ($(event.target).closest(select).length)
            return;
            modal.fadeOut();
            wrap.unbind('click');
        });
    });
})