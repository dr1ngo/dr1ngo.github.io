$(function() {
    $(window).scroll(function() {

        if($(this).scrollTop() > 610) {
            $('.header').fadeOut();
        } else {
            $('.header').fadeIn();
        }
    }),
     
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    }),

    $('.why-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<a class="arrow arrow-next">',
      prevArrow: '<a class="arrow arrow-prev">'
    }),
    
    jQuery('.logo').click(function(){
      $('.header').slideToggle("slow");
    });
});
