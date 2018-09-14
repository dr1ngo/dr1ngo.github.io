$(function() {

    $(".header-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
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
          elm.css("display", "flex").hide().fadeIn();;
        }else{
          elm.fadeOut();
      };
   });
});

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
