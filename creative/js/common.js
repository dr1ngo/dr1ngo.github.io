$(function() {
    $('.why-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<a class="arrow arrow-next">',
      prevArrow: '<a class="arrow arrow-prev">'
    });
});


$(function() {
  if($(window).width() > 991) {
    $(window).scroll(function() {
      if($(this).scrollTop() > 610) {
        $('.header').addClass("notActive");
      }
      if($(this).scrollTop() == 0) {
        $('.header').removeClass("notActive");
      }
    })
  }
});

$(function() {
  if($(window).width() < 991) {
    jQuery('.logo').click(function(){
      $('.header').slideToggle("slow");
    });
  }
});