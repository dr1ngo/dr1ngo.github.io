$(function() {
    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
     
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});

$(function() {

    $(".header-scroll").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    }),

	$(".navigation").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    }),

    $(".navigation--mobile").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
}),

jQuery(function($) {
    jQuery('.icon').click(function(){
        $('.navigation--mobile').slideDown(1500);
    });
    jQuery('.header').click(function( event ){
        // проверяем находится ли элемент на который кликнули в нашем меню,
        // то есть в контейнере "menu-container"
        var eventInMenu = $( event.target ).parents('.header');
        if( !eventInMenu.length ){
            $('.navigation--mobile').slideUp(1500);
        }
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