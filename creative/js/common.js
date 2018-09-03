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
  if($(window).width() > 1072) {
    $(window).scroll(function() {
      if($(this).scrollTop() > 500) {
        $('.header').addClass("notActive");
      }
      if($(this).scrollTop() == 0) {
        $('.header').removeClass("notActive");
      }
    })
  }
});

$(function() {
  if($(window).width() < 1072) {
    jQuery('.logo').click(function(){
      $('.header').slideToggle("slow");
    });
  }
});

$(function() {
  jQuery(this).click(function(){
    $('.dot-content').slideToggle("slow");
    $('.dot-header').toggleClass("dot-header--active");
    $('.dot__icon').toggleClass("dot__icon--active");
  });
});