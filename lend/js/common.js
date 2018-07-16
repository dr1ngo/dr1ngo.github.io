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

    $('.slider__wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: ".slider__nav",
        nextArrow: '<a class="fa fa-arrow-right">',
        prevArrow: '<a class="fa fa-arrow-left">',
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '0px',
        infinity: true,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
        ]
    });
	
})