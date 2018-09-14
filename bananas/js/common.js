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

    $('.header-content').slick({
      infinite: true,
      slidesToShow: 1,
      appendDots:$(".header-dots"),
      slidesToScroll: 1,
      dots: true,
      arrows: false
    });
}),

$(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 90) {
        $('.logo').addClass("fixed");
      }
      if($(this).scrollTop() < 90) {
        $('.logo').removeClass("fixed");
      }
    });
}),

$(function() {
  $(".services-box").mouseenter(function(){
    $(this).children('.services-content').hide();
    $(this).children('.services-content--hover').css("display", "flex").hide().fadeIn();
  });
  $('.services-box').mouseleave(function(){
    $(this).children('.services-content').css("display", "flex").hide().fadeIn();
    $(this).children('.services-content--hover').hide();
  });
});

$(function() {
   $('.services-box--btn').click(function() {
      var elm = $(".services-wrapper--sub");
        if (elm.css("display") === "none"){
          elm.fadeIn();
        }else{
          elm.fadeOut();
      };
   });
});

